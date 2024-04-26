/**
 * ask.js
 */
// ajax===============================================
const asksvc = {
	askList(pno, successCall, errorCall) {
		fetch('askList.do?pno='+ pno)
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	replyList(successCall, errorCall){
		fetch('replyList.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
}
// end of ajax==========================================

//svc.askList===========================================
asksvc.askList(pno, function(result) {
	console.log(result);
	
	result.forEach(ask => {
		let temp = $('#asklist').clone();
		temp.css('display', 'block');
		temp.attr('data-no', ask.askNo);
		temp.find('.userId').text(ask.id);
		temp.find('h5:eq(0)').text(ask.askCategory);
		temp.find('h5:eq(1)').text(ask.askDate);
		temp.find('.userContent').text(ask.askContent);
		
		if(ask.id != id){
			temp.find('.delAskBtn').remove();
		}
		temp.appendTo('.comment_list');
	})
	
	asksvc.replyList(function(result){
		console.log(result);
		result.forEach(reply=>{
			let rtemp = $('#replyist').clone();
			rtemp.css('display', 'block');
			rtemp.attr('data-rno', reply.askNo)

/*			if(askNo == reply.askNo){
			rtemp.find('.replyId').text(reply.id);
				
			rtemp.appendTo('.reply_section');
			}
			*/
			
		})
	})
//========================= delAskBtn =========================
	$('.delAskBtn').on('click',function(){
		console.log('delAskBtn click');
		console.log($(this).closest('#asklist').data('no'));
		let delNo = $(this).closest('#asklist').data('no');
		
		fetch('delAsk.do',{
			method: 'post',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: 'askNo=' + delNo
		})
		.then(result => result.json())
		.then(result => { 
			console.log(result);
			if(result.retCode == 'Success'){
				alert('정상적으로 삭제되었습니다.');
				$(this).closest('#asklist').remove();
			}
		})
		.catch(err => console.error(err));
	})//end of delAskBtn click
	
//===========  reply_btn ====> #addRelpyBtn  =================
	$('.reply_btn').on('click', function() {
		//console.log($(this).parent().parent().parent());
		//console.log($(this).parent().parent().parent().data('no'));
		
		let askDataNo= ($(this).parent().parent().parent().data('no'));
		$('#addRelpyBtn').on('click', function() {
		let replyContent = $('#reply_message').val();
		console.log(replyContent);
		console.log(askDataNo);
	
		fetch('addReply.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
			body: 'pno=' + pno + '&id=' + id +
				'&replyContent=' + replyContent +'&askNo=' + askDataNo
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
		})//end of #addRelpyBtn click
	})//end of .reply_btn click

//=================================
}, function(err) {
	console.log(err);
})//end of svc.askList =============


$('#addAskBtn').on('click', function() {
	let askContent = $('#ask_message').val();
	let askCategory = $('input[name=inlineRadioOptions]:checked').val();
	
	fetch('addAsk.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
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
})



