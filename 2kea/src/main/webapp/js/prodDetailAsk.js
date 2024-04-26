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
		temp.find('h4:eq(0)').text(ask.id);
		temp.find('h5:eq(0)').text(ask.askCategory);
		temp.find('h5:eq(1)').text(ask.askDate);
		temp.find('p:eq(1)').text(ask.askContent);
		
		temp.appendTo('.comment_list');
	})

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
				alert('정상적으로 처리되었습니다.');
				$(this).closest('#asklist').remove();
			}
		})
		.catch(err => console.error(err));
	})//end of delAskBtn click
	
}, function(err) {
	console.log(err);
})//end of svc.askList





$('#addAskBtn').on('click', function() {
	let askContent = $('#ask_message').val();
	console.log(askContent);

	let askCategory = $('input[name=inlineRadioOptions]:checked').val();
	console.log(askCategory);

	fetch('addAsk.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
		body: 'pno=' + pno + '&id=' + 'test999' +
			'&askContent=' + askContent + '&askCategory=' + askCategory
	})
		.then(result => result.json())
		.then(result => {
			console.log(result);
			if (result.retCode == 'Success') {
				//리스트불러오기
			}
			$('#ask_message').value = '';
		})
		.catch(err => console.error(err));
})
