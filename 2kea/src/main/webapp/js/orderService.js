/**
 * orderService.js
 */
const svc = {
	//주문내역페이지
	orderList(ovo = {}, successCall, errorCall){
		fetch('orderList.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'ono=' + ovo.ono + '&id=' + ovo.id
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall)
	}
}


svc.orderList(function(resolve){
	console.log(resolve);
})
