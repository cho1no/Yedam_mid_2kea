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
	adminAskListRe(successCall) {
		fetch('adminAskListRe.do')
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	//답변대기
	adminAskListNoRe(successCall) {
		fetch('adminAskListNoRe.do')
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
	}
}

const fields = ['prodNo', 'askNo', 'id', 'askCategory', 'askDate'];

function makeRow(ask = {}) {
	let tr = $('<tr/>');

	fields.forEach(e => {
		let td = $('<td/>');
		//prodNo 누르면 link 이동
		if (e === 'prodNo') {
			let a = $('<a/>', {
				href: '/2kea/prodDetail.do?pno=' + ask[e],
				text: ask[e],
			});
			td.append(a);
		} else {
			td.text(ask[e]);
		}
		tr.append(td)
	})
	tr.click(()=>{location.href="prodDetail.do?pno="+ask.prodNo})
	return tr;
}
