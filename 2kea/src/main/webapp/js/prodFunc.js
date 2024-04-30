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
	//장바구니체크
	cartCheck(cvo = {}, successCall, errorCall) {
		fetch('checkingCart.do', {
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
	},
	//위시삭제
	wishDel(wvo = {}, successCall, errorCall) {
		fetch('removeWish.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + wvo.pno + '&id=' + wvo.id
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall)
	},
	//위시체크
	wishCheck(wvo = {}, successCall, errorCall) {
		fetch('checkingWish.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + cvo.pno + '&id=' + cvo.id
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall)
	},
	


}
function chkWish(prodNo, id) {
	prod_svc.cartCheck(
		{ 'pno': prodNo, 'id': id },
		function(re) {
			if (re.retCode == 'Success') {
				console.log(pno, id);
			}
		},
		function(re) {
			console.log('error');
		}
	)
}


//위시(하트)클릭시 
$('#wish_heart').click(() => {
	wishbtn(prodNo, id)
})

//위시버튼기능
function wishbtn(prodNo, id){
	prod_svc.wishCheck(
		{ 'pno': prodNo, 'id': id },
		function(re) {
			if (id != 'null') {
				if (re.retCode == 'true') {
					prod_svc.wishDel(
						{ 'pno': prodNo, 'id': id },
						function(re){
							if(re.retCode == 'Success'){
								swal('찜목록에서 제거되었습니다.', '', 'success');
							}
						},
						function(re){
							console.log('error');
						}
					)
				} else {
					prod_svc.wishAdd(
						{ 'pno': prodNo, 'id': id },
						function(re){
							if(re.retCode == 'Success'){
								swal('찜목록에 추가되었습니다.', '', 'success');
							}
						},
						function(){
							console.log('error');
						}
					)
				}
			} else {
				swal('로그인이 필요합니다', '', 'warning');
			}
		},
		function(re){
			console.log('error');
		}
	)
}

function addWish(prodNo, id) {
	prod_svc.wishAdd(
		{ 'pno': prodNo, 'id': id },
		function(re) {
			if (re.retCode == 'Success') {
				swal('찜목록에 추가되었습니다.', '', 'success');
			}
		},
		function(re) {
			console.log('error');
		}
	)
}

function delWish(prodNo, id) {
	prod_svc.wishDel(
		{ 'pno': prodNo, 'id': id },
		function(re) {
			if (re.retCode == 'Success') {
				swal('찜목록에서 제거되었습니다.', '', 'success');
			}
		},
		function(re) {
			console.log('error');
		}
	)
}

//find('.single_product_item .single_product_text a').css('color', '#ff3368')

//장바구니 추가버튼기능
function addCart(prodNo, id) {
	prod_svc.cartCheck(
		{ 'pno': prodNo, 'id': id },
		function(re) {
			if (id != 'null') {
				if (re.retCode == 'true') {
					swal('장바구니에 이미 있습니다.', '', 'warning');
				} else {
					prod_svc.cartAdd(
						{ 'pno': prodNo, 'id': id },
						function(re){
							if(re.retCode == 'Success'){
								swal('장바구니에 추가되었습니다.', '', 'success');
							}
						},
						function(){
							
						}
					)
				}
			} else {
				swal('로그인이 필요합니다', '', 'warning');
			}
		},
		function(re) {		
			console.log('error');
		}
	)
}

