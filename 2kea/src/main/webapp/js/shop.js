/**
 * CWH
 * shop.js
 */
const params = new URLSearchParams(location.search);
let sw = params.get('sw')==null? '':params.get('sw');
let pg = params.get('pg')==null? 1:params.get('pg');

const svc = {
    shopList(vo = {'sw':sw, 'pg':pg}, successCall, errorCall) {
        url = 'prodShopList.do?';
        url += 'sw=' + vo.sw;
        url += '&pg=' + vo.pg;
        fetch(url)
            .then(resolve => resolve.json())
            .then(successCall)
            .catch(errorCall);
    },
    pagingList(vo = {'sw':sw, 'pg':pg}, successCall, errorCall){
        url = 'prodCount.do?';
        url += 'sw=' + vo.sw;
        url += '&pg=' + vo.pg;
        fetch(url)
        .then(resolve => resolve.json())
        .then(successCall)
        .catch(errorCall);
    }
}
function drawList(vo = {'sw':sw, 'pg':pg}){
    svc.shopList(vo, 
        function(result){
            console.log(result);
            result.forEach((e) => {
                let temp = $('#prod_0').clone();
                $('#prod_0:eq(0)').after(writeData2Temp(e, temp));
            });
        },
        function(e){
            console.log('error');
        }
    )
}
function drawPage(vo = {'sw':sw, 'pg':pg}){
    svc.pagingList(vo,
        function(result){
            console.log(result.totalCount); //0426 여기까지함
        },
        function(e){
            console.log('error');
        }
    )
}







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

drawList();
drawPage();