/**
 * review.js
 */
$('.star_rating > .star').click(function () {
    $(this).parent().children('span').removeClass('on');
    $(this).addClass('on').prevAll('span').addClass('on');
})
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
// 수정 버튼
function modifyReview(reviewNo, reviewContent, rating) {
    fetch('ReviewModify.do?reviewNo=' + reviewNo + '&reviewContent=' + reviewContent + '&rating=' + rating)
        .then(result => result.json())
        .then(result => {
            if (result.retCode == 'Success') {
                alert('수정 완료 되었습니다.');
            } else {
                alert('수정 실패 하였습니다.')
            }
        })
}

// 점수, 개수
function updateAvgRating() {
    const reviewItems = document.querySelectorAll('.review_item');
    let totalRating = 0;
    let reviewCount = 0;

    reviewItems.forEach(item => {
        const ratingContainer = item.querySelector('.media-body > div:last-child');
        if (ratingContainer) {
            const stars = ratingContainer.querySelectorAll('i');
            let rating = 0;

            stars.forEach(star => {
                if (star.classList.contains('fas')) {
                    rating++;
                }
            });

            totalRating += rating;
            reviewCount++;
        }
    });

    const avgRating = totalRating / reviewCount || 0;

    const boxTotal = document.querySelector('.box_total');
    const avgRatingElement = boxTotal.querySelector('h4');
    const reviewCountElement = boxTotal.querySelector('h6');
    avgRatingElement.textContent = avgRating.toFixed(1);
    reviewCountElement.textContent = `(${reviewCount} Reviews)`;

}

// 별점 필터링
function filterReviews(rating) {
    const reviewItems = document.querySelectorAll('.review_item');
    reviewItems.forEach(item => {
        const stars = item.querySelectorAll('.media-body > div:last-child i');
        let itemRating = 0;
        stars.forEach(star => {
            if (star.classList.contains('fas')) {
                itemRating++;
            }
        });
        if (rating === 'all' || rating == itemRating) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// 새 리뷰 추가
function addNewList(newReview) {
    const reviewList = document.querySelector('.review_list');

    const reviewItem = document.createElement('div');

    reviewItem.className = 'review_item';

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

    reviewList.insertBefore(reviewItem, reviewList.firstChild);

    let dBtn = document.createElement('button');
    dBtn.innerText = 'Delete';
    dBtn.setAttribute('class', 'btn_3');
    dBtn.addEventListener('click', e => {
        deleteReview(newReview.reviewNo, reviewItem);
    })
    reviewItem.appendChild(dBtn);

    let mBtn = document.createElement('button');
    mBtn.innerText = 'Modify';
    mBtn.setAttribute('class', 'btn_3');
    mBtn.setAttribute('id', 'revModiBtn');
    mBtn.addEventListener('click', e => {
        
    })
    reviewItem.appendChild(mBtn);
}

// 리뷰 리스트
fetch('ReviewList.do')
    .then(response => response.json())
    .then(data => {
        const reviewList = document.querySelector('.review_list');
        reviewList.innerHTML = '';


        data.forEach(item => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review_item';

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
                    star.className = 'fas fa-star'; // fas = 채워진 아이콘
                } else {
                    star.className = 'far fa-star'; // far = 비워진 아이콘
                }
                ratingContainer.appendChild(star);
            }
            mediaBody.appendChild(ratingContainer);
            media.appendChild(mediaBody);
            reviewItem.appendChild(media);

            const p = document.createElement('p');
            p.textContent = item.reviewContent;
            reviewItem.appendChild(p);

            reviewList.appendChild(reviewItem);

            let dBtn = document.createElement('button');
            dBtn.innerText = 'Delete';
            dBtn.setAttribute('class', 'btn_3');
            dBtn.addEventListener('click', e => {
                deleteReview(item.reviewNo, reviewItem);
            })
            reviewItem.appendChild(dBtn);

            let mBtn = document.createElement('button');
            mBtn.innerText = 'Modify';
            mBtn.setAttribute('class', 'btn_3');
            mBtn.setAttribute('id', 'revModiBtn');
            mBtn.addEventListener('click', e => {

            })
            reviewItem.appendChild(mBtn);
        });
        updateAvgRating();
    })
    .catch(err => console.error(err));

// 리뷰 추가 버튼
document.querySelector('form #addReview').addEventListener('click', e => {
    e.preventDefault();
    let rvwCont = document.querySelector('#reviewContent').value;
    let rating = document.querySelectorAll('.star.on').length;

    console.log(rating);
    console.log(rvwCont);

    fetch('ReviewAddForm.do', {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'prodNo=' + '1003' + '&id=' + id + '&rating=' + rating + '&reviewContent=' + rvwCont
    })
        .then(result => result.json())
        .then(result => {
            console.log(result);
            if (result.retCode == 'Success') {
                addNewList(result.retVal);
                updateAvgRating();
            }
            document.querySelector('#reviewContent').value = '';
        })
        .catch(err => console.error(err));
})

document.querySelectorAll('.rating_list .list a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const rating = e.target.dataset.rating;
        filterReviews(rating);
    });
});

// 모달 자동 종료
$('#addReview').click(function () {
    $('#exampleModal').modal('hide');
});

