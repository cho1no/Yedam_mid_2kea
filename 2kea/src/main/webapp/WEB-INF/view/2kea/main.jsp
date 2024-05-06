<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <style>
        .add_cart > i.active{
        animation:like 0.3s 1;
        color:#ff3368 !important;
        stroke:none;
        }
        @-webkit-keyframes like {
        0%   { transform: scale(1); }
        90%   { transform: scale(1.2); }
        100% { transform: scale(1.1); }
        }
    </style>
    <section class="banner_part">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="banner_slider owl-carousel">
                        <div class="single_banner_slider">
                            <div class="row">
                                <div class="col-lg-5 col-md-8">
                                    <div class="banner_text">
                                        <div class="banner_text_iner">
                                           <h1>KIVIK
                                                </h1>
                                            <p>Enjoy the super comfy KIVIK sofa with deep 
                                            seat cushions made of pocket springs</p>
                                            <a href="/2kea/prodDetail.do?pno=1004" class="btn_2">buy now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="banner_img d-none d-lg-block">
                                    <img src="template/img/banner_1.png" alt="">
                                </div>
                            </div>
                        </div><div class="single_banner_slider">
                            <div class="row">
                                <div class="col-lg-5 col-md-8">
                                    <div class="banner_text">
                                        <div class="banner_text_iner">
                                            <h1>HAUGA</h1>
                                            <p>Maximise your storage and create a coordinated 
                                            look by building your own HAUGA storage combination.</p>
                                            <a href="/2kea/prodDetail.do?pno=1010" class="btn_2">buy now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="banner_img d-none d-lg-block">
                                    <img src="template/img/banner_3.png" alt="">
                                </div>
                            </div>
                        </div><div class="single_banner_slider">
                            <div class="row">
                                <div class="col-lg-5 col-md-8">
                                    <div class="banner_text">
                                        <div class="banner_text_iner">
                                            <h1>EKTORP
                                                </h1>
                                            <p>Our beloved EKTORP seating has a timeless 
                                            design and wonderfully thick, comfy cushions.</p>
                                            <a href="/2kea/prodDetail.do?pno=1002" class="btn_2">buy now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="banner_img d-none d-lg-block">
                                    <img src="template/img/banner_2.png" alt="">
                                </div>
                            </div>
                        </div><div class="single_banner_slider">
                            <div class="row">
                                <div class="col-lg-5 col-md-8">
                                    <div class="banner_text">
                                        <div class="banner_text_iner">
                                            <h1>ARKELSTORP</h1>
                                            <p>Solid wood is a durable natural material. 
                                            Drawer stops prevent the drawers from being pulled out too far.</p>
                                            <a href="/2kea/prodDetail.do?pno=1031" class="btn_2">buy now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="banner_img d-none d-lg-block">
                                    <img src="template/img/banner_4.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slider-counter"></div>
                </div>
            </div>
        </div>
    </section>
    <!-- banner part start-->

    <!-- product_list part start-->
    <section class="product_list best_seller section_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="section_tittle text-center">
                        <h2>Most Viewed <span>조회순</span></h2>
                    </div>
                </div>
            </div>
            <div class="row align-items-center justify-content-between">
                <div class="col-lg-12">
                    <div class="view_product_slider owl-carousel">
                        
                        <%-- <div class="single_product_item">
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
                        </div> --%>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <%-- for clone --%>
    <div class="single_product_item" id="single_product0" style="display:none;">
        <img src="template/img/product/product_1.png" alt="">
        <div class="single_product_text">
            <h4>Quartz Belt Watch</h4>
            <h3>$150.00</h3>
        </div>
    </div>
    <!-- product_list part end-->


    <!-- feature_part start-->
    <section class="feature_part padding_top">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section_tittle text-center">
                        <h2>Featured Category</h2>
                    </div>
                </div>
            </div>
            <div class="row align-items-center justify-content-between">
                <div class="col-lg-7 col-sm-6">
                    <div class="single_feature_post_text">
                        <p>Premium Quality</p>
                        <h3>Chests of drawers</h3>
                        <a href="/2kea/prodShop.do" class="feature_btn">EXPLORE NOW <i class="fas fa-play"></i></a>
                        <img src="template/img/feature/Chests_of_drawers_1.png" alt="">
                    </div>
                </div>
                <div class="col-lg-5 col-sm-6">
                    <div class="single_feature_post_text">
                        <p>Premium Quality</p>
                        <h3>Desk</h3>
                        <a href="/2kea/prodShop.do" class="feature_btn">EXPLORE NOW <i class="fas fa-play"></i></a>
                        <img src="template/img/feature/Desk_1.png" alt="">
                    </div>
                </div>
                <div class="col-lg-5 col-sm-6">
                    <div class="single_feature_post_text">
                        <p>Premium Quality</p>
                        <h3>Cabinet</h3>
                        <a href="/2kea/prodShop.do" class="feature_btn">EXPLORE NOW <i class="fas fa-play"></i></a>
                        <img src="template/img/feature/Cabinet_1.png" alt="">
                    </div>
                </div>
                <div class="col-lg-7 col-sm-6">
                    <div class="single_feature_post_text">
                        <p>Premium Quality</p>
                        <h3>Sofa</h3>
                        <a href="/2kea/prodShop.do" class="feature_btn">EXPLORE NOW <i class="fas fa-play"></i></a>
                        <img src="template/img/feature/sofa_1.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- upcoming_event part start-->

    <!-- product_list start-->
    <section class="product_list section_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="section_tittle text-center">
                        <h2>Released<span>최근 등록 상품</span></h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="prod_list_slider owl-carousel">

                        
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="single_product_list_slider" id="prod_list_page0">
        <div class="row align-items-center justify-content-between" id="prod_gird">

        </div>
    </div>

    <%-- for clone --%>
    <div class="col-lg-3 col-sm-6" id="prod_0" data-pno="0" style="display:none;">
        <div class="single_product_item">
            <img src="template/img/product/product_1.png" alt="">
            <div class="single_product_text">
                <h4>Quartz Belt Watch</h4>
                <h3>$150.00</h3>
                <a class="add_cart"><span style="color:#ff3368">+ 장바구니 담기</span><i class=""></i></a>
            </div>
        </div>
    </div>

<script src="js/prodMain.js"></script>