/**
 *  KJM
 *  adminPageService.js
 */

const admsvc = {
	//전체문의
	adminAskList(page = 1, successCall) {
		fetch('adminAskList.do?page=' + page)
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	//답변완료
	adminAskListRe(page = 1, successCall) {
		fetch('adminAskListRe.do?page=' + page)
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	//답변대기
	adminAskListNoRe(page = 1, successCall) {
		fetch('adminAskListNoRe.do?page=' + page)
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	//전체목록 Count
	adminAskCount(successCall) {
		fetch('adminAskCount.do')
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	//답변완료 Count
	adminAskCountRe(successCall) {
		fetch('adminAskCountRe.do')
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	//답변대기 Count
	adminAskCountNoRe(successCall) {
		fetch('adminAskCountNoRe.do')
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	//문의관리페이지 => prod 단건
	adminReplyProd(pno = 1, successCall) {
		fetch('adminReplyProd.do?pno=' + pno)
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	adminReplyAsk(ano = 1, successCall) {
		fetch('adminReplyAsk.do?ano=' + ano)
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	}
}

const fields = ['prodNo', 'askNo', 'id', 'askCategory', 'askDate'];

function makeRow(ask = {}) {
	let tr = $('<tr/>');

	fields.forEach(e => {
		let td = $('<td/>');
		td.text(ask[e]);
		tr.append(td)
	})

	const askModal = new bootstrap.Modal(document.getElementById('adminAskModal'));
	$(tr).on('click', function() {
		console.log(ask.askNo);
		admsvc.adminReplyProd(ask.prodNo, replyProdFnc);
		admsvc.adminReplyAsk(ask.askNo, replyAskFnc);
		
		// askDataNo 담기
		let askDataNo = ask.askNo;
		$('#askDataNo').val(askDataNo);
		let replyProdNo = ask.ProdNo;
		$('#replyProdNo').val(replyProdNo);
		
		const askModalToggle = document.getElementById('adminAskModal');
		askModal.show(askModalToggle);
	});
	return tr;
}

// 문의관리 모달 ==> 상품 이미지, 이름, 가격 가져오기
function replyProdFnc(p) {
	console.log(p);
	let temp = $('#adminAskModal');
	temp.find('img').attr('src', 'img/' + p.image1);
	temp.find('h4:eq(0)').text(p.name);
	temp.find('h4:eq(1)').text(p.price + '원');
	temp.find('p:eq(0)').text(p.detail);
	
	return temp;
};

function replyAskFnc(a){
	console.log(a);
	let temp = $('#adminAskModal');
	temp.find('h4:eq(2)').text(' ID :  '+ a.id);
	temp.find('h4:eq(3)').text('문의유형 :  ' + a.askCategory);
	temp.find('#askContent').text(a.askContent);
};


$('#addAdminReplyBtn').on('click', function() {
	let replyContent = $('#replyContent').val();
	let askDataNo = $('#askDataNo').val();
	let pno = $('#replyProdNo').val();
	
	fetch('addReply.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: 'pno=' + pno + '&id=' + id +
			'&replyContent=' + replyContent + '&askNo=' + askDataNo
	})
		.then(result => result.json())
		.then(result => {
			if (result.retCode == 'Success') {
				alert('정상적으로 등록되었습니다.');
				window.location.reload(); //수정
			}
		})
		.catch(err => console.error(err));
});

$('#adminAskModal').on('hidden.bs.modal', function() {
	$('#replyContent').val('');
});


