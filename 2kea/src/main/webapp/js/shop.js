/**
 * CWH
 * shop.js
 */


function drawList(svo = {'sw': sw, 'pg': pg, 'sc': sc, 'cg': cg}){
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

function drawPage(svo = {'sw': sw, 'pg': pg, 'sc': sc, 'cg': cg}){
    svc.pagingList(svo,
        function(result){
            createPageList(result);
        },
        function(e){
            console.log('error_page');
        }
    )
}

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
        drawList({'sw': sw, 'pg': pg, 'sc': sc, 'cg': cg});
    });

} // end of createPageList


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

function searchFunc(){
    sw = $('#searchWord').val();
    params.set('sw', sw);
    console.log(sw);
    drawList({'sw': sw, 'pg': pg, 'sc': sc,'cg': cg});
}

// 정렬 select
$('#orderSelect').change((e)=>{
    $(e.currentTarget).val();
    params.set('sc', $(e.currentTarget).val());
    sc = $(e.currentTarget).val();
    drawList({'sw': sw, 'pg': pg, 'sc': sc, 'cg': cg});

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
            li.click(ev => {
                cg = e.title;
                params.set('cg', cg);
                params.set('sw', '');
                sw = '';
                $('#searchWord').val('');
                drawList({'sw': sw, 'pg': pg, 'sc': sc, 'cg': cg});
            });
            $('.widgets_inner > .list').append(li);
        });
    }, ()=>console.log('error_category') // error
);

$('#amount').change(e=>console.log(e));

$('#searchBtn').click(e => searchFunc());
drawList();