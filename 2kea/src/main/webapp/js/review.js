/**
 * review.js
 */
$('.star_rating > .star').click(function () {
    $(this).parent().children('span').removeClass('on');
    $(this).addClass('on').prevAll('span').addClass('on');
})

// const revwsvc = {
//     reviewList(param = { pno: 1000, page: 1 }, successCall) {
//         fetch('ReviewList.do?pno=' + param.pno + '&page=' param.page)
//             .then(response => response.json())
//             .then(successCall)
//             .catch(err => console.error(err));
//     },
//     pagingReList(pno = 1, successCall) {
//         fetch('reviewCount.do?pno=' + pno)
//             .then(result => result.json())
//             .then(successCall)
//             .catch(err => console.error(err));
//     }
// }

const myModifyModal = new bootstrap.Modal(document.getElementById('modifyModal'));
const myAddModal = new bootstrap.Modal(document.getElementById('addModal'));

// 삭제 버튼
function deleteReview(reviewNo, reviewItem) {
    fetch('ReviewRemove.do?reviewNo=' + reviewNo)
        .then(result => result.json())
        .then(result => {
            if (result.retCode == 'Success') {
                alert('삭제 완료 되었습니다.');
                reviewItem.remove();
                updateAvgRating();
            } else {
                alert('삭제에 실패 하였습니다.');
            }
        })
        .catch(err => console.error(err));
}

// 점수, 개수
function updateAvgRating() {
    const reviewItems = document.querySelectorAll('.review_item');
    let totalRating = 0;
    let reviewCount = 0;

    reviewItems.forEach(item => {
        const ratingContainer = item.querySelector('.media-body > div:last-child');
        if (ratingContainer) {
            const stars = ratingContainer.querySelectorAll('i'); // 별점 아이콘 찾기
            let rating = 0; // 현재 리뷰 항목의 평점

            stars.forEach(star => {
                if (star.classList.contains('fas')) {
                    rating++; // 별점이 채워져 있는 경우에 평점 증가
                }
            });

            totalRating += rating; // 총 평점 합계에 현재 평점 더하기
            reviewCount++; // 리뷰 개수 증가
        }
    });

    // 평균 평점 계산, 없으면 0
    const avgRating = totalRating / reviewCount || 0;

    const boxTotal = document.querySelector('.box_total');
    const avgRatingElement = boxTotal.querySelector('h4');
    const reviewCountElement = boxTotal.querySelector('h6');
    // 평균 평점 표시 (소수점 한 자리까지)
    avgRatingElement.textContent = avgRating.toFixed(1);
    // 리뷰 개수 표시
    reviewCountElement.textContent = `(${reviewCount} Reviews)`;

}

// 별점 필터링
function filterReviews(rating) {
    const reviewItems = document.querySelectorAll('.review_item');
    reviewItems.forEach(item => {
        const stars = item.querySelectorAll('.media-body > div:last-child i'); // 별점 아이콘 요소 선택
        let itemRating = 0; // 현재 리뷰 항목의 평점
        stars.forEach(star => {
            if (star.classList.contains('fas')) {
                itemRating++; // 별점이 채워져 있는 경우, 평점 증가
            }
        });

        // 필터링 조건에 따라 리뷰 항목 표시 여부
        if (rating == 'all' || rating == itemRating) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
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
}

// 리뷰 리스트
function renderReviewList(data) {
    const reviewList = document.querySelector('.review_list');
    reviewList.innerHTML = ''; // 기존 리뷰 초기화

    
    data.forEach(item => {
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
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('i');
            if (i < item.rating) {
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

        const dBtn = document.createElement('button');
        dBtn.innerText = 'Delete';
        dBtn.setAttribute('class', 'btn_3');
        if (item.id == id) {
            dBtn.addEventListener('click', e => {
                deleteReview(item.reviewNo, reviewItem);
            });
        } else {
            dBtn.disabled = true; // 다른 사용자의 리뷰인 경우 버튼 비활성화
        }
        reviewItem.appendChild(dBtn);

        const mBtn = document.createElement('button');
        mBtn.innerText = 'Modify';
        mBtn.setAttribute('class', 'btn_3');
        mBtn.setAttribute('id', 'revModiBtn');
        if (item.id == id) {
            mBtn.addEventListener('click', showModifyModal);
        } else {
            mBtn.disabled = true;
        }
        reviewItem.appendChild(mBtn);

        reviewList.appendChild(reviewItem);
    });

    updateAvgRating();
}

// 페이지네이션
let rePage = 1;
document.querySelectorAll('.page-link').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        rePage = parseInt(item.innerText); // 숫자로 변환
        reviewList({ pno: pno, page: rePage }, renderReviewList);
    });
});

let pageTargetRe = document.querySelector('div.pagination_Re');

function createReviewPageList(result) {
    pageTargetRe.innerHTML = '';

    let totalCnt = result.totalCount;
    let startPage, endPage;
    let next, prev;
    let realEnd = Math.ceil(totalCnt / 5);
    endPage = Math.ceil(rePage / 5) * 5;
    startPage = endPage - 4;
    endPage = endPage > realEnd ? realEnd : endPage;
    next = endPage < realEnd ? true : false;
    prev = startPage > 1;

    // 이전 페이지 버튼
    if (prev) {
        let aTag = document.createElement('a');
        aTag.innerHTML = "&laquo;";
        aTag.href = "#";
        aTag.classList.add('page-link'); // 클래스 추가
        aTag.setAttribute('data-page', (startPage - 1));
        pageTargetRe.appendChild(aTag);
    }

    // 페이지 번호 버튼
    for (let pg = startPage; pg <= endPage; pg++) {
        let aTag = document.createElement('a');
        aTag.innerHTML = pg;
        aTag.href = "#";
        aTag.classList.add('page-link'); // 클래스 추가
        aTag.setAttribute('data-page', pg);
        pageTargetRe.appendChild(aTag);
        if (pg == rePage) {
            aTag.classList.add('active'); // 클래스 추가
        }
    }

    // 다음 페이지 버튼
    if (next) {
        let aTag = document.createElement('a');
        aTag.innerHTML = "&raquo;";
        aTag.href = "#";
        aTag.classList.add('page-link'); // 클래스 추가
        aTag.setAttribute('data-page', (endPage + 1));
        pageTargetRe.appendChild(aTag);
    }

    // 페이지네이션 이동 이벤트 핸들러
    document.querySelectorAll('.pagination_Re>a').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            let clickedPage = parseInt(item.dataset.page || item.innerText);
            rePage = clickedPage;
            reviewList({ pno: pno, page: rePage }, renderReviewList);
        });
    });
}


fetch('ReviewList.do?pno=' + pno)
    .then(response => response.json())
    .then(data => {
        renderReviewList(data);
    })
    .catch(err => console.error(err));


// 리뷰 추가 버튼
document.querySelector('form #addReview').addEventListener('click', e => {
    e.preventDefault();

    if (id == 'null') {
        alert('로그인이 필요한 서비스입니다.');
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
                addNewList(result.retVal); 
                updateAvgRating();
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
                alert('수정 완료 되었습니다.');
                modifyReview(reviewNo, rating, reviewContent);
                updateAvgRating();
            } else {
                alert('수정 실패 하였습니다.')
            }
        })
        .catch(err => console.error(err));
})

// 리뷰 필터링
document.querySelectorAll('.rating_list .list a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const rating = e.target.dataset.rating;
        filterReviews(rating);
    });
});

// 모달 자동 종료
$('#addReview').click(function () {
    myAddModal.hide();
});
$('#modifyBtn').click(function () {
    myModifyModal.hide();
});

