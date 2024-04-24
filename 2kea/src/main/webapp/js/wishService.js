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
	}
}
svc.wishList(function(resolve) {
	resolve.forEach(function(e) {
		console.log(e.price);
		let prodNo = e.prodNo;
		let img = e.image1;
		let name = e.name;
		let price = e.price;
		let data = $('.justify-content-between[data-pno="0"]').clone();
		data.attr('data-pno', prodNo);
		data.find('.single_product_item>img').attr('src', "img/"+img);
		data.find('.single_product_text>h4').text(name);
		data.find('.single_product_text>h3').text(price);
		data.css('display', 'inline-block');
		$('.product_list').append(data);
		
	})
}, function(resolve) {
	console.log('error');
})

