/**
 * cartService.js
 */
const svc ={
	//장바구니목록
	cartList(successCall, errorCall) {
		fetch('cartListControl.do')
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall)
	},
	cartUpdate(cvo={}, successCall, errorCall) {
		fetch('modifyCart.do?', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno='+cvo.pno+'&id='+cvo.id+'&qty='+cvo.qty
		})	
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	changePNum(prodNo){
	if (!prodNo){
		return;
	}
	
	console.log(event);
	}
}
	
svc.cartUpdate(function(resolve){
	console.log(resolve);
})
svc.cartList(function(resolve){
	resolve.forEach(function(e) {		
		cartTotal = 0;
		cartTotal += (e.qty * e.price);
		
		let prodNo = e.prodNo;
		let img = e.image1;
		let name = e.name;
		let price = e.price;
		let qty = e.qty;
		let total = (price * qty);
		let data = $('tbody > tr.cart_list').first().clone();
		data.attr('data-pno', prodNo);
		data.find('.media > .d-flex > img').attr('src', "img/"+img);
		data.find('div.media-body > p').text(name);
		data.find('td.price > h5').text(parseInt(price).formatNumber()+'원');
		data.find('td.total > h5').text(parseInt(total).formatNumber()+'원');
		data.css('display', 'table-row');
		data.find('img').css('width', '27%');
		data.find('td.total').css('padding', '30px 0');
		data.find('.input-number').val(qty);
//		total.forEach(function(t){
//			console.log(t);
//		})
		data.find('i.ti-angle-up').on('click', svc.cartUpdate(
			{'pno':prodNo, 'id':id, 'qty':qty},
			function(re){
				console.log(re);
			},
			function(re){
				console.log('error');
			}
		))
		$('tbody').prepend(data);
	})


}, function(resolve){
	console.log('error');
})

