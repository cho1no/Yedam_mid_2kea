<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
	integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
	crossorigin="anonymous"></script>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
	integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
	crossorigin="anonymous"></script>

<style>
.star_rating {
	margin: 5px 0px 15px 10px;
	width: 100%;
	box-sizing: border-box;
	display: inline-flex;
}

.star_rating .star {
	width: 25px;
	height: 25px;
	margin-right: 10px;
	display: inline-block;
	background:
		url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FE2bww%2FbtsviSSBz4Q%2F5UYnwSWgTlFt6CEFZ1L3Q0%2Fimg.png')
		no-repeat;
	background-size: 100%;
	box-sizing: border-box;
}

.star_rating .star.on {
	width: 25px;
	height: 25px;
	margin-right: 10px;
	display: inline-block;
	background:
		url('https://blog.kakaocdn.net/dn/b2d6gV/btsvbDoal87/XH5b17uLeEJcBP3RV3FyDk/img.png')
		no-repeat;
	background-size: 100%;
	box-sizing: border-box;
}

#reviewContent {
	resize: none;
}

.rating_list .list a {
	text-decoration: none;
}

.btn_3_close {
	display: inline-block;
	padding: 9px 39px;
	border-radius: 50px;
	background-color: #ff3368;
	border: 1px solid #ecfdff;
	font-size: 15px;
	font-weight: 700;
	color: #fff;
	text-transform: uppercase;
	font-weight: 400;
	box-shadow: -1.717px 8.835px 29.76px 2.24px rgba(255, 51, 104, 0.18);
	border: 1px solid #ff3368;
	-webkit-transition: 0.5s;
	transition: 0.5s;
}

.btn_3_close:hover {
	background-color: red;
	color: #fff;
}

.review_item .btn_3 {
	position: relative;
	left: 825px;
	padding: 5px 25px;
}

#revModiBtn {
	position: relative;
	left: 615px;
	padding: 5px 25px;
	display: inline-block;
	border-radius: 50px;
	background-color: #ff3368;
	border: 1px solid #ecfdff;
	font-size: 15px;
	font-weight: 700;
	color: #fff;
	text-transform: uppercase;
	font-weight: 400;
	box-shadow: -1.717px 8.835px 29.76px 2.24px rgba(255, 51, 104, 0.18);
	border: 1px solid #ff3368;
}

#modifyBtn:hover {
	background-color: #fff;
	color: #ff3368;
}

#revBtn {
	width: 150px;
	position: relative;
	left: 860px;
	margin-top: 60px;
	display: inline-block;
	padding: 9px 39px;
	border-radius: 50px;
	background-color: #ff3368;
	border: 1px solid #ecfdff;
	font-size: 15px;
	font-weight: 700;
	color: #fff;
	text-transform: uppercase;
	font-weight: 400;
	box-shadow: -1.717px 8.835px 29.76px 2.24px rgba(255, 51, 104, 0.18);
	border: 1px solid #ff3368;
}

#revBtn:hover {
	background-color: #fff;
	color: #ff3368;
}

.rating_text {
	font-size: 18px;
	margin: 0px 10px 0px 5px;
}

.btn_ask {
	border: 1px solid #e0e0e0;
	padding: 2px 25px;
	width: 110px;
	display: inline-block;
	line-height: 32px;
	border-radius: 50px;
	font-size: 14px;
	text-align: center;
	font-family: "Poppins", sans-serif;
	color: #2a2a2a;
	position: absolute;
	right: 15px;
}

.delAskBtn {
	border: 1px solid #fff;
	padding: 10px 10px 10px 10px;
	display: inline-block;
	line-height: 3px;
	border-radius: 20px;
	font-size: 11px;
	font-family: "Poppins", sans-serif;
	color: #2a2a2a;
}

.editAskBtn {
	border: 1px solid #e0e0e0;
	padding: 1px 10px;
	display: inline-block;
	line-height: 20px;
	border-radius: 35px;
	font-size: 10px;
	font-family: "Poppins", sans-serif;
	color: #2a2a2a;
}

.btn_ask:hover {
	background: #ff3368;
	border-color: #ff3368;
	color: #fff;
}

.delAskBtn {
	margin-bottom: 8;
	padding: 0;
	border: 0;
}

textarea {
	resize: none;
}

.center {
	text-align: center;
}

.pagination {
	display: inline-block;
}

.pagination a {
	color: black;
	float: left;
	padding: 8px 16px;
	text-decoration: none;
	transition: background-color .3s;
	border: 1px solid #ddd;
	margin: 0 4px;
}

.pagination a.active {
	background-color: #ff3368;
	color: white;
	border: 1px solid #ff3368;
}

.pagination a:hover {
	background-color: #ff3368;
	color: #fff;
}

#review .col-lg-6 {
	flex: 0 0 100%;
	max-width: 100%;
}

#review .col-6 {
	flex: 0%;
	max-width: 80%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-content: center;
	justify-content: center;
	align-items: center;
}

#review .row {
	padding: 0px 12px 0px 12px;
}

.paginationRe {
	display: inline-block;
}

.paginationRe a {
	color: black;
	float: left;
	padding: 8px 16px;
	text-decoration: none;
	transition: background-color .3s;
	border: 1px solid #ddd;
	margin: 0 4px;
}

.paginationRe a.active {
	background-color: #ff3368;
	color: white;
	border: 1px solid #ff3368;
}

.paginationRe a:hover {
	background-color: #ff3368;
	color: #fff;
}

.noReview {
	text-align: center;
	font-size: 16px;
}

.card-wrapper {
	max-width: 1100px;
	margin: 0 auto;
}

img#prodImg {
	width: 100%;
	display: block;
}

.img-display {
	width: 80%;
	aspect-ratio: 1/1;
	overflow: hidden;
}

.img-showcase {
	display: flex;
	width: 100%;
	transition: all 0.5s ease;
	flex-direction: column;
}

.img-showcase img {
	min-width: 100%;
}

.img-select {
	display: flex;
	flex-direction: column;
	width: 20%;
}

.img-item {
	margin: 0.2rem;
}

.img-item:hover {
	opacity: 0.8;
}

@media screen and (min-width: 992px) {
	.card {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1.5rem;
	}
	.card-wrapper {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.product-imgs {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
}
</style>
<input type="hidden">

<!--================Single Product Area =================-->
<div class="product_image_area section_padding">
	<div class="container">
		<div class="row s_product_inner justify-content-between">
			<div class="col-lg-7 col-xl-7">
				<!-- card left -->
				<div class="product-imgs">
					<div class="img-display">
						<div class="img-showcase">
							<%-- <img id="prodImg" src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt=""> --%>

						</div>
					</div>
					<div class="img-select">
						<%-- <div class="img-item">
								<a href="#" data-id="1">
									<img id="prodImg" src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="">
								</a>
								</div> --%>

					</div>
				</div>
			</div>
			<div class="col-lg-5 col-xl-4">
				<div class="s_product_text">
					<h3>제목</h3>
					<h2>가격</h2>
					<ul class="list">
						<li><a class="active" href="#">카테고리</a></li>
					</ul>
					<p>설명</p>
					<div
						class="card_area d-flex justify-content-between align-items-center">
						<%-- <div class="product_count">
									<span class="inumber-decrement"> <i class="ti-minus"></i></span>
									<input class="input-number" type="text" value="1" min="0" max="10"> <span
										class="number-increment"> <i class="ti-plus"></i></span>
								</div> --%>
						<a href="#" id="cartAdd" class="btn_3">장바구니 추가</a> <a href="#"
							class="like_us"> <i class="ti-heart"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!--================End Single Product Area =================-->

<!--================Product Description Area =================-->
<section class="product_description_area">
	<div class="container">
		<ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item"><a class="nav-link active" id="home-tab"
				data-toggle="tab" href="#home" role="tab" aria-controls="home"
				aria-selected="true">Description</a></li>
			<li class="nav-item"><a class="nav-link" id="contact-tab"
				data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
				aria-selected="false">QnA</a></li>
			<li class="nav-item"><a class="nav-link" id="review-tab"
				data-toggle="tab" href="#review" role="tab" aria-controls="review"
				aria-selected="false">Reviews</a></li>
		</ul>
		<div class="tab-content" id="myTabContent">
			<div class="tab-pane fade active show" id="home" role="tabpanel"
				aria-labelledby="home-tab">
				<p>Beryl Cook is one of Britain’s most talented and amusing
					artists .Beryl’s pictures feature women of all shapes and sizes
					enjoying</p>
				<p>It is often frustrating to attempt to plan meals that are
					designed</p>
			</div>
			<!--==================문의하기==================== -->
			<div class="tab-pane fade" id="contact" role="tabpanel"
				aria-labelledby="contact-tab">
				<div class="row">
					<div class="col">
						<h3>QnA</h3>
					</div>
					<div class="col-2">
						<a class="btn_ask" data-bs-whatever="@mdo">문의하기</a>
					</div>
				</div>
				<div class="comment_list">
					<div class="review_item" id="asklist" style="display: none;"
						data-no="0">
						<div class="media">
							<div class="media-body">
								<div class="row">
									<div class="col-1">
										<h4 class="userId">userId</h4>
									</div>
									<div class="col-1">
										<h5 class="delAskBtn">X</h5>
									</div>
								</div>
								<h5 class="askCategory">askCategory</h5>
								<h5 class="askDate">askDate</h5>
								<a class="reply_btn" data-no="0" data-bs-toggle="modal"
									data-bs-target="#ReplyModal" data-bs-whatever="@mdo">답변하기</a>
							</div>
						</div>
						<p class="userContent">userContent</p>
						<div class="reply_section">
							<div class="review_item reply" id="replylist" data-rno="0"
								style="display: none;">
								<div class="media">
									<div class="media-body mt-3">
										<div class="row">
											<div class="col-1">
												<h4 class="replyId">replyId</h4>
											</div>
											<div class="col-1">
												<h5 class="delReplyBtn">X</h5>
											</div>
										</div>
										<h5 class="replyDate">replyDate</h5>
										<p class="replyContent">userContent</p>
									</div>
								</div>
							</div>
						</div>
						<hr>
					</div>
				</div>
				<!--<div class="noAsk">문의내역이 없습니다.</div>
				end of comment_list -->
				<!-- Ask pageination -->
				<div>
					<div class="center">
						<div class="pagination">
							<a href="#">1</a> <a href="#">2</a>

						</div>
					</div>
				</div>
			</div>
			<!--==========================문의하기 끝========================= -->
			<div class="tab-pane fade" id="review" role="tabpanel"
				aria-labelledby="review-tab">
				<div class="row">
					<div class="col-lg-6">
						<div class="row total_rate">
							<div class="col-6">
								<div class="box_total">
									<h5>Overall</h5>
									<h4>0.0</h4>
									<h6>(00 Reviews)</h6>
								</div>
							</div>
							<div class="col-6">
								<div class="rating_list">
									<h3>Based on Rating Reviews</h3>
									<ul class="list">
										<li><a href="" data-rating="0" class="filter-link">
												view all </a></li>
										<li><a href="#" data-rating="5">5 Star <i
												data-rating="5" class="fas fa-star"></i> <i data-rating="5"
												class="fas fa-star"></i> <i data-rating="5"
												class="fas fa-star"></i> <i data-rating="5"
												class="fas fa-star"></i> <i data-rating="5"
												class="fas fa-star"></i></a></li>
										<li><a href="#" data-rating="4">4 Star <i
												data-rating="4" class="fas fa-star"></i> <i data-rating="4"
												class="fas fa-star"></i> <i data-rating="4"
												class="fas fa-star"></i> <i data-rating="4"
												class="fas fa-star"></i> <i data-rating="4"
												class="far fa-star"></i></a></li>
										<li><a href="#" data-rating="3">3 Star <i
												data-rating="3" class="fas fa-star"></i> <i data-rating="3"
												class="fas fa-star"></i> <i data-rating="3"
												class="fas fa-star"></i> <i data-rating="3"
												class="far fa-star"></i> <i data-rating="3"
												class="far fa-star"></i></a></li>
										<li><a href="#" data-rating="2">2 Star <i
												data-rating="2" class="fas fa-star"></i> <i data-rating="2"
												class="fas fa-star"></i> <i data-rating="2"
												class="far fa-star"></i> <i data-rating="2"
												class="far fa-star"></i> <i data-rating="2"
												class="far fa-star"></i></a></li>
										<li><a href="#" data-rating="1">1 Star <i
												data-rating="1" class="fas fa-star"></i> <i data-rating="1"
												class="far fa-star"></i> <i data-rating="1"
												class="far fa-star"></i> <i data-rating="1"
												class="far fa-star"></i> <i data-rating="1"
												class="far fa-star"></i></a></li>
									</ul>
								</div>
							</div>
						</div>

						<div class="review_list">
							<div class="review_item">
								<div class="media">
									<div class="d-flex"></div>
									<div class="media-body">
										<h4></h4>
										<!-- <i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i> -->
									</div>
								</div>
								<p></p>
							</div>
							<div class="review_item">
								<div class="media">
									<div class="d-flex"></div>
									<div class="media-body">
										<h4></h4>
										<!-- <i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i> -->
									</div>
								</div>
								<p></p>
							</div>
							<div class="review_item">
								<div class="media">
									<div class="d-flex"></div>
									<div class="media-body">
										<h4></h4>
									</div>
								</div>
								<p></p>
							</div>
						</div>
					</div>
					<!-- addreview start -->

					<div class="col-lg-6">
						<div class="review_box"></div>
					</div>

					<!-- 리뷰추가모달  -->

					<button type="button" class="btn btn-primary" id="revBtn"
						data-bs-toggle="modal" data-bs-target="#addModal">리뷰작성</button>
					<form class="row contact_form" action="" method="post">
						<div class="modal fade" id="addModal" tabindex="-1"
							aria-labelledby="addModalLabel" aria-hidden="true">
							<div class="modal-dialog modal-lg modal-dialog-centered">
								<div class="modal-content">
									<div class="modal-header">
										<h1 class="modal-title fs-5" id="addModalLabel">리뷰 작성</h1>
										<button type="button" class="btn-close"
											data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div class="modal-body">

										<div class="star_rating" id="rating">
											<span class="rating_text">별점:</span> <span class="star on"
												value="1"> </span> <span class="star" value="2"> </span> <span
												class="star" value="3"> </span> <span class="star" value="4">
											</span> <span class="star" value="5"> </span>
										</div>
										<div class="col-md-12">
											<div class="form-group">
												<input type="text" class="form-control" id="mid"
													value="${id }" readonly />
											</div>
										</div>
										<div class="col-md-12">
											<div class="form-group">
												<textarea class="form-control" id="reviewContent" rows="6"
													placeholder="Review"></textarea>
											</div>
										</div>
										<div class="col-md-12 text-right"></div>

									</div>
									<div class="modal-footer">
										<button type="button" class="btn_3_close"
											data-bs-dismiss="modal">Close</button>
										<button type="submit" class="btn_3" id="addReview">Submit
											Now</button>
									</div>
								</div>
							</div>
						</div>
					</form>
					<!-- 리뷰추가모달 끝 -->
					<!-- 리뷰수정모달 시작-->

					<form class="row contact_form2" action="ReviewModify.do"
						method="post">
						<div class="modal fade" id="modifyModal" tabindex="-1">
							<div class="modal-dialog modal-lg modal-dialog-centered">
								<div class="modal-content">
									<div class="modal-header">
										<h1 class="modal-title fs-5" id="modifyModalLabel">리뷰 수정</h1>
										<button type="button" class="btn-close"
											data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div class="modal-body">

										<input type="hidden" id="reviewNo" value="${reviewNo }">
										<div class="star_rating" id="rating">
											<span class="rating_text">별점:</span> <span class="star on"
												value="1"> </span> <span class="star" value="2"> </span> <span
												class="star" value="3"> </span> <span class="star" value="4">
											</span> <span class="star" value="5"> </span>
										</div>
										<div class="col-md-12">
											<div class="form-group">
												<input type="text" class="form-control" id="mid"
													value="${id }" readonly />
											</div>
										</div>
										<div class="col-md-12">
											<div class="form-group">
												<textarea class="form-control" id="modiReviewContent"
													rows="6"></textarea>
											</div>
										</div>
										<div class="col-md-12 text-right"></div>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn_3_close"
											data-bs-dismiss="modal">Close</button>
										<button type="submit" class="btn_3" id="modifyBtn">Modify
											Now</button>
									</div>
								</div>
							</div>
						</div>
					</form>

					<!-- 리뷰수정모달 끝 -->
					<!-- addreview end -->
				</div>
				<!-- row -->
				<!-- 리뷰 페이징 -->
				<div>
					<div class="center">
						<div class="paginationRe">
							<a href="#">1</a>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!--================End Product Description Area =================-->

<!-- =======================문의하기 모달=========================== -->
<div class="modal fade" id="AskModal" tabindex="-1"
	aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title fs-5" id="exampleModalLabel">상품 문의하기</h3>
			</div>
			<div class="modal-body">
				<form>
					<div class="col-md-12 mb-2">
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio"
								name="inlineRadioOptions" id="inlineRadio1" value="상품"
								checked="checked"> <label class="form-check-label"
								for="inlineRadio1">상품</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio"
								name="inlineRadioOptions" id="inlineRadio2" value="교환">
							<label class="form-check-label" for="inlineRadio2">교환</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio"
								name="inlineRadioOptions" id="inlineRadio3" value="반품">
							<label class="form-check-label" for="inlineRadio3">반품</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio"
								name="inlineRadioOptions" id="inlineRadio4" value="환불">
							<label class="form-check-label" for="inlineRadio4">환불</label>
						</div>
						<div class="form-check form-check-inline">
							<input class="form-check-input" type="radio"
								name="inlineRadioOptions" id="inlineRadio5" value="기타">
							<label class="form-check-label" for="inlineRadio5">기타</label>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<textarea class="form-control" name="ask_message" rows="5"
								id="ask_message" placeholder="문의내용을 적어주세요"></textarea>
						</div>
					</div>
					<div class="col-md-12 text-right"></div>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" value="button" class="btn_3_close closeAskBtn"
					data-bs-dismiss="modal">취소</button>
				<button type="button" class="btn_3" id="addAskBtn"
					data-bs-dismiss="modal">완료</button>
			</div>
		</div>
	</div>
</div>

<!-- ======================문의하기 모달 끝========================== -->
<!-- =======================답변하기 모달=========================== -->
<div class="modal fade" id="ReplyModal" tabindex="-1"
	aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title fs-5" id="exampleModalLabel">문의 답변하기</h3>
			</div>
			<div class="modal-body">
				<form>
					<div class="form-group">
						<div>
							<textarea class="form-control" name="reply_message" rows="5"
								id="reply_message" placeholder="답변내용"></textarea>
						</div>
					</div>
					<div class="col-md-12 text-right"></div>
					<input type="hidden" id="askDataNo">
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" value="button" class="btn_3_close"
					data-bs-dismiss="modal">취소</button>
				<button type="button" class="btn_3" id="addRelpyBtn"
					data-bs-dismiss="modal">완료</button>
			</div>
		</div>
	</div>
</div>

<!-- ======================답변하기 모달 끝========================== -->

<!-- product_list part start-->
<section class="product_list best_seller">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-12">
				<div class="section_tittle text-center">
					<h2>Best Sellers</h2>
				</div>
			</div>
		</div>
		<div class="row align-items-center justify-content-between">
			<div class="col-lg-12">
				<div class="prodDetail_list_slider owl-carousel"></div>
			</div>
		</div>
	</div>
</section>
<div class="single_product_item" id="single_product0"
	style="display: none;">
	<img src="template/img/product/product_1.png" alt="">
	<div class="single_product_text">
		<h4>Quartz Belt Watch</h4>
		<h3>$150.00</h3>
	</div>
</div>
<script src="template/js/jquery.magnific-popup.js"></script>
<script src="template/js/owl.carousel.min.js"></script>
<script src="template/js/jquery.nice-select.min.js"></script>


<script>
	const pno = "${pvo.prodNo}";
	const pname = "${pvo.name}";
	const detail = "${pvo.detail}";
	const description = "${pvo.description}";
	const price = "${pvo.price}";
	const category = "${pvo.category}";
	const viewCount = "${pvo.viewCount}";
	const wish = "${pvo.wish}";
	const imageList = "${imgs}";
</script>

<%-- CWH js --%>
<script src="js/prodDetail.js"></script>

<%-- KJM js --%>
<script src="js/prodDetailAsk.js"></script>

<%-- PYB js --%>
<script src="js/review.js"></script>