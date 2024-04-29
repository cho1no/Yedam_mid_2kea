/**
 * prodFunc.js
 */
const prod_svc = {
	//장바구니추가
	cartAdd(cvo = {}, successCall, errorCall) {
		fetch('addCart.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + cvo.pno + '&id=' + cvo.id
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall)
	},
	//위시추가
	wishAdd(wvo = {}, successCall, errorCall) {
		fetch('addWish.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + wvo.pno + '&id=' + wvo.id
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall)
	}
}
//장바구니추가버튼 클릭시

//위시(하트)클릭시 
$('#wish_heart').click(() => {
	wishAdd(prodNo, id);
})

function addWish(prodNo, id) {
	prod_svc.wishAdd(
		{ 'pno': prodNo, 'id': id },
		function(re) {
			if (re.retCode == 'Success') {
				swal('찜목록에 추가되었습니다.','','success')		
			}
		},
		function(re) {
			swal('찜목록에서 제거되었습니다.','','success')
		}
	)
}

function addCart(prodNo, id) {
	prod_svc.cartAdd(
		{ 'pno': prodNo, 'id': id },
		function(re) {
			if (re.retCode == 'Success') {
				swal('장바구니에 추가되었습니다.', '', 'success')
			}
		},
		function(re) {
			swal('이미 장바구니에 추가된 상품입니다.','','warning');
		}
	)
}