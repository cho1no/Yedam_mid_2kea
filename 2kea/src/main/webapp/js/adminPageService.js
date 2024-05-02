/**
 *  KJM
 *  adminPageService.js
 */

const admsvc = {
	adminAskList(successCall) {
		fetch('adminAskList.do')
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	adminAskListRe(successCall) {
		fetch('adminAskListRe.do')
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	adminAskListNoRe(successCall) {
		fetch('adminAskListNoRe.do')
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

	return tr;
}
