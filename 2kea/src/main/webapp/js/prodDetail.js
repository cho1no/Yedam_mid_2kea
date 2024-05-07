/**
 * CWH
 * prodDetail.js
 */
image = imageList.substr(1, imageList.length-2).split(',');
image.forEach((e, i) => {
    if (i >= 4) return;
    e = e.trim();
    let showImg = $('<img id="prodImg"/>').attr('src', 'img/'+e);
    $('div.img-showcase').append(showImg);

    let clickImg = $('<div class="img-item"/>').append(
        $('<a href="#"/>').attr('data-id', i+1).append($('<img id="prodImg"/>').attr('src', 'img/'+e))
    );
    $('.img-select').append(clickImg);
});

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


$('.s_product_text').find('#cartAdd').click((e)=>{
    e.stopPropagation();
    addCart(pno, id);
});
if (wish > 0) {
    $('.s_product_text').find('.like_us > i').addClass('fa').addClass('fa-heart').addClass('active').css('color', 'red');
} else {
    $('.s_product_text').find('.like_us > i').addClass('ti-heart').css('color', 'black');;
}
$('.s_product_text').find('.like_us').click((e)=>{
    e.stopPropagation();
    console.log($(e.target));
    $(e.target).find('i').toggleClass('active');
    if ($(e.target).find('i').hasClass('fa')){
        $(e.target).find('i').removeClass('fa').removeClass('fa-heart').css('color', 'black');;
        $(e.target).find('i').addClass('ti-heart');
        delWish(pno, id);
    } else {
        $(e.target).find('i').removeClass('ti-heart');
        $(e.target).find('i').addClass('fa').addClass('fa-heart').css('color', 'red');;
        addWish(pno, id);
    }
})


// 하단 이미지 슬라이더 (같은 카테고리 아이템)
var prod_list_slider = $('.prodDetail_list_slider');

if (prod_list_slider.length) {
    prod_list_slider.owlCarousel({
        items: 4,
        loop: false,
        dots: false,
        autoplay: true,
        mouseDrag: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ["prev", "next"],
        responsive: {
            0: {
                margin: 15,
                items: 1,
                nav: false
            },
            576: {
                margin: 15,
                items: 2,
                nav: false
            },
            768: {
                margin: 30,
                items: 3,
                nav: true
            },
            991: {
                margin: 30,
                items: 4,
                nav: true
            }
        }
    });
}



fetch('prodListByCase.do?case=vw&num=8')
.then(result => result.json())
.then(result => {
    console.log(result);
    result.forEach((e) => {
        let tempProd = $('#single_product0').clone();
        prod_list_slider.trigger('add.owl.carousel', writeData2Temp(e, tempProd));
    })
    prod_list_slider.trigger('refresh.owl.carousel')
})
.catch(()=>{console.log('prodList error')});

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
    tempProd.click(()=>location.href="prodDetail.do?pno="+pno);
    tempProd.css('cursor', 'pointer');
    tempProd.click(()=>location.href="prodDetail.do?pno="+pno);
    // tempProd.find('.add_cart').css('cursor', 'pointer');
    tempProd.css('display', 'block');
    return tempProd;
}