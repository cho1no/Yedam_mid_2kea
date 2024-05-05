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
	//문의관리페이지 => ask 단건
	adminReplyAsk(ano, successCall) {
		fetch('adminReplyAsk.do?ano=' + ano)
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	//reply 단건
	getReply(ano, successCall) {
		fetch('getReply.do?ano=' + ano)
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	}
};

/*=======================
  문의관리페이지 tr, td 생성
=========================*/
const fields = ['prodNo', 'askNo', 'id', 'askCategory', 'askDate'];
function makeRow(ask = {}) {
	let tr = $('<tr/>');
	fields.forEach(e => {
		let td = $('<td/>');
		td.text(ask[e]);
		tr.append(td)
	})
	
	// replyCheck 답변유무 => 답변대기(0), 답변완료(1~)
	let rc = $('<span/>');
	rc.css('cursor', 'pointer');
	rc.className = "badge bg-success";
	if (ask.rc == 0) {
		rc.text('답변대기');
	} else {
		rc.text('답변완료');
		rc.css('color', '#ff3368');
	}
	let td = $('<td/>');
	td.append(rc);
	tr.append(td);
	
	// 모달 가져오기
	const adminNoReModal = new bootstrap.Modal(document.getElementById('adminNoReplyModal'));
	const adminReplyModal = new bootstrap.Modal(document.getElementById('adminReplyModal'));
	$(td).on('click', function() {
		// askDataNo, replyProdNo => input에 담기
		let askDataNo = ask.askNo;
		$('#askDataNo').val(askDataNo);
		let replyProdNo = ask.ProdNo;
		$('#replyProdNo').val(replyProdNo);
		
		//rc: replyCheck(0 & 1~)
		if (ask.rc == 0) {
			//답변대기
			admsvc.adminReplyProd(ask.prodNo, NoReplyProdFnc);
			admsvc.adminReplyAsk(ask.askNo, NoReplyAskFnc);
			const NoReModalToggle = document.getElementById('adminNoReplyModal');
			adminNoReModal.show(NoReModalToggle);
		} else{
			//답변완료
			admsvc.adminReplyProd(ask.prodNo, ReplyProdFnc);
			admsvc.adminReplyAsk(ask.askNo, ReplyAskFnc);
			admsvc.getReply(ask.askNo, getReplyFnc);
			const ReModalToggle = document.getElementById('adminReplyModal');
			adminReplyModal.show(ReModalToggle);
		}
	});
	return tr;
}; //And of makeRow 

/*==================
			답변 대기
====================*/
// 답변대기 모달 ==> 상품 이미지, 이름, 가격 가져오기
function NoReplyProdFnc(p) {
	let temp = $('#adminNoReplyModal');
	temp.find('img').attr('src', 'img/' + p.image1);
	temp.find('h4:eq(0)').text(p.name);
	temp.find('h4:eq(1)').text(parseInt(p.price).formatNumber() + '원');
	temp.find('p:eq(0)').text(p.detail);

};

// 답변대기 모달 ==> id, askContent, askCategory 가져오기
function NoReplyAskFnc(a) {
	let temp = $('#adminNoReplyModal');
	temp.find('h4:eq(2)').text(' ID :  ' + a.id);
	temp.find('h4:eq(3)').text('문의유형 :  ' + a.askCategory);
	temp.find('#askContentNoRe').text(a.askContent);
};

/*==================
			답변 완료
====================*/
// 답변완료 모달 ==> 상품 이미지, 이름, 가격 가져오기
function ReplyProdFnc(p) {
	let temp = $('#adminReplyModal');
	temp.find('img').attr('src', 'img/' + p.image1);
	temp.find('h4:eq(0)').text(p.name);
	temp.find('h4:eq(1)').text(parseInt(p.price).formatNumber() + '원');
	temp.find('p:eq(0)').text(p.detail);
};

// 답변완료 모달 ==> id, askContent, askCategory 가져오기
function ReplyAskFnc(a) {
	let temp = $('#adminReplyModal');
	temp.find('h4:eq(2)').text(' ID :  ' + a.id);
	temp.find('h4:eq(3)').text('문의유형 :  ' + a.askCategory);
	temp.find('#askContentRe').text(a.askContent);
};

// 답변완료 모달 ==> replyContent 가져오기
function getReplyFnc(r){
	let temp = $('#adminReplyModal');
	temp.find('#replyContentRe').val(r.replyContent);
}

/*==================
  모달 닫으면 내용 비우기
====================*/
$('#adminNoReplyModal').on('hidden.bs.modal', function() {
	$('#replyContentNoRe').val('');
});
$('#adminReplyModal').on('hidden.bs.modal', function() {
	$('#replyContent').val('');
});