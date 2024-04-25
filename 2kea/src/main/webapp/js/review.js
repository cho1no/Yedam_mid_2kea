/**
 * review.js
 */
$('.star_rating > .star').click(function () {
    $(this).parent().children('span').removeClass('on');
    $(this).addClass('on').prevAll('span').addClass('on');
})

fetch('ReviewList.do')
    .then(response => response.json())
    .then(data => {
        const reviewList = document.querySelector('.review_list');
        reviewList.innerHTML = '';

        // 점수, 개수
        let totalRating = 0;
        const reviewCount = data.length;
        data.forEach(item => {
            totalRating += item.rating;
        });
        const avgRating = totalRating / reviewCount;

        const boxTotal = document.querySelector('.box_total');
        const avgRatingElement = boxTotal.querySelector('h4');
        const reviewCountElement = boxTotal.querySelector('h6');
        avgRatingElement.textContent = avgRating.toFixed(1); // 소수점 첫째자리
        reviewCountElement.textContent = `(${reviewCount} Reviews)`;

        // 리뷰 리스트
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

            let btn = document.createElement('button');
            btn.innerText = 'Delete';
            btn.setAttribute('class', 'btn_3');
            btn.addEventListener('click', e => {
                const rno = item.reviewNo;
                fetch('ReviewRemove.do?reviewNo=' + rno)
                    .then(result => result.json())
                    .then(result => {
                        if (result.retCode == 'Success') {
                            alert('삭제 완료 되었습니다.');
                            reviewItem.remove();
                        } else {
                            alert('삭제에 실패 하였습니다.')
                        }
                    })
            })
            reviewItem.appendChild(btn);

            let mBtn = document.createElement('button');
            mBtn.innerText = 'Modify';
            mBtn.setAttribute('class', 'btn_3');
            mBtn.setAttribute('id', 'modifyBtn');
            mBtn.addEventListener('click', e => {
                fetch('ReviewModify.do?reviewNo=' + reviewNo + '&reviewContent=' + reviewContent + '&rating=' + rating)
                    .then(result => result.json())
                    .then(result => {
                        if (result.retCode == 'Success') {
                            alert('수정 완료 되었습니다.');
                        } else {
                            alert('수정 실패 하였습니다.')
                        }
                    })
            })
            reviewItem.appendChild(mBtn);
        });
    })
    .catch(err => console.error(err));

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

    let btn = document.createElement('button');
    btn.innerText = 'Delete';
    btn.setAttribute('class', 'btn_3');
    btn.addEventListener('click', e => {
        const rno = newReview.reviewNo;
        fetch('ReviewRemove.do?reviewNo=' + rno)
            .then(result => result.json())
            .then(result => {
                if (result.retCode == 'Success') {
                    alert('삭제 완료 되었습니다.');
                    reviewItem.remove();
                } else {
                    alert('삭제에 실패 하였습니다.')
                }
            })
    })
    reviewItem.appendChild(btn);
}

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
            }
            document.querySelector('#reviewContent').value = '';
        })
        .catch(err => console.error(err));
})

$('#addReview').click(function () {
    $('#exampleModal').modal('hide');
});

