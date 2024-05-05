/**
 * KJM
 * adminPage.js
 */

/*==================
			답변 대기
====================*/
// 답변대기 모달 => 답변버튼 
$('#addAdminReplyBtn').on('click', function() {
	let rc = $('#replyContentNoRe').val();
	let ano = $('#askDataNo').val();
	let pno = $('#replyProdNo').val();
	
	if(rc.trim() == ''){
		noReContent();
	} else{
		fetch('addReply.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + pno + '&id=' + id +
				'&replyContent=' + rc + '&askNo=' + ano
		})
			.then(result => result.json())
			.then(result => {
				if (result.retCode == 'Success') {
					alert('답변이 등록되었습니다.');
					makeAskList();
					makeAskCount();
				}
			})
			.catch(err => console.error(err));
	}
});

function noReContent(){
	Swal.fire({
        title: '내용을 적어주세요.',
        icon: 'warning',
        confirmButtonText: '확인',
      })
};
/*==================
			답변 완료
====================*/

// 답변완료 모달 ==> 답변 삭제
$('.adminDelReplyBtn').on('click', function() {
	let ano = $('#askDataNo').val();

	fetch('delReply.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: 'askNo=' + ano
	})
		.then(result => result.json())
		.then(result => {
			if (result.retCode == 'Success') {
				alert('답변이 삭제되었습니다.');
				makeAskList();
				makeAskCount();
			}
		})
		.catch(err => console.error(err));
});

/*====================
		make AskList  
======================*/
let apage = 1;
//전체보기
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
//답변대기
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
//답변완료
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
	Ask Category 이동
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
function makeAskCount(){
	admsvc.adminAskCount(function(count) {
	$('#askCategory p span:eq(0)').text('(' + count.totalCount + ')');
	});
	admsvc.adminAskCountNoRe(function(count) {
		$('#askCategory p span:eq(1)').text('(' + count.totalCount + ')');
	});
	admsvc.adminAskCountRe(function(count) {
		$('#askCategory p span:eq(2)').text('(' + count.totalCount + ')');
	});
};

/*====================
			pagination
======================*/
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
makeAskCount();