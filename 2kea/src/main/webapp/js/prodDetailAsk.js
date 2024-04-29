/**
 * ask.js
 */
// ajax===============================================
const asksvc = {
	askList(param={pno:1000, page:1}, successCall) {
		fetch('askList.do?pno=' + param.pno + '&page=' + param.page)
			.then(result => result.json())
			.then(successCall)
			.catch(err=>console.error(err));
	},
	replyList(successCall) {
		fetch('replyList.do')
			.then(result => result.json())
			.then(successCall)
			.catch(err=>console.error(err));
	},
	pagingList(pno=1, successCall){
		fetch('askCount.do?pno=' + pno)
			.then(result => result.json())
			.then(successCall)
			.catch(err=>console.error(err));
	}
	
}
// end of ajax==========================================

//asksvc.askList===========================================
let apage = 1;
asksvc.askList({pno:pno, page:apage}, askListFnc);

function askListFnc(result) {

	//asklist 초기화 - pageination 
	$('#asklist[style="display: block;"]').each((idx, ele)=>{
		$(ele).remove();
	})
/*	document.querySelectorAll('#asklist[style="display: block;"]')//
		.forEach(item=> item.remove());	*/
	
	result.forEach(ask => {
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

		if (ask.id != id) {
			temp.find('.delAskBtn').remove();
		}
		temp.appendTo('.comment_list');
	});



	asksvc.replyList(function(result) {
		result.forEach(reply => {
			$('.comment_list .review_item').each(function() {
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
				}
			});
		});

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
						alert('정상적으로 삭제되었습니다.');
						$(this).closest('#replylist').remove();
					}
				})
				.catch(err => console.error(err));
		})//end of delAskBtn click
	})//end of asksvc.replyList ==================================
	
	//========================= delAskBtn =========================
	$('.delAskBtn').on('click', function() {
		let delNo = $(this).closest('#asklist').data('no');
		
		fetch('delAsk.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'askNo=' + delNo
		})
			.then(result => result.json())
			.then(result => {
				console.log(result);
				if (result.retCode == 'Success') {
					alert('정상적으로 삭제되었습니다.');
					$(this).closest('#asklist').remove();
				}
			})
			.catch(err => console.error(err));
	})//end of delAskBtn click

	//===========  reply_btn ====> #addRelpyBtn  =================
	$('.reply_btn').on('click', function() {
		let askDataNo = ($(this).parent().parent().parent().data('no'));
		let replybtn = $('.reply_btn');
		console.log('sdf');
		$('#addRelpyBtn').on('click', function() {
			let replyContent = $('#reply_message').val();
			fetch('addReply.do', {
				method: 'post',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: 'pno=' + pno + '&id=' + id +
					'&replyContent=' + replyContent + '&askNo=' + askDataNo
			})
				.then(result => result.json())
				.then(result => {
					console.log(result);
					if (result.retCode == 'Success') {
						alert('정상적으로 등록되었습니다.');
						location.reload();
					}
				})
				.catch(err => console.error(err));
		});//end of #addRelpyBtn click
	});//end of .reply_btn click
	
	asksvc.pagingList(pno, createPageList)
};//end of askListFnc



$('#addAskBtn').on('click', function() {
	let askContent = $('#ask_message').val();
	let askCategory = $('input[name=inlineRadioOptions]:checked').val();
	fetch('addAsk.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: 'pno=' + pno + '&id=' + id +
			'&askContent=' + askContent + '&askCategory=' + askCategory
	})
		.then(result => result.json())
		.then(result => {
			console.log(result);
			if (result.retCode == 'Success') {
				alert('정상적으로 등록되었습니다.');
				location.reload();
			}
			$('#ask_message').value = '';
		})
		.catch(err => console.error(err));
});

$('.btn_3_close.closeAskBtn').on('click', ()=>{
	console.log($('#ask_message').value);
})



//ask pageination
document.querySelectorAll('.page-link').forEach(item=>{
	item.addEventListener('click', e=>{
		e.preventDefault();
		console.log(item.innerText);
		apage = item.innerText;
		asksvc.askList({pno:pno, page:apage}, askListFnc)
	})
})


let pageTarget = document.querySelector('div.pagination');

function createPageList(result){
	pageTarget.innerHTML = '';

	let totalCnt = result.totalCount; 
	let startPage, endPage;
	let next, prev; 		
	let realEnd = Math.ceil(totalCnt / 5);
	
	endPage = Math.ceil(apage / 5) *5 
	startPage = endPage - 4;
	endPage = endPage > realEnd ? realEnd : endPage;
	next = endPage < realEnd ? true : false;
	prev = startPage > 1;
	
	//a태그 생성.
	if(prev){
		let aTag = document.createElement('a');
		aTag.innerHTML = "&laquo;";
		aTag.href = "#";	
		aTag.setAttribute('data-page', (startPage-1));
		pageTarget.appendChild(aTag);
	}
	for(let pg = startPage; pg<=endPage; pg++){
		let aTag = document.createElement('a');
		aTag.innerHTML = pg;
		aTag.href = "#";
		aTag.setAttribute('data-page', pg);
		pageTarget.appendChild(aTag);
		if(pg == apage){
			aTag.className = 'active';
		}
	}
	if(next){
		let aTag = document.createElement('a');
		aTag.innerHTML = "&raquo;";
		aTag.href = "#";	
		aTag.setAttribute('data-page', (endPage+1));
		pageTarget.appendChild(aTag);
	}
	//pagination 이동								
	document.querySelectorAll('.pagination>a').forEach(item => {
	item.addEventListener('click', e=>{
		e.preventDefault(); 
		apage = item.dataset.page;
		asksvc.askList({pno:pno, page:apage}, askListFnc)
		})
	})
}//end of createPageList;
