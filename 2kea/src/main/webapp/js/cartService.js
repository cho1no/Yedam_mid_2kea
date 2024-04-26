/**
 * cartService.js
 */
const svc = {
	//장바구니목록
	cartList(successCall, errorCall) {
		fetch('cartListControl.do')
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall)
	},
	cartUpdate(cvo = {}, successCall, errorCall) {
		fetch('modifyCart.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + cvo.pno + '&id=' + cvo.id + '&qty=' + cvo.qty
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},

}

	
svc.cartList(function(resolve) {
	let cartTotal = 0;
	resolve.forEach(function(e) {
		
		cartTotal += (e.qty * e.price);
		
		let prodNo = e.prodNo;
		let img = e.image1;
		let name = e.name;
		let price = e.price;
		let qty = e.qty;
		let total = (price * qty);
		let data = $('tbody > tr.cart_list').first().clone();
		data.attr('data-pno', prodNo);
		data.find('.media > #cart_prod_img > img').attr('src', "img/" + img);
		data.find('div.media-body > p').text(name);
		data.find('td.price > h5').text(parseInt(price).formatNumber() + '원');
		data.find('td.total > h5').text(parseInt(total).formatNumber() + '원');
		data.find('td.total > h5').data('price', total);
		data.css('display', 'table-row');
		data.find('#cart_prod_img').css('width', '20%');
		
		//data.find('div.d-flex').css('width', '35%');
		data.find('td.total').css('padding', '30px 0').css('width', '12%');
		//data.find('td.subtotal').css('padding', '30px 0');
		data.find('.input-number').val(qty);
		//수량업
		data.find('input.input-number').keyup(()=> {
			let chQty = data.find('.input-number').val();
			if(chQty < 0 || chQty == ''){
				chQty = 0;
			} 
			updateQty(prodNo, id, chQty);
			data.find('td.total > h5').text(parseInt(price*chQty).formatNumber() + '원');
			cartTotal -= parseInt(data.find('td.total > h5').data('price'));
			cartTotal += parseInt(price*chQty);
			$('td.subtotal > h5').text(parseInt(cartTotal).formatNumber() + '원');
		});
		data.find('i.ti-angle-up').click(function() {
			
			qty += 1;
			updateQty(prodNo, id, qty);
			data.find('.input-number').val(qty);
			data.find('td.total > h5').text(parseInt(price*qty).formatNumber() + '원');						
			cartTotal += price;
			$('td.subtotal > h5').text(parseInt(cartTotal).formatNumber() + '원');
		})
		//수량다운
		data.find('i.ti-angle-down').click(() => {
			if(qty <= 0){
				return;
			}					
			qty -= 1;
			updateQty(prodNo, id, qty);
			data.find('.input-number').val(qty);
			data.find('td.total > h5').text(parseInt(price*qty).formatNumber() + '원');
			cartTotal -= price;
			$('td.subtotal > h5').text(parseInt(cartTotal).formatNumber() + '원');	
		})	
		$('tbody').prepend(data);
	});

	$('td.subtotal > h5').text(parseInt(cartTotal).formatNumber() + '원');

}, function(resolve) {
	console.log('error');
})

function updateQty(prodNo, id, qty) {
	svc.cartUpdate(
		{ 'pno': prodNo, 'id': id, 'qty': qty },
		function(re) {
			if (re.retCode == 'Success') {
			}
		},
		function(re) {
			console.log('error');
		}
	)
}



