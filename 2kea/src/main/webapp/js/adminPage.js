/**
 * 
 */


let apage = 1;

/*====================
		make AskList  
======================*/
function makeAskList() {
	admsvc.adminAskList(apage,
		function(result) {
			$('#tb_list').empty();
			result.forEach(ask => {
				$('#tb_list').append(makeRow(ask));
			});
			//페이지 생성
			admsvc.adminAskCount(createPageAskList);
		});
};

function makeAskListNoRe() {
	admsvc.adminAskListNoRe(apage,
		function(result) {
			$('#tb_list').empty();
			result.forEach(ask => {
				$('#tb_list').append(makeRow(ask));
			});
			admsvc.adminAskCountNoRe(createPageNoRe);
		});
};

function makeAskListRe() {
	admsvc.adminAskListRe(apage,
		function(result) {
			$('#tb_list').empty();
			result.forEach(ask => {
				$('#tb_list').append(makeRow(ask));
			});
			admsvc.adminAskCountRe(createPageRe);
		});
};

/*====================
			Ask Category
======================*/
// 전체보기
$('#askCategory p:eq(0)').on('click',	() => {
    apage = 1; //페이지 위치 초기화
    makeAskList();
});

// 답변대기
$('#askCategory p:eq(1)').on('click',	() => {
    apage = 1;
    makeAskListNoRe();
});	

// 답변완료
$('#askCategory p:eq(2)').on('click',	() => {
    apage = 1;
    makeAskListRe();
});	


/*====================
			Ask Count
======================*/
admsvc.adminAskCount(function(count) {
	$('#askCategory p span:eq(0)').text('(' + count.totalCount + ')');
});

admsvc.adminAskCountNoRe(function(count) {
	$('#askCategory p span:eq(1)').text('(' + count.totalCount + ')');
});

admsvc.adminAskCountRe(function(count) {
	$('#askCategory p span:eq(2)').text('(' + count.totalCount + ')');
});

/*====================
			pagination
======================*/
document.querySelectorAll('.pagination>a').forEach(item => {
	item.addEventListener('click', e => {
		e.preventDefault();
		console.log(item.innerText);
		apage = parseInt(item.innerText, 10);
		makeAskList();
	})
})

let pageTarget = document.querySelector('div.pagination');

function createPageListCommon(result, makeFunction) {
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
			makeFunction();
		})
	})
};

// totalCount + makeFunction => 페이지 생성
function createPageAskList(result) {
	createPageListCommon(result, makeAskList);
};

function createPageNoRe(result) {
	createPageListCommon(result, makeAskListNoRe);
};

function createPageRe(result) {
	createPageListCommon(result, makeAskListRe);
};
//===================================================






//첫화면
makeAskList();