/**
 * 
 */

// 첫 화면 : 전체목록
let apage = 1;
admsvc.adminAskList(apage, adminAskListFnc);

function adminAskListFnc(result) {
	$('#tb_list').empty();
	result.forEach(ask => {
		$('#tb_list').append(makeRow(ask));
	});
	
	admsvc.adminAskCount(createPageList);
};

/*====================
 	  Ask 카테고리
======================*/
// 전체보기
$('#askCategory p:eq(0)').on('click', () => {
	admsvc.adminAskList(apage, function(result) {
		$('#tb_list').empty();
		result.forEach(ask => {
			$('#tb_list').append(makeRow(ask));
		});
		
		admsvc.adminAskCount(createPageList);
	});
});

// 답변대기
$('#askCategory p:eq(1)').on('click', () => {
	admsvc.adminAskListNoRe(function(result) {
		$('#tb_list').empty();
		result.forEach(ask => {
			$('#tb_list').append(makeRow(ask));
		});
	});
});

// 답변완료
$('#askCategory p:eq(2)').on('click', () => {
	admsvc.adminAskListRe(function(result) {
		$('#tb_list').empty();
		result.forEach(ask => {
			$('#tb_list').append(makeRow(ask));
		});
	});
});


/*====================
 	  Ask Count
======================*/
admsvc.adminAskCount(function(count){
	$('#askCategory p span:eq(0)').text('('+count.totalCount+')');
});

admsvc.adminAskCountNoRe(function(count){
	$('#askCategory p span:eq(1)').text('('+count.totalCount+')');
});

admsvc.adminAskCountRe(function(count){
	$('#askCategory p span:eq(2)').text('('+count.totalCount+')');
});

//========================================================
document.querySelectorAll('.page-link').forEach(item => {
	item.addEventListener('click', e => {
		e.preventDefault();
		console.log(item.innerText);
		apage = item.innerText;
		admsvc.adminAskList({page: apage}, adminAskListFnc);
	})
})


let pageTarget = document.querySelector('div.pagination');

function createPageList(result) {
	pageTarget.innerHTML = '';
	let totalCnt = result.totalCount;
	let startPage, endPage;
	let next, prev;
	let realEnd = Math.ceil(totalCnt / 10);
	let pagesize = 5
	endPage = Math.ceil(apage / pagesize) * pagesize
	startPage = endPage - pagesize + 1;
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
			admsvc.adminAskList(apage, adminAskListFnc);
		})
	})
}//end of createPageList;


