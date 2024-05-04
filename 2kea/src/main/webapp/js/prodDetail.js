/**
 * CWH
 * prodDetail.js
 */
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateY(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

$('.s_product_text > h3').text(pname);
$('.s_product_text > h2').text(parseInt(price).formatNumber()+'원');
$('.s_product_text .list li:first-child a').text(category);
$('.s_product_text > p').text(detail);
console.log(imageList);
let images = imageList.substr(1, imageList.length-2);
let arr = images.split(',');
console.log(typeof(arr));
arr.forEach(e => {
    let imgDiv = $('<div/>').data('thumb', 'img/'+ e).append($('<img/>').attr('src', 'img/'+e));
    $('.product_slider_img div#vertical').append(imgDiv)
});
$('#home').html(description);






