/**
 * CWH
 * shop.js
 */

// 상품 표시 svc 호출
function drawList(svo = {'sw': sw, 'pg': pg, 'sc': sc, 'cg': cg, 'st': st, 'en': en}){
    svc.shopList(svo, 
        function(result){
            $('.prod:not(#prod_0)').each((idx, ele) =>{ 
               $(ele).remove();  
            });
            result.forEach((e) => {
                let temp = $('#prod_0').clone();
                $('#shop_pageination').before(writeData2Temp(e, temp));
            });
            drawPage(svo);
        },
        function(e){
            console.log('error-list');
        }
    )
}

// 페이지 그리기 svc 호출
function drawPage(svo = {}){
    svc.pagingList(svo,
        function(result){
            createPageList(result);
        },
        function(e){
            console.log('error_page');
        }
    )
}

// 페이지 그리기 svc successCall
function createPageList(result){
    $('ul.pagination').html('');
    $('#prodCnt').text(result.totalCount);

    let pageTarget = $('ul.pagination');

    let totalCount = result.totalCount;
    let startPage, endPage;
    let next, prev;
    let realEnd = Math.ceil(totalCount/9);

    endPage = Math.ceil(pg/9) * 9;
    startPage = endPage - 8;
    endPage = endPage > realEnd ? realEnd : endPage;
    
    next = endPage < realEnd ? true : false;
    prev = startPage > 1;
    
    if (prev){
        let leftPage = $('<li/>').addClass('page-item');
        let a = $('<a/>').addClass('page-link').attr('aria-label', 'Previous').attr('href', '#').attr('data-page', (startPage-1));
        let i = $('<i/>').addClass('ti-angle-double-left');
        a.append(i);
        leftPage.append(a);
        pageTarget.append(leftPage);
    }
    for (let i = startPage; i <= endPage; i++){
        let page = $('<li/>').addClass('page-item');
        let a = $('<a/>').addClass('page-link').attr('href', '#').attr('data-page', i).text(i);
        page.append(a);
        pageTarget.append(page);
    }
    if (next){
        let rightPage = $('<li/>').addClass('page-item');
        let a = $('<a/>').addClass('page-link').attr('aria-label', 'Next').attr('href', '#').attr('data-page', (endPage+1));
        let i = $('<i/>').addClass('ti-angle-double-right');
        rightPage.append(a.append(i));
        pageTarget.append(rightPage);
    }
    
    $('.page-link').click(function (e) {
        pg = $(e.currentTarget).data('page');
        params.set('pg', pg);
        drawList({'sw': sw, 'pg': pg, 'sc': sc, 'cg': cg, 'st': st, 'en': en});
    });

} // end of createPageList

// 상품 데이터 화면에 그리기
function writeData2Temp(e ,tempProd){ // e에 데이터 넣어서 temp에 데이터 집어넣기
    let pno = e.prodNo;
    let img = e.image1;
    let nme = e.name;
    let prc = e.price;
    tempProd.attr('data-pno', pno);
    tempProd.attr('id', 'prod_' + pno);
    tempProd.find('h4').text(nme);
    tempProd.find('h3').text(parseInt(prc).formatNumber() + '원');
    tempProd.find('img').attr('src', 'img/' + img);
    tempProd.css('display', 'block');
    tempProd.click(()=>location.href="prodDetail.do?pno="+pno);
    return tempProd;
}

// 검색 호출 후 리스트 다시 그리기
function searchFunc(){
    sw = $('#searchWord').val();
    params.set('sw', sw);
    drawList({'sw': sw, 'pg': pg, 'sc': sc, 'cg': cg, 'st': st, 'en': en});
}

// 정렬 select
$('#orderSelect').change((e)=>{
    $(e.currentTarget).val();
    params.set('sc', $(e.currentTarget).val());
    sc = $(e.currentTarget).val();
    drawList({'sw': sw, 'pg': pg, 'sc': sc, 'cg': cg, 'st': st, 'en': en});
})

// draw category
svc.getCategory(
    (data) => {
        data.forEach(e=>{
            let li = $('<li/>');
            let a = $('<a/>').text(e.title);
            let span = $('<span/>').text('('+e.cnt+')');
            li.append(a).append(span);
            li.css('cursor', 'pointer');
            li.click(() => {
                cg = e.title;
                params.set('cg', cg);
                params.set('sw', '');
                params.set('pg', 1);
                sw = '';
                pg = 1;
                $('#searchWord').val('');

                drawList({'sw': sw, 'pg': pg, 'sc': sc, 'cg': cg, 'st': st, 'en': en});
            });
            $('.widgets_inner > .list').append(li);
        });
    }, ()=>console.log('error_category') // error
);

// 가격 필터링 검색
function priceList(){
    let startPrice = $('#amount.js-input-from').val();
    let endPrice = $('#amount.js-input-to').val();
    params.set('st', startPrice);
    params.set('en', endPrice);
    st = params.get('st');
    en = params.get('en');

    drawList({'sw': sw, 'pg': pg, 'sc': sc, 'cg': cg, 'st': st, 'en': st});
}

$('#searchBtn').click(e => searchFunc()); // 검색버튼 클릭 이벤트 추가
drawList(); // 최초그리기

$(function () { // document ready
    let mouseDown = false;
    $('.irs-slider.to').mousedown(()=>{
        mouseDown = true;
    });
    $('.irs-slider.from').mousedown(()=>{
        mouseDown = true;
    });
    $(document).mouseup(function (e) { 
        if (mouseDown){
            priceList();
            mouseDown = false;
        }
    });
});

