<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
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
                background: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FE2bww%2FbtsviSSBz4Q%2F5UYnwSWgTlFt6CEFZ1L3Q0%2Fimg.png') no-repeat;
                background-size: 100%;
                box-sizing: border-box;
            }

            .star_rating .star.on {
                width: 25px;
                height: 25px;
                margin-right: 10px;
                display: inline-block;
                background: url('https://blog.kakaocdn.net/dn/b2d6gV/btsvbDoal87/XH5b17uLeEJcBP3RV3FyDk/img.png') no-repeat;
                background-size: 100%;
                box-sizing: border-box;
            }

            #reviewContent {
                resize: none;
            }

            .list a {
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
                /* display: none; */
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

            /* #modifyBtn {
                position: relative;
                padding: 9px 39px;
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
            } */

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

            .col-lg-6 {
                flex: 0 0 100%;
                max-width: 100%;
            }

            .col-6 {
                flex: 0%;
                max-width: 80%;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-content: center;
                justify-content: center;
                align-items: center;
            }

            .row {
                padding: 0px 12px 0px 12px;
            }
        </style>
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
        <section class="product_description_area">
            <div class="container">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                            aria-selected="true">Description</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                            aria-controls="contact" aria-selected="false">Comments</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab"
                            aria-controls="review" aria-selected="false">Reviews</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <p>
                            Beryl Cook is one of Britain’s most talented and amusing artists
                            .Beryl’s pictures feature women of all shapes and sizes enjoying
                            themselves .Born between the two world wars, Beryl Cook eventually
                            left Kendrick School in Reading at the age of 15, where she went
                            to secretarial school and then into an insurance office. After
                            moving to London and then Hampton, she eventually married her next
                            door neighbour from Reading, John Cook. He was an officer in the
                            Merchant Navy and after he left the sea in 1956, they bought a pub
                            for a year before John took a job in Southern Rhodesia with a
                            motor company. Beryl bought their young son a box of watercolours,
                            and when showing him how to use it, she decided that she herself
                            quite enjoyed painting. John subsequently bought her a child’s
                            painting set for her birthday and it was with this that she
                            produced her first significant work, a half-length portrait of a
                            dark-skinned lady with a vacant expression and large drooping
                            breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
                        </p>
                        <p>
                            It is often frustrating to attempt to plan meals that are designed
                            for one. Despite this fact, we are seeing more and more recipe
                            books and Internet websites that are dedicated to the act of
                            cooking for one. Divorce and the death of spouses or grown
                            children leaving for college are all reasons that someone
                            accustomed to cooking for more than one would suddenly need to
                            learn how to adjust all the cooking practices utilized before into
                            a streamlined plan of cooking that is more efficient for one
                            person creating less
                        </p>
                    </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="comment_list">
                                    <div class="review_item">
                                        <div class="media">
                                            <div class="d-flex">
                                                <img src="img/product/single-product/review-1.png" alt="" />
                                            </div>
                                            <div class="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <a class="reply_btn" href="#">Reply</a>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                    </div>
                                    <div class="review_item reply">
                                        <div class="media">
                                            <div class="d-flex">
                                                <img src="img/product/single-product/review-2.png" alt="" />
                                            </div>
                                            <div class="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <a class="reply_btn" href="#">Reply</a>
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
                                                <img src="img/product/single-product/review-3.png" alt="" />
                                            </div>
                                            <div class="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <a class="reply_btn" href="#">Reply</a>
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
                                    <h4>Post a comment</h4>
                                    <form class="row contact_form" action="contact_process.php" method="post"
                                        id="contactForm" novalidate="novalidate">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="name" name="name"
                                                    placeholder="Your Full name" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="email" class="form-control" id="email" name="email"
                                                    placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="number" name="number"
                                                    placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea class="form-control" name="message" id="message" rows="1"
                                                    placeholder="Message"></textarea>
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

                    <div class="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
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
                                            <h3>Based on Rating Reviews</h3>
                                            <ul class="list">
                                                <li><a href="" data-rating="all">
                                                        view all
                                                    </a></li>
                                                <li>
                                                    <a href="#" data-rating="5">5 Star
                                                        <i data-rating="5" class="fas fa-star"></i>
                                                        <i data-rating="5" class="fas fa-star"></i>
                                                        <i data-rating="5" class="fas fa-star"></i>
                                                        <i data-rating="5" class="fas fa-star"></i>
                                                        <i data-rating="5" class="fas fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" data-rating="4">4 Star
                                                        <i data-rating="4" class="fas fa-star"></i>
                                                        <i data-rating="4" class="fas fa-star"></i>
                                                        <i data-rating="4" class="fas fa-star"></i>
                                                        <i data-rating="4" class="fas fa-star"></i>
                                                        <i data-rating="4" class="far fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" data-rating="3">3 Star
                                                        <i data-rating="3" class="fas fa-star"></i>
                                                        <i data-rating="3" class="fas fa-star"></i>
                                                        <i data-rating="3" class="fas fa-star"></i>
                                                        <i data-rating="3" class="far fa-star"></i>
                                                        <i data-rating="3" class="far fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" data-rating="2">2 Star
                                                        <i data-rating="2" class="fas fa-star"></i>
                                                        <i data-rating="2" class="fas fa-star"></i>
                                                        <i data-rating="2" class="far fa-star"></i>
                                                        <i data-rating="2" class="far fa-star"></i>
                                                        <i data-rating="2" class="far fa-star"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" data-rating="1">1 Star
                                                        <i data-rating="1" class="fas fa-star"></i>
                                                        <i data-rating="1" class="far fa-star"></i>
                                                        <i data-rating="1" class="far fa-star"></i>
                                                        <i data-rating="1" class="far fa-star"></i>
                                                        <i data-rating="1" class="far fa-star"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="review_list">
                                    <div class="review_item">
                                        <div class="media">
                                            <div class="d-flex">
                                                <img src="img/product/single-product/review-1.png" alt="" />
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
                                                <img src="img/product/single-product/review-2.png" alt="" />
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
                                                <img src="img/product/single-product/review-3.png" alt="" />
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
                            <!-- addreview start -->

                            <div class="col-lg-6">
                                <div class="review_box">
                                </div>
                            </div>
                            <!--통합모달시작-->
                            <!-- <button type="button" class="btn btn-primary" id="revBtn" data-bs-toggle="modal"
                                data-bs-target="#allModal" data-bs-whatever="revBtn">리뷰작성</button>
                            <button type="button" class="btn btn-primary" id="revModiBtn" data-bs-toggle="modal"
                                data-bs-target="#allModal" data-bs-whatever="revModiBtn" style="display: none;">리뷰수정</button>

                            <div class="modal fade" id="allModal" tabindex="-1" aria-labelledby="allModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="allModalLabel"></h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <form class="row contact_form" action="" method="post">
                                            <div class="modal-body">
                                                <div class="star_rating" id="rating">
                                                    <span class="rating_text">별점:</span>
                                                    <span class="star on" value="1"></span>
                                                    <span class="star" value="2"></span>
                                                    <span class="star" value="3"></span>
                                                    <span class="star" value="4"></span>
                                                    <span class="star" value="5"></span>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="mid" value="${id }"
                                                            readonly />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <textarea class="form-control" id="reviewContent" rows="6"
                                                            placeholder="Review"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 text-right">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn_3_close"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn_3" id="submitBtn"></button>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                            </div> -->
                            <!--통합모달끝-->

                            <!-- 리뷰추가모달  -->
                            <button type="button" class="btn btn-primary" id="revBtn" data-bs-toggle="modal"
                                data-bs-target="#addModal">리뷰작성</button>

                            <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="addModalLabel">리뷰 작성</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <form class="row contact_form" action="" method="post">
                                            <div class="modal-body">

                                                <div class="star_rating" id="rating"> <span
                                                        class="rating_text">별점:</span>
                                                    <span class="star on" value="1"> </span>
                                                    <span class="star" value="2"> </span>
                                                    <span class="star" value="3"> </span>
                                                    <span class="star" value="4"> </span>
                                                    <span class="star" value="5"> </span>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="mid" value="${id }"
                                                            readonly />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <textarea class="form-control" id="reviewContent" rows="6"
                                                            placeholder="Review"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 text-right">
                                                </div>

                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn_3_close"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="submit" class="btn_3" id="addReview">Submit
                                                    Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- 리뷰추가모달 끝 -->
                            <!-- 리뷰수정모달 시작-->

                            <div class="modal fade" id="modifyModal" tabindex="-1">
                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="modifyModalLabel">리뷰 수정</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <form class="row contact_form2" action="ReviewModify.do" method="post">
                                            <div class="modal-body">

                                                <input type="hidden" id="reviewNo" value="${reviewNo }">
                                                <div class="star_rating" id="rating"> <span
                                                        class="rating_text">별점:</span>
                                                    <span class="star on" value="1"> </span>
                                                    <span class="star" value="2"> </span>
                                                    <span class="star" value="3"> </span>
                                                    <span class="star" value="4"> </span>
                                                    <span class="star" value="5"> </span>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="mid" value="${id }"
                                                            readonly />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <textarea class="form-control" id="reviewContent" rows="6"
                                                            placeholder="Review"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 text-right">
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn_3_close"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="submit" class="btn_3" id="modifyBtn">Modify
                                                    Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <!-- 리뷰수정모달 끝 -->
                            <!-- addreview end -->
                        </div>
                    </div>

                    <script>
                        // var id = '<%=(String)session.getAttribute("id")%>';
                    </script>

                    <script src="js/review.js"></script>