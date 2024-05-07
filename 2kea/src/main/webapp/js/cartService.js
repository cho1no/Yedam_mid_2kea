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
			.catch(errorCall)
	},
	cartRemove(cvo = {}, successCall, errorCall) {
		fetch('removeCart.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + cvo.pno + '&id=' + cvo.id
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall)
	}

}
svc.cartList(function(resolve) {
	console.log(resolve)
	if(resolve.length == 0) {
		$('div.table-responsive').remove();
		let noProd = $('div.cart_inner').append('<h3>상품이 없습니다.</h3>');
		noProd.css("text-align","center");
    } else{
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
		data.find('div.check > input').attr('value', prodNo);
		data.find('.media > #cart_prod_img > img').attr('src', "img/" + img);
		data.find('div.media-body > p').text(name);
		data.find('td.price > h5').text(parseInt(price).formatNumber() + '원');
		data.find('td.total > h5').text(parseInt(total).formatNumber() + '원');
		data.find('td.total > h5').data('price', total);
		data.css('display', 'table-row');
		data.find('#cart_prod_img').css('width', '20%');
		data.find('td.total').css('padding', '30px 0').css('width', '12%');
		data.find('.input-number').val(qty);

		//장바구니추가버튼 클릭시
		$('div.single_product_text span').click(() => {		
				addCart(prodNo, id);					
		})
		//장바구니비우기
		$('.checkout_btn_1').click(() => {
			delAllItem(prodNo, id);
		})
		//수량업
		data.find('input.input-number').keyup(() => {
			let chQty = data.find('.input-number').val();
			if (chQty < 1 || chQty == '') {
				chQty = 1;
			}
			updateQty(prodNo, id, chQty);
			data.find('td.total > h5').text(parseInt(price * chQty).formatNumber() + '원');
			cartTotal -= parseInt(data.find('td.total > h5').data('price'));
			cartTotal += parseInt(price * chQty);
			$('td.subtotal > h5').text(parseInt(cartTotal).formatNumber() + '원');
		});
		data.find('i.ti-angle-up').click(function() {

			qty += 1;
			updateQty(prodNo, id, qty);
			data.find('.input-number').val(qty);
			data.find('td.total > h5').text(parseInt(price * qty).formatNumber() + '원');
			cartTotal += price;
			$('td.subtotal > h5').text(parseInt(cartTotal).formatNumber() + '원');
		})
		//수량다운
		data.find('i.ti-angle-down').click(() => {
			if (qty <= 1) {
				return;
			}
			qty -= 1;
			updateQty(prodNo, id, qty);
			data.find('.input-number').val(qty);
			data.find('td.total > h5').text(parseInt(price * qty).formatNumber() + '원');
			cartTotal -= price;
			$('td.subtotal > h5').text(parseInt(cartTotal).formatNumber() + '원');
		})
		$('tbody').prepend(data);
	});

	$('td.subtotal > h5').text(parseInt(cartTotal).formatNumber() + '원');
}
}, function(resolve) {
	console.log('error');
})
//선택상품삭제
$('.checkout_btn_inner > #btn_1').click(() => {
	$("input[name=buy]:checked").each((idx, ele) => {
		console.log($(ele).val());
		delCheckedItem($(ele).val(), id);
		$(ele).parent().parent().parent().remove();
	})
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

//선택상품삭제
function delCheckedItem(prodNo, id) {
	svc.cartRemove(
		{ 'pno': prodNo, 'id': id },
		function(re) {
			if (re.retCode == 'Success') {
				swal('선택된 상품이 삭제되었습니다', '', 'success');

			}
		},
		function(re) {
			swal('선택된 상품이 없습니다', '', 'error')
		}
	)
} // end of delCheckedItem

//장바구니비우기
function delAllItem(prodNo, id) {
	svc.cartRemove(
		{ 'pno': prodNo, 'id': id },
		function(re) {
			if (re.retCode == 'Success') {
				swal('장바구니 비우기 완료.', '', 'success')
				setTimeout(() => window.location.reload(), 1000);
			} else if (prodNo = null) {
				swal('상품이 없습니다.');
			}
		},
		function(re) {
			console.log('error');
		}
	)
} // end of delAllItem



