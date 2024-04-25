/**
 * ask.js
 */
// ajax===============================================
const asksvc = {
	askList(successCall, errorCall) {
		fetch('askList.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
}
// end of ajax==========================================

//svc.askList===========================================
asksvc.askList(function(result) {
	console.log(result);
	result.forEach(ask => {
		let temp = $('#contact').clone();
		temp.css('display', 'block');
		
		temp.attr('contact', ask.askNo);
		temp.find('#ask_id h4').text(ask.id);
		temp.find('#ask_id h5').text(ask.askDate);
		temp.find('#ask_p p').text(ask.askContent);
		
		temp.appendTo('#myTabContent')
	})

}, function(err) {
	console.log(err);

})//end of svc.askList



