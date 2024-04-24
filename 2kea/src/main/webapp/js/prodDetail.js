/**
 * CWH
 * prodDetail.js
 */

// ajax 모음
const svc = {
    imgList(pno = 1, successCall, errorCall) {
        fetch('prodImgList.do?pno='+pno)
        .then(resolve => resolve.json())
        .then(successCall)
        .catch(errorCall);
    }
}

console.log(category);
console.log(image1);
$('.s_product_text > h3').text(pname);
$('.s_product_text > h2').text(parseInt(price).formatNumber()+'원');
$('.s_product_text .list li:first-child a').text(category);
$('.s_product_text > p').text(detail);

svc.imgList(pno, function(json){
    console.log(json);
    json.forEach(e=>{
        console.log(e);
        console.log(typeof(e.image1));
        $('#vertical').html(
            $('<div/>').data('thumb', 'img/'+ e.image1).append(
                $('<img/>').attr('src', 'img/'+e.image1)
            )
        ); // 이미지 넣기
    })
}, function(){
    console.log('ㅋㅋ');
});








