/**
 * ask.js
 */
// ajax===============================================
const asksvc = {
	askList(param = { pno: 1000, page: 1 }, successCall) {
		fetch('askList.do?pno=' + param.pno + '&page=' + param.page)
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	replyList(successCall) {
		fetch('replyList.do')
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	pagingList(pno = 1, successCall) {
		fetch('askCount.do?pno=' + pno)
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	}

}
// end of ajax==========================================

//asksvc.askList===========================================
let apage = 1;
asksvc.askList({ pno: pno, page: apage }, askListFnc);

function askListFnc(resp) {
	let result = resp.list;

	//asklist 초기화 - pageination 
	$('#asklist[style="display: block;"]').remove();
	$('.noAsk').remove();

	// 문의가 없는 경우
	if (result.length == 0) {
		let noAskMsg = $('<div>', {
			class: 'noAsk',
			text: '문의내역이 없습니다.',
			css: {
				'text-align': 'center',
				'font-size': '16px',
			}
		});
		noAskMsg.appendTo('.comment_list');
	} //문의가 있는 경우
	else {
		result.forEach(ask => {
			let temp = makeAsk(ask);
			temp.appendTo('.comment_list');
		});
	}

	/*==========================
		문의(Ask) 삭제 버튼 클릭 
	============================*/
	$('.delAskBtn').on('click', function() {
		let delNo = $(this).closest('#asklist').data('no');

		fetch('delAsk.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'askNo=' + delNo
		})
			.then(result => result.json())
			.then(result => {
				if (result.retCode == 'Success') {
					delQnaAlert();
					asksvc.askList({ pno: pno, page: apage }, askListFnc);
				}
			})
			.catch(err => console.error(err, 
			errorAskAlert()));
	})//end of delAskBtn click

	/*===========================
		문의가 있는 경우 makeAsk
	============================*/
	function makeAsk(ask) {
		let temp = $('#asklist').clone();
		temp.css('display', 'block');
		temp.attr('data-no', ask.askNo);
		temp.find('.userId').text(ask.id);
		temp.find('.askCategory').text(ask.askCategory);
		temp.find('.askDate').text(ask.askDate);
		temp.find('.userContent').text(ask.askContent);
		temp.find('.userContent').css({
			"padding-top": 0,
			"margin-bottom": 2
		});
		if (auth == '' || auth != 'ADMIN') {
					temp.find('.reply_btn').remove();
				}
		if (ask.id != id) {
			temp.find('.delAskBtn').remove();
		}
		return temp;
	}
	/*======================
		replyList 불러오기
	=======================*/
	asksvc.replyList(function(result) {
		result.forEach(reply => {
			$('.comment_list>.review_item').each(function() {
				let askDataNo = $(this).data('no');
				if (askDataNo == reply.askNo) {
					let rtemp = $('#replylist').clone();
					rtemp.css('display', 'block');
					rtemp.attr('data-rno', reply.askNo);
					rtemp.find('.replyId').text(reply.id);
					rtemp.find('.replyDate').text(reply.replyDate);
					rtemp.find('.replyContent').text(reply.replyContent);
					rtemp.find('.replyContent').css("padding-top", 0);
					rtemp.appendTo($(this).find('.reply_section'));
					rtemp.closest('#asklist').find('.reply_btn').remove();

					if (auth != 'ADMIN') {
						rtemp.find('.delReplyBtn').remove();
					}
				}
			});
		});

		/*==========================
			답변(Reply) 삭제 버튼 클릭 
		============================*/
		$('.delReplyBtn').on('click', function() {
			let delNo = $(this).closest('#replylist').data('rno');

			fetch('delReply.do', {
				method: 'post',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: 'askNo=' + delNo
			})
				.then(result => result.json())
				.then(result => {
					if (result.retCode == 'Success') {
						delQnaAlert();
						asksvc.askList({ pno: pno, page: apage }, askListFnc);
					}
				})
				.catch(err => console.error(err));
		})//end of delAskBtn click
	})//end of asksvc.replyList

	/*===================================================
		reply_btn 버튼 클릭 후 askDataNo에 data-no 값 넣기
	=====================================================*/
	$('.reply_btn').on('click', function() {
		let askDataNo = ($(this).parent().parent().parent().data('no'));
		$('#askDataNo').val(askDataNo);
	});

	/*==================================
	   페이징 리스트 불러오기 - pageination
	====================================*/
	createPageList(resp);
};//end of askListFnc


/*======================================================
	 답변(Reply) 추가 <= reply_message값, data-no 값 가져옴
========================================================*/
$('#addRelpyBtn').on('click', function() {
	let replyContent = $('#reply_message').val();
	let askDataNo = $('#askDataNo').val();
	
	if(replyContent.trim() == ''){
		noQnAContent();
	} else{
		fetch('addReply.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + pno + '&id=' + id +
				'&replyContent=' + replyContent + '&askNo=' + askDataNo
		})
			.then(result => result.json())
			.then(result => {
				if (result.retCode == 'Success') {
					addQnaAlert();
					asksvc.askList({ pno: pno, page: apage }, askListFnc);
				}
			})
			.catch(err => console.error(err));
	}
	
});//end of #addRelpyBtn click

/*============================================
   addAskBtn 클릭 => 문의 추가 => 리스트 다시 보여줌
==============================================*/
$('#addAskBtn').on('click', function() {
	let askContent = $('#ask_message').val();
	let askCategory = $('input[name=inlineRadioOptions]:checked').val();
	if(askContent.trim() == ''){
		noQnAContent();
	} else{
		fetch('addAsk.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + pno + '&id=' + id +
				'&askContent=' + askContent + '&askCategory=' + askCategory
		})
			.then(result => result.json())
			.then(result => {
				if (result.retCode == 'Success') {
					addQnaAlert();
					asksvc.askList({ pno: pno, page: apage }, askListFnc);
				}
			})
			.catch(err => console.error(err));
	}
});

/*==================================
   ask pageination 
====================================*/
document.querySelectorAll('.pagination>a').forEach(item => {
	item.addEventListener('click', e => {
		e.preventDefault();
		apage = item.innerText;
		asksvc.askList({ pno: pno, page: apage }, askListFnc);
	});
});

let pageTarget = document.querySelector('div.pagination');

function createPageList(result) {
	pageTarget.innerHTML = '';
	let totalCnt = result.totalCount;
	let startPage, endPage;
	let next, prev;
	let realEnd = Math.ceil(totalCnt / 5);

	endPage = Math.ceil(apage / 5) * 5
	startPage = endPage - 4;
	endPage = endPage > realEnd ? realEnd : endPage;
	next = endPage < realEnd ? true : false;
	prev = startPage > 1;

	//a태그 생성.
	if (prev) {
		let aTag = document.createElement('a');
		aTag.innerHTML = "&laquo;";
		aTag.href = "#";
		aTag.setAttribute('data-page', (startPage - 1));
		pageTarget.appendChild(aTag);
	}
	for (let pg = startPage; pg <= endPage; pg++) {
		let aTag = document.createElement('a');
		aTag.innerHTML = pg;
		aTag.href = "#";
		aTag.setAttribute('data-page', pg);
		pageTarget.appendChild(aTag);
		if (pg == apage) {
			aTag.className = 'active';
		}
	}
	if (next) {
		let aTag = document.createElement('a');
		aTag.innerHTML = "&raquo;";
		aTag.href = "#";
		aTag.setAttribute('data-page', (endPage + 1));
		pageTarget.appendChild(aTag);
	}
	//pagination 이동								
	document.querySelectorAll('.pagination>a').forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault();
			apage = item.dataset.page;
			asksvc.askList({ pno: pno, page: apage }, askListFnc)
		})
	})
}//end of createPageList;

//===============================================================
const myModal = new bootstrap.Modal(document.getElementById('AskModal'));
$('.btn_ask').on('click', function() {
	if (id == '') {
		goSignIn();
	} else {
		const modalToggle = document.getElementById('AskModal');
		myModal.show(modalToggle)
	}
});

function goSignIn(){
	Swal.fire({
        title: '로그인이 필요합니다.',
        icon: 'warning',
        confirmButtonText: '확인',
        preConfirm: ()=>{
          location.href = "signIn.do";
        }
      })
};

function noQnAContent(){
	Swal.fire({
        title: '내용을 적어주세요.',
        icon: 'warning',
        confirmButtonText: '확인',
      })
};

function addQnaAlert(){
	Swal.fire({
        title: '등록되었습니다.',
        icon: 'success',
        confirmButtonText: '확인',
      })
};

function delQnaAlert(){
	Swal.fire({
        title: '삭제되었습니다.',
        icon: 'success',
        confirmButtonText: '확인',
      })
};

function errorAskAlert(){
	Swal.fire({
        title: '답변이 달린 문의글은 삭제하실 수 없습니다.',
        icon: 'warning',
        confirmButtonText: '확인',
      })
};

// 모달을 닫을 때 textarea의 내용을 비워줌.
$('#AskModal').on('hidden.bs.modal', function() {
	$('#ask_message').val('');
});
$('#ReplyModal').on('hidden.bs.modal', function() {
	$('#reply_message').val('');
});