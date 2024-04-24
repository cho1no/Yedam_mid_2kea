/**
 * CWH
 * prodMain.js
 */
// ajax 모음
const svc = {
    prodList(successCall, errorCall) {
        fetch('prodList.do?')
            .then(resolve => resolve.json())
            .then(successCall)
            .catch(errorCall);
    }
}
svc.prodList((result) => {
    console.log(result);
    let temp = $('div#prod_0[data-pno="0"]:eq(0)').clone();
    result.forEach((e, i) => {
        if (i < 8) {
            let pno = e.prodNo;
            let img = e.image1;
            let nme = e.name;
            let prc = e.price;
            temp.attr('data-pno', pno);
            temp.attr('id', 'prod_' + pno);
            temp.find('h4').text(nme);
            temp.find('h3').text(parseInt(prc).formatNumber() + '원');
            temp.find('img').attr('src', 'img/' + img);
            temp.css('display', 'block');
            console.log(temp);
            $('div#prod_gird0').append(temp);
        }
    })
}, () => {
    
})
