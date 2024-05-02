/**
 * wishService.js
 */
	 
const svc = {
	//위시목록
	wishList(successCall, errorCall) {
		fetch('wishListControl.do')
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	

}

var best_wish_product_slider  = $('.wish .best_wish_product_slider');


    best_wish_product_slider.owlCarousel({
      items: 1,
      loop: false,
      dots: false,
      autoplay: false,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: ["next", "previous"],
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


svc.wishList(function(resolve) {
	
	resolve.forEach(function(e) {
		   
		let prodNo = e.prodNo;
		let img = e.image1;
		let name = e.name;
		let price = e.price;
		let data = $('#owl_wish > .single_product_item').clone();
		data.attr('data-pno', prodNo);
		data.find('img').attr('src', "img/"+img);
		data.find('h4').text(name);
		data.find('h3').text(parseInt(price).formatNumber()+'원');
		data.css('display', 'inline-block');
		data.find('.add_cart > span').click(() => {
			addCart(prodNo, id);
		})
		data.find('#wish_heart').click(() =>{
			addWish(prodNo, id);
		})
		best_wish_product_slider.trigger('add.owl.carousel', data);
	})
	
	best_wish_product_slider.trigger('refresh.owl.carousel');

	
		
}, function(resolve) {
	console.log('error');
})


