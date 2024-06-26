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
		.catch(()=>console.log('cartAdd Error'))
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
		.catch(()=>console.log('cartCheck Error'))
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
		.catch(()=>console.log('wishAdd error'))
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
		.catch(()=>console.log('wishDel Error'))
	},
	//위시체크
	// wishCheck(wvo = {}, successCall, errorCall) {
	// 	fetch('checkingWish.do', {
	// 		method: 'post',
	// 		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	// 		body: 'pno=' + cvo.pno + '&id=' + cvo.id
	// 	})
	// 		.then(resolve => resolve.json())
	// 		.then(successCall)
	// 		.catch(errorCall)
	// },
}
// function chkWish(prodNo, id) {
// 	prod_svc.cartCheck(
// 		{ 'pno': prodNo, 'id': id },
// 		function(re) {
// 			console.log(re.retCode);
// 			if (re.retCode == 'true') {
// 				console.log('1');
// 			} else {
// 				console.log('2');
// 			}
// 		},
// 		function(re) {
// 			console.log('error');
// 		}
// 	)
// }


function addWish(prodNo, id) {
	if (id != '') {
		prod_svc.wishAdd(
			{ 'pno': prodNo, 'id': id },
			function(re) {}
		)
	} else {
		needSignIn();
	}
}

function delWish(prodNo, id) {
	if (id != ''){
		prod_svc.wishDel(
			{ 'pno': prodNo, 'id': id },
			function(re) {}
		)
	} else {
		needSignIn();
	}
}

//find('.single_product_item .single_product_text a').css('color', '#ff3368')

//장바구니 추가버튼기능
function addCart(prodNo, id) {
	prod_svc.cartCheck(
		{ 'pno': prodNo, 'id': id },
		function(re) {
			if (id != '') {
				if (re.retCode == 'true') {
					// swal('장바구니에 이미 있습니다.', '', 'warning');
					Swal.fire({
						title: '장바구니에 이미 있습니다.',
						icon: 'warning',
						confirmButtonText: '확인'
					})
				} else {
					prod_svc.cartAdd(
						{ 'pno': prodNo, 'id': id },
						function(re){
							if(re.retCode == 'Success'){
								// swal('장바구니에 추가되었습니다.', '', 'success');
								Swal.fire({
									title: '장바구니에 추가되었습니다.',
									icon: 'success',
									confirmButtonText: '확인'
								})
							}
						}
					)
				}
			} else {
				needSignIn();
			}
		}
	)
}

function needSignIn(){
	Swal.fire({
        title: '로그인이 필요합니다.',
        icon: 'warning',
        confirmButtonText: '확인',
        preConfirm: ()=>{
          location.href = "signIn.do";
        }
    })
}