/**
 * CWH
 * prodMain.js
 */
// ajax 모음
const svc = {
    prodList(vo = {}, successCall, errorCall) {
        fetch('prodListByCase.do?case=' + vo.case + '&num=' + vo.num)
            .then(resolve => resolve.json())
            .then(successCall)
            .catch(errorCall);
    }
}

//product list slider
var prod_list_slider = $('.prod_list_slider');
var view_product_slider = $('.view_product_slider');
const owl = {
    release() {
        if (prod_list_slider.length) {
            prod_list_slider.owlCarousel({
                items: 1,
                loop: false,
                dots: false,
                autoplay: false,
                mouseDrag: false,
                autoplayHoverPause: true,
                autoplayTimeout: 5000,
                nav: true,
                navText: ["prev", "next"],
                smartSpeed: 1000,
                responsive: {
                    0: {
                        margin: 15,
                        nav: false,
                        items: 1
                    },
                    600: {
                        margin: 15,
                        items: 1,
                        nav: false
                    },
                    768: {
                        margin: 30,
                        nav: true,
                        items: 1
                    }
                }
            });
        }
    },
    viewCnt() {
        if (view_product_slider.length) {
            view_product_slider.owlCarousel({
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
    }
}
owl.release();
svc.prodList({ 'case': 'no', 'num': 24 },
    (result) => {
        let cnt = 0;
        let tempPage = $('#prod_list_page0:eq(0)').clone();
        result.forEach((e, i) => {
            if (i % 8 == 0 && i != 0) {
                prod_list_slider.trigger('add.owl.carousel', tempPage);
                cnt++;
                tempPage.attr('id', 'prod_list_page' + cnt);
                $('#prod_list_wrap').append(tempPage);
                tempPage = $('#prod_list_page0:eq(0)').clone()
            }
            let tempProd = $('div#prod_0[data-pno="0"]:eq(0)').clone();
            tempPage.find('#prod_gird').append(writeData2Temp(e, tempProd));
            // prod_list_slider.find('single_product_list_slider').trigger('add.owl.carousel', tempPage);

        })
        prod_list_slider.trigger('refresh.owl.carousel');
        // $(".owl-carousel").owlCarousel();
    }, () => {

    }
);
owl.viewCnt();
svc.prodList({ 'case': 'vw', 'num': 8},
    (result) => {
        result.forEach((e) => {
            let tempProd = $('#single_product0').clone();
            view_product_slider.trigger('add.owl.carousel', writeData2Temp(e, tempProd));
        })
        view_product_slider.trigger('refresh.owl.carousel');
    },
    () => {

    }
);

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
    tempProd.find('.add_cart > span').click((ev)=>{
        ev.stopPropagation();
        addCart(pno, id);
    });
    tempProd.css('display', 'block');
    return tempProd;
}