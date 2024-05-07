/**
 * review.js
 */
$('.star_rating > .star').click(function() {
	$(this).parent().children('span').removeClass('on');
	$(this).addClass('on').prevAll('span').addClass('on');
})

let allReviewData = [];
let filteredReviewData = [];

const myModifyModal = new bootstrap.Modal(document.getElementById('modifyModal'));
const myAddModal = new bootstrap.Modal(document.getElementById('addModal'));

const revwsvc = {
	reviewList(param = { pno: pno, page: 1, rating: 0 }, successCall) {
		const rating = param.rating || 0;
		fetch('ReviewList.do?pno=' + param.pno + '&page=' + param.page + '&rating=' + rating)
			.then(response => response.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	pagingReList(pno = 1, successCall) {
		fetch('reviewCount.do?pno=' + pno)
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	getReviewCount(pno = 1, successCall) {
		fetch('reviewCount.do?pno=' + pno)
			.then(result => result.json())
			.then(successCall)
			.catch(err => console.error(err));
	},
	// getRatingCount(pno, rating, successCall) {
	//     fetch('reviewFilteredCount.do?pno=' + pno + '&rating=' + rating)
	//         .then(result => result.json())
	//         .then(successCall)
	//         .catch(err => console.error(err));
	// }
}

// 삭제 버튼
function deleteReview(reviewNo, reviewItem) {
	fetch('ReviewRemove.do?reviewNo=' + reviewNo)
		.then(result => result.json())
		.then(result => {
			if (result.retCode == 'Success') {
				Swal.fire({
					title: "삭제 성공!",
					html: "삭제 완료되었습니다.",
					icon: 'success',
					confirmButtonColor: 'ff3368',
					confirmButtonText: '확인'
				})
				reviewItem.remove();
				revwsvc.getReviewCount(pno, updateAvgRating);
				revwsvc.reviewList({ pno: pno, page: rePage }, reviewListFnc);
			} else {
				Swal.fire({
					title: "삭제 실패",
					icon: 'error',
					confirmButtonColor: 'ff3368',
					confirmButtonText: '확인'
				})
			}
		})
		.catch(err => console.error(err));
}

// 점수, 개수
function updateAvgRating(result) {

	// 점수와 개수를 표시할 부분
	const boxTotal = document.querySelector('.box_total');
	const avgRatingElement = boxTotal.querySelector('h4');
	const reviewCountElement = boxTotal.querySelector('h6');
	// 평균 평점 표시 (소수점 한 자리까지)
	if (result.totalcount == 0) {
		avgRatingElement.textContent = '0.0';
	} else {
		avgRatingElement.textContent = result.ratingavg;
	}
	// 리뷰 개수 표시
	reviewCountElement.textContent = `(${result.totalcount} Reviews)`;

}

// 수정 모달 띄우기
function showModifyModal(e) {
	const reviewItem = e.target.closest('.review_item'); // 클릭한 리뷰 항목 요소 찾기
	const modalToggle = document.getElementById('modifyModal');

	// 리뷰 내용 가져오기
	const reviewContent = reviewItem.querySelector('p').textContent;
	document.getElementById('modiReviewContent').value = reviewContent;

	// 리뷰 번호 가져오기
	const reviewNo = reviewItem.dataset.reviewNo;
	document.getElementById('reviewNo').value = reviewNo;

	// 평점 가져오기
	const rating = reviewItem.querySelectorAll('.fas').length;

	// 모달에 있는 별점 업데이트
	const stars = modalToggle.querySelectorAll('.star');
	stars.forEach((star, index) => {
		if (index < rating) {
			star.classList.add('on');
		} else {
			star.classList.remove('on');
		}
	});
	myModifyModal.show(modalToggle);
}

// 리뷰 수정
function modifyReview(reviewNo, rating, modiReviewContent) {
	// 해당 리뷰 번호 선택
	const reviewItem = document.querySelector(`.review_item[data-review-no="${reviewNo}"]`);

	// 리뷰 내용 업데이트
	const reviewContentElement = reviewItem.querySelector('p');
	reviewContentElement.textContent = modiReviewContent;

	// 별점 업데이트
	const ratingContainer = reviewItem.querySelector('.media-body > div:last-child');
	ratingContainer.innerHTML = ''; // 초기화

	// 새로운 별점 생성
	for (let i = 0; i < 5; i++) {
		const star = document.createElement('i');
		if (i < rating) {
			star.className = 'fas fa-star';
		} else {
			star.className = 'far fa-star';
		}
		ratingContainer.appendChild(star);
	}
}

// 새 리뷰 추가
function addNewList(newReview) {
	const reviewList = document.querySelector('.review_list');

	// 새로운 리뷰 항목 요소 생성
	const reviewItem = document.createElement('div');
	reviewItem.className = 'review_item';

	// 리뷰 정보 표시
	const media = document.createElement('div');
	media.className = 'media';

	const mediaBody = document.createElement('div');
	mediaBody.className = 'media-body';
	const h4 = document.createElement('h4');
	h4.textContent = newReview.id;
	mediaBody.appendChild(h4);

	const ratingContainer = document.createElement('div');
	for (let i = 0; i < 5; i++) {
		const star = document.createElement('i');
		if (i < newReview.rating) {
			star.className = 'fas fa-star';
		} else {
			star.className = 'far fa-star';
		}
		ratingContainer.appendChild(star);
	}
	mediaBody.appendChild(ratingContainer);
	media.appendChild(mediaBody);
	reviewItem.appendChild(media);

	const p = document.createElement('p');
	p.textContent = newReview.reviewContent;
	reviewItem.appendChild(p);

	// 리뷰 항목을 리스트의 맨 앞에 추가
	reviewList.insertBefore(reviewItem, reviewList.firstChild);

	// 삭제 버튼 생성
	let dBtn = document.createElement('button');
	dBtn.innerText = 'Delete';
	dBtn.setAttribute('class', 'btn_3');
	dBtn.addEventListener('click', e => {
		deleteReview(newReview.reviewNo, reviewItem);
	})
	reviewItem.appendChild(dBtn);

	// 수정 버튼 생성
	let mBtn = document.createElement('button');
	mBtn.innerText = 'Modify';
	mBtn.setAttribute('class', 'btn_3');
	mBtn.setAttribute('id', 'revModiBtn');
	mBtn.addEventListener('click', showModifyModal);
	reviewItem.appendChild(mBtn);

	revwsvc.reviewList({ pno: pno, page: rePage }, reviewListFnc);
}

// 리뷰 리스트
let rePage = 1;

function reviewListFnc(data) {
	const reviewList = document.querySelector('.review_list');
	reviewList.innerHTML = ''; // 기존 리뷰 초기화

	if (data.length == 0) {
		let noReviewMsg = $('<div>', {
			class: 'noReview',
			text: '리뷰 내역이 없습니다.',
			css: {
				'text-align': 'center',
				'font-size': '16px',
			}
		});
		noReviewMsg.appendTo('.review_list');
	} else {
		const startIndex = (rePage - 1) * 5; // 현재 페이지의 시작 인덱스
		const endIndex = startIndex + 5; // 현재 페이지의 끝 인덱스

		// 현재 페이지에 해당하는 리뷰 항목만 추가
		for (let i = startIndex; i < endIndex && i < data.length; i++) {
			const item = data[i];
			const reviewItem = document.createElement('div');
			reviewItem.className = 'review_item';
			reviewItem.dataset.reviewNo = item.reviewNo;

			const media = document.createElement('div');
			media.className = 'media';

			const mediaBody = document.createElement('div');
			mediaBody.className = 'media-body';

			const h4 = document.createElement('h4');
			h4.textContent = item.id;
			mediaBody.appendChild(h4);

			const ratingContainer = document.createElement('div');
			for (let j = 0; j < 5; j++) {
				const star = document.createElement('i');
				if (j < item.rating) {
					star.className = 'fas fa-star';
				} else {
					star.className = 'far fa-star';
				}
				ratingContainer.appendChild(star);
			}
			mediaBody.appendChild(ratingContainer);
			media.appendChild(mediaBody);
			reviewItem.appendChild(media);

			const p = document.createElement('p');
			p.textContent = item.reviewContent;
			reviewItem.appendChild(p);

			// 삭제 버튼 추가
			const dBtn = document.createElement('button');
			dBtn.innerText = 'Delete';
			dBtn.setAttribute('class', 'btn_3');
			dBtn.addEventListener('click', e => {
				deleteReview(item.reviewNo, reviewItem);
			});
			
			if (item.id != id) {
				dBtn.remove();
			} if (auth == '' || auth != 'ADMIN') {
				dBtn.remove();
			} else {
				reviewItem.appendChild(dBtn);
			}

			// 수정 버튼 추가
			const mBtn = document.createElement('button');
			mBtn.innerText = 'Modify';
			mBtn.setAttribute('class', 'btn_3');
			mBtn.setAttribute('id', 'revModiBtn');
			mBtn.addEventListener('click', showModifyModal);
			reviewItem.appendChild(mBtn);
			if (item.id != id) {
				mBtn.remove();
			} if (auth == '' || auth != 'ADMIN') {
				mBtn.remove();
			}

			reviewList.appendChild(reviewItem);
		}
	}
	revwsvc.getReviewCount(pno, updateAvgRating);
	revwsvc.pagingReList(pno, createReviewPageList);
}


// 페이지네이션

document.querySelectorAll('.page-link').forEach(item => {
	item.addEventListener('click', e => {
		e.preventDefault();
		rePage = item.innerText; // 숫자로 변환
		revwsvc.reviewList({ pno: pno, page: rePage }, (allReviewData) => {
			const data = allReviewData.slice((rePage - 1) * 5, rePage * 5);
			reviewListFnc(data);
			revwsvc.getReviewCount(pno, updateAvgRating);
			createReviewPageList(rating);
		});
	});
});

let pageTargetRe = document.querySelector('div.paginationRe');

function createReviewPageList(result) {
	pageTargetRe.innerHTML = '';

	// revwsvc.getRatingCount(pno, rating, result => {
	let totalCnt = result.totalcount;
	console.log(totalCnt)
	let startPage, endPage;
	let next, prev;
	let realEnd = Math.ceil(totalCnt / 5);

	endPage = Math.ceil(rePage / 5) * 5
	startPage = endPage - 4;
	endPage = endPage > realEnd ? realEnd : endPage;
	next = endPage < realEnd ? true : false;
	prev = startPage > 1;

	// 이전 페이지 버튼
	if (prev) {
		let aTag = document.createElement('a');
		aTag.innerHTML = "&laquo;";
		aTag.href = "#";
		aTag.setAttribute('data-page', (startPage - 1));
		pageTargetRe.appendChild(aTag);
	}

	// 페이지 번호 버튼
	for (let pg = startPage; pg <= endPage; pg++) {
		let aTag = document.createElement('a');
		aTag.innerHTML = pg;
		aTag.href = "#";
		aTag.setAttribute('data-page', pg);
		pageTargetRe.appendChild(aTag);
		if (pg == rePage) {
			aTag.className = 'active'; // 클래스 추가
		}
	}

	// 다음 페이지 버튼
	if (next) {
		let aTag = document.createElement('a');
		aTag.innerHTML = "&raquo;";
		aTag.href = "#";
		aTag.setAttribute('data-page', (endPage + 1));
		pageTargetRe.appendChild(aTag);
	}

	// 페이지네이션 이동 이벤트
	document.querySelectorAll('.paginationRe>a').forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault();
			rePage = item.dataset.page; // 클릭한 페이지 번호로 rePage 업데이트
			revwsvc.reviewList({ pno: pno, page: rePage, rating: rating }, reviewListFnc);
		});
	});
	//     });
}

// 리뷰 추가 버튼
document.querySelector('form #addReview').addEventListener('click', e => {
	e.preventDefault();

	if (id == 'null') {
		Swal.fire({
			title: "확인해주세요!",
			html: "로그인이 필요한 서비스입니다.",
			icon: 'info',
			confirmButtonColor: 'ff3368',
			confirmButtonText: '확인'
		})
		return;
	}

	// 입력값 가져오기
	let rvwCont = document.querySelector('#reviewContent').value;
	let rating = document.querySelectorAll('.star.on').length - 1;

	console.log(rating);
	console.log(rvwCont);
	fetch('ReviewAddForm.do', {
		method: 'post',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: 'prodNo=' + pno + '&id=' + id + '&rating=' + rating + '&reviewContent=' + rvwCont
	})
		.then(result => result.json())
		.then(result => {
			console.log(result);
			if (result.retCode == 'Success') {
				Swal.fire({
					title: "작성 완료",
					html: "소중한 리뷰 감사드립니다.",
					icon: 'success',
					confirmButtonColor: 'ff3368',
					confirmButtonText: '확인'
				})
				addNewList(result.retVal);
				revwsvc.getReviewCount(pno, updateAvgRating);
			}
			document.querySelector('#reviewContent').value = ''; // 입력칸 초기화
		})
		.catch(err => console.error(err));
});

// 리뷰 수정 버튼
document.querySelector('form #modifyBtn').addEventListener('click', e => {
	e.preventDefault();
	let reviewNo = document.getElementById('reviewNo').value;
	let reviewContent = document.getElementById('modiReviewContent').value;
	let rating = document.querySelectorAll('.star.on').length - 1;

	console.log(reviewNo);
	console.log(reviewContent);
	console.log(rating);

	fetch('ReviewModify.do?reviewNo=' + reviewNo + '&reviewContent=' + reviewContent + '&rating=' + rating)
		.then(result => result.json())
		.then(result => {
			if (result.retCode == 'Success') {
				Swal.fire({
					title: "수정 성공",
					html: "수정 완료되었습니다.",
					icon: 'success',
					confirmButtonColor: 'ff3368',
					confirmButtonText: '확인'
				})
				modifyReview(reviewNo, rating, reviewContent);
				revwsvc.getReviewCount(pno, updateAvgRating);
			} else {
				Swal.fire({
					title: "수정 실패",
					html: "내용을 확인하세요.",
					icon: 'error',
					confirmButtonColor: 'ff3368',
					confirmButtonText: '확인'
				})
			}
		})
		.catch(err => console.error(err));
})

let rating = 0;
// 리뷰 필터링
document.querySelectorAll('.rating_list .list a, .filter-link').forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();
		rating = e.target.dataset.rating;
		rePage = 1; // 페이지 초기화

		if (rating == 0) {
			revwsvc.reviewList({ pno: pno, page: rePage }, reviewListFnc);
			revwsvc.pagingReList(pno, createReviewPageList);
		} else {
			revwsvc.reviewList({ pno: pno, page: 1, rating }, reviewListFnc);
		}

	});
});

// 모달 자동 종료
$('#addReview').click(function() {
	myAddModal.hide();
});
$('#addModal').on('hidden.bs.modal', function() {
	$('#reviewContent').val('');
})
$('#modifyBtn').click(function() {
	myModifyModal.hide();
});

revwsvc.reviewList({ pno: pno, page: 1, rating: 0 }, reviewListFnc);
