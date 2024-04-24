<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    
<style>
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

.btn_ask {
	border: 1px solid #e0e0e0;
	padding: 2px 28px;
	display: inline-block;
	line-height: 32px;
	border-radius: 50px;
	font-size: 14px;
	font-family: "Poppins", sans-serif;
	color: #2a2a2a;
}

.btn_ask:hover {
	background: #ff3368;
	border-color: #ff3368;
	color: #fff;
}


</style>    
    
    
    
  <!--================Single Product Area =================-->
  <div class="product_image_area section_padding">
    <div class="container">
      <div class="row s_product_inner justify-content-between">
        <div class="col-lg-7 col-xl-7">
          <div class="product_slider_img">
            <div id="vertical">
              <div data-thumb="img/product/single-product/product_1.png">
                <img src="img/product/single-product/product_1.png" />
              </div>
              <div data-thumb="img/product/single-product/product_1.png">
                <img src="img/product/single-product/product_1.png" />
              </div>
              <div data-thumb="img/product/single-product/product_1.png">
                <img src="img/product/single-product/product_1.png" />
              </div>
              <div data-thumb="img/product/single-product/product_1.png">
                <img src="img/product/single-product/product_1.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-xl-4">
          <div class="s_product_text">
            <h3>Faded SkyBlu Denim Jeans</h3>
            <h2>$149.99</h2>
            <ul class="list">
              <li>
                <a class="active" href="#">
                  <span>Category</span> : Household</a>
              </li>
            </ul>
            <p>
              First replenish living. Creepeth image image. Creeping can't, won't called.
              Two fruitful let days signs sea together all land fly subdue
            </p>
            <div class="card_area d-flex justify-content-between align-items-center">
              <div class="product_count">
                <span class="inumber-decrement"> <i class="ti-minus"></i></span>
                <input class="input-number" type="text" value="1" min="0" max="10">
                <span class="number-increment"> <i class="ti-plus"></i></span>
              </div>
              <a href="#" class="btn_3">add to cart</a>
              <a href="#" class="like_us"> <i class="ti-heart"></i> </a>
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
        <li class="nav-item">
          <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
            aria-selected="false">Description</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
            aria-selected="true">Comments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
            aria-selected="false">Reviews</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
          <p>
            Beryl Cook is one of Britain’s most talented and amusing artists
            .Beryl’s pictures feature women of all shapes and sizes enjoying
          </p>
          <p>
            It is often frustrating to attempt to plan meals that are designed
          </p>
        </div>
        <!--==================문의하기==================== -->
        <div class="tab-pane fade show active" id="contact" role="tabpanel" 
        aria-labelledby="contact-tab" style="display: none;">
        <div class="row mb-3">
			<div class="col">
				<h3>QnA</h3>
			</div>
			<a class="btn_ask" data-bs-toggle="modal" 
			data-bs-target="#AskModal" data-bs-whatever="@mdo">Ask</a>
		</div>
          <div class="row">
            <div>
              <div class="comment_list">
                <div class="review_item">
                  <div class="media">
                    <div class="media-body" id="ask_id">
                      <h4>user1</h4>
                      <h5>2024년 04월 11일 22시 31분</h5>
                      <a class="reply_btn" href="#">Reply</a>
                    </div>
                  </div>
                  <div id="ask_p">
                  <p>주문취소요청드립니다</p>
                  </div>
                </div>
                <div class="review_item" id="reply_1">
                  <div class="media">
                    <div class="media-body">
                      <h4>2케아</h4>
                      <h5>2024년 04월 04일 22시 18분</h5>
                    </div>
                  </div>
                  <div class="mb-5" id="reply_p">
                  <p>
                   안녕하세요 고객님. 고객님의 제품은 현재 주문취소가 되어있습니다. 카드사마다 환불소요일이 다르기 때문에
				   영업일 기준 2-4일정도 소요가 발생하실 수 있습니다. 온도가 따뜻하게 올라갔지만 기온차가 심한 오늘, 감기
				   조심하시고 행복한 하루 보내세요 :)
                  </p>
                  </div>	
                </div>
              </div>
            </div>
          </div>
        </div>
   <!--======================== end of 문의하기================================= -->

   <!--================문의 모달=================-->
<div class="modal fade" id="AskModal" tabindex="-1"
	aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title fs-5" id="exampleModalLabel">상품 문의하기</h3>
			</div>
			<div class="modal-body">
				<form>
					<div class="col-md-12">
						<div class="form-check form-check-inline">
						  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
						  <label class="form-check-label" for="inlineRadio1">교환</label>
						</div>
						<div class="form-check form-check-inline">
						  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
						  <label class="form-check-label" for="inlineRadio2">환불</label>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<textarea class="form-control" name="ask_message" rows="3"
								placeholder="문의내용을 적어주세요"></textarea>
						</div>
					</div>
					<div class="col-md-12 text-right"></div>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" value="button" class="btn_3_close"
					data-bs-dismiss="modal">취소</button>
				<button type="submit" value="submit" class="btn_3">완료</button>
			</div>
		</div>
	</div>
</div>
<!-- ==============================문의하기 모달 끝================================== -->
        <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
          <div class="row">
            <div class="col-lg-6">
              <div class="row total_rate">
                <div class="col-6">
                  <div class="box_total">
                    <h5>Overall</h5>
                    <h4>4.0</h4>
                    <h6>(03 Reviews)</h6>
                  </div>
                </div>
                <div class="col-6">
                  <div class="rating_list">
                    <h3>Based on 3 Reviews</h3>
                    <ul class="list">
                      <li>
                        <a href="#">5 Star
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i> 01</a>
                      </li>
                      <li>
                        <a href="#">4 Star
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i> 01</a>
                      </li>
                      <li>
                        <a href="#">3 Star
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i> 01</a>
                      </li>
                      <li>
                        <a href="#">2 Star
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i> 01</a>
                      </li>
                      <li>
                        <a href="#">1 Star
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i> 01</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="review_list">
                <div class="review_item">
                  <div class="media">
                    <div class="d-flex">
                      <img src="template/img/product/single-product/review-1.png" alt="" />
                    </div>
                    <div class="media-body">
                      <h4>Blake Ruiz</h4>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
                <div class="review_item">
                  <div class="media">
                    <div class="d-flex">
                      <img src="template/img/product/single-product/review-2.png" alt="" />
                    </div>
                    <div class="media-body">
                      <h4>Blake Ruiz</h4>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
                <div class="review_item">
                  <div class="media">
                    <div class="d-flex">
                      <img src="template/img/product/single-product/review-3.png" alt="" />
                    </div>
                    <div class="media-body">
                      <h4>Blake Ruiz</h4>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="review_box">
                <h4>Add a Review</h4>
                <p>Your Rating:</p>
                <ul class="list">
                  <li>
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-star"></i>
                    </a>
                  </li>
                </ul>
                <p>Outstanding</p>
                <form class="row contact_form" action="contact_process.php" method="post" novalidate="novalidate">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input type="text" class="form-control" name="name" placeholder="Your Full name" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input type="email" class="form-control" name="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input type="text" class="form-control" name="number" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea class="form-control" name="message" rows="1" placeholder="Review"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12 text-right">
                    <button type="submit" value="submit" class="btn_3">
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================End Product Description Area =================-->

  <!-- product_list part start-->
  <section class="product_list best_seller">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="section_tittle text-center">
            <h2>Best Sellers <span>shop</span></h2>
          </div>
        </div>
      </div>
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-12">
          <div class="best_product_slider owl-carousel">
            <div class="single_product_item">
              <img src="template/img/product/product_1.png" alt="">
              <div class="single_product_text">
                <h4>Quartz Belt Watch</h4>
                <h3>$150.00</h3>
              </div>
            </div>
            <div class="single_product_item">
              <img src="template/img/product/product_2.png" alt="">
              <div class="single_product_text">
                <h4>Quartz Belt Watch</h4>
                <h3>$150.00</h3>
              </div>
            </div>
            <div class="single_product_item">
              <img src="template/img/product/product_3.png" alt="">
              <div class="single_product_text">
                <h4>Quartz Belt Watch</h4>
                <h3>$150.00</h3>
              </div>
            </div>
            <div class="single_product_item">
              <img src="template/img/product/product_4.png" alt="">
              <div class="single_product_text">
                <h4>Quartz Belt Watch</h4>
                <h3>$150.00</h3>
              </div>
            </div>
            <div class="single_product_item">
              <img src="template/img/product/product_5.png" alt="">
              <div class="single_product_text">
                <h4>Quartz Belt Watch</h4>
                <h3>$150.00</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
<script src="template/js/jquery.magnific-popup.js"></script>
<script src="template/js/owl.carousel.min.js"></script>
<script src="template/js/jquery.nice-select.min.js"></script>
<!-- swiper js -->
<script src="template/js/lightslider.min.js"></script>

<script>
  const pno = "${pvo.prodNo}";
  const pname = "${pvo.name}";
  const detail = "${pvo.detail}";
  const price = "${pvo.price}";
  const category = "${pvo.category}";
  const viewCount = "${pvo.viewCount}";
  const image1 = "${pvo.image1}";
</script>

<%-- CWH js --%>
<script src="js/prodDetail.js"></script>

<%-- KJM js --%>
<script src="js/prodDetailAsk.js"></script>