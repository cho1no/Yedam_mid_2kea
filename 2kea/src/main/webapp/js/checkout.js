/**
 *  test.js
 */

function requestPay() {	
	console.log('test');
//	let data = {prodNo, img, name, price}
	let cartTotal = 0;
	let text = '';
//	let pno = '';
//	let pimg = '';
//	let pPrice = '';
//	let pQty = '';
//	let mEmail = '';
//	let mMname = '';
//	let mPhone = '';
//	let mAddress = '';
	fetch('cartListControl.do')
	.then(resolve => resolve.json())
	.then((resolve)=>{
		resolve.forEach(function(e) {
			console.log(e);
			cartTotal += (e.qty * e.price);
			let prodNo = e.prodNo;
	        let img = e.image1;
	        let name = e.name;
	        let price = e.price;
	        let qty = e.qty;
//	        let email = e.email.lastChild(); //VO에 넣으삼
//	        let mname = e.m_name.lastChild();
//	        let phone = e.phone.lastChild();
//	        let address = e.order_address.lastChild();
//	        
//	        pno += prodNo + ',';
//	        pimg += img + ',';
	        text += name + ',';
//	        pPrice += price + ',';
//	        pQty += qty + ',';
//	        mEmail += email + ',';
//	        mMname += mname + ',';
//	        mPhone += phone + ',';
//	        mAddress += address + ',';
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
		console.log(rsp);
		if (rsp.success) {
			var msg = '결제가 완료되었습니다.';
			msg += '고유ID : ' + rsp.imp_uid;
			msg += '           상점 거래ID : ' + rsp.merchant_uid;
			msg += '결제 금액 : ' + rsp.paid_amount          ;
			msg += '카드 승인번호 : ' + rsp.apply_num;		
//			swal({
//				title: "HTML"+msg+"<br/>"+msg1+"<br/>"+msg2,
//			    html: '',
//			    icon: "success",
//			    confirmButtonColor: "ff3368",
//			    confirmButtonText: "확인",			    
//				}).then((result) => {
//			    if (result.isConfirmed) {
//			      // '확인' 눌렀을 때 호출할 함수
//			      location.href='orderList.do';
//			    }
//				});
			swal(msg,'','success')
			.then(function(){
				location.href='orderList.do';			                
			})
		} else {
			var mmsg = '결제에 실패하였습니다.';
			mmsg += '에러내용 : ' + rsp.error_msg;
				swal({
					title: mmsg,
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
