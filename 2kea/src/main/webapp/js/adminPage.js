/**
 * 
 */

// 첫 화면 : 전체목록
admsvc.adminAskList(function(result) {
	$('#tb_list').empty();
	result.forEach(ask => {
		$('#tb_list').append(makeRow(ask));
	});
});

//======== 카테고리 ========
// 전체보기
$('#askCategory p:eq(0)').on('click', () => {
	admsvc.adminAskList(function(result) {
		$('#tb_list').empty();
		result.forEach(ask => {
			$('#tb_list').append(makeRow(ask));
		});
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