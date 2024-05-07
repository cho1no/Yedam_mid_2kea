/**
 *  checkoutService.js
 */
const cvc ={
	//장바구니목록
	cartList(successCall, errorCall){
		fetch('cartListControl.do')
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall)
	}
}

//장바구니목록
cvc.cartList(function(resolve){
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
		data.find('#cart_prod_img').css('width', '15%');
		data.find('td.total').css('padding', '30px 0').css('width', '12%');
		data.find('.qty').text(qty + '개');	
		$('tbody').prepend(data);
	})
	$('td.subtotal > h5').text(parseInt(cartTotal).formatNumber() + '원');
}, function(resolve){
	console.log('error');
})//end 장바구니목록
		
//카카오페이결제 api
function requestPay() {	
	console.log('test');
	let iname = $('#name')
	let inumber = $('#number')
	let iemail = $('#email')
	let ipostcode = $('#sample4_postcode') //우편번호
	let iaddress = $('#sample4_roadAddress') //도로명주소
	let ijibunadd = $('#sample4_jibunAddress') //지번주소
	 if (iname.val() == "") {
        swal('이름을 입력하세요','','warning');
        return false;
    } else if(inumber.val() == ""){
		swal('전화번호를 입력하세요','','warning');
        return false;
	} else if(iemail.val() == ""){
		swal('이메일을 입력하세요','','warning');
        return false;
	} else if(ipostcode.val() == ""){
		swal('우편번호를 입력하세요','','warning');
		return false;
	} else if(iaddress.val() == "" || ijibunadd.val() == ""){
		swal('주소를 입력하세요','','warning');
        return false;
	}
	
	let cartTotal = 0;
	let text = '';
//	function data(){
//	let mname = $('#name').val();
//	let number = $('#number').val();
//	let email = $('#eamil').val();
//	let post = $('#sample4_postcode').val();
//	let roadAd = $('#sample4_roadAddress').val();
//	let jibunAd = $('#sample4_jibunAddress').val();
//	let detailAd = $('#sample4_detailAddress').val();
//	}
	fetch('cartListControl.do')
	.then(resolve => resolve.json())
	.then((resolve)=>{
		resolve.forEach(function(e) {
			
			cartTotal += (e.qty * e.price);
	        let name = e.name;
	        text += name + ',';
		})
	//가맹점 식별코드
	IMP.init('imp06781844');
	IMP.request_pay({
		pg : 'kakaopay',
		pay_method : 'card',
		merchant_uid : 'merchant_' + new Date().getTime(),
		name : text, //결제창에서 보여질 이름
		amount : cartTotal, //실제 결제되는 가격
		buyer_email : '',
		buyer_name : '',
		buyer_tel : '',
		buyer_addr : '',
	}, function(rsp) {
		
		if (rsp.success) {
//			var msg = '[Ⅱkea]  결제가 완료되었습니다..!!';
//			msg += '고유ID : ' + rsp.imp_uid;
//			msg += '           상점 거래ID : ' + rsp.merchant_uid;
//			msg += '결제 금액 : ' + rsp.paid_amount.formatNumber()    + '원'      ;
			//msg += '카드 승인번호 : ' + rsp.apply_num;		
			Swal.fire({
				title: "결제완료",
				html: "고유ID: "+ rsp.imp_uid + "<br/>" + "상점거래 ID: "+ rsp.merchant_uid 
						+ "<br/>" + "결제 금액: "+ rsp.paid_amount.formatNumber() +"원<br/>"
						+ "카드승인번호: "+ rsp.apply_num,
				icon: "success",
				confirmButtonColor: "#ff3368",
				confirmButtonText: "확인",
			}).then((result) => {
				if(result.isConfirmed){		
									
				 	location.href='orderList.do';			                
				}
			})
			} else {			
				Swal.fire({
					title: "결제실패",
					html: "에러내용: "+ rsp.error_msg,
					icon:'error',
					confirmButtonColor: 'ff3368',
			    	confirmButtonText: '확인'
			    })
		}
				
		});
		
})

.catch(()=>{
		
})
}




//주소찾기 api
//본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
function sample4_execDaumPostcode() {
	new daum.Postcode({
		oncomplete: function(data) {
			// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

			// 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
			// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
			var roadAddr = data.roadAddress; // 도로명 주소 변수
			var extraRoadAddr = ''; // 참고 항목 변수

			// 법정동명이 있을 경우 추가한다. (법정리는 제외)
			// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
			if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
				extraRoadAddr += data.bname;
			}
			// 건물명이 있고, 공동주택일 경우 추가한다.
			if (data.buildingName !== '' && data.apartment === 'Y') {
				extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
			}
			// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
			if (extraRoadAddr !== '') {
				extraRoadAddr = ' (' + extraRoadAddr + ')';
			}

			// 우편번호와 주소 정보를 해당 필드에 넣는다.
			document.getElementById('sample4_postcode').value = data.zonecode;
			document.getElementById("sample4_roadAddress").value = roadAddr;
			document.getElementById("sample4_jibunAddress").value = data.jibunAddress;

			// 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
			if (roadAddr !== '') {
				document.getElementById("sample4_extraAddress").value = extraRoadAddr;
			} else {
				document.getElementById("sample4_extraAddress").value = '';
			}

			var guideTextBox = document.getElementById("guide");
			// 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
			if (data.autoRoadAddress) {
				var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
				guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
				guideTextBox.style.display = 'block';

			} else if (data.autoJibunAddress) {
				var expJibunAddr = data.autoJibunAddress;
				guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
				guideTextBox.style.display = 'block';
			} else {
				guideTextBox.innerHTML = '';
				guideTextBox.style.display = 'none';
			}
		}
	}).open();
}

