<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<section class="cat_product_area section_padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="left_sidebar_area">
                    <aside class="left_widgets p_filter_widgets">
                        <div class="l_w_title">
                            <h3>카테고리</h3>
                        </div>
                        <div class="widgets_inner">
                            <ul class="list">
                                <%-- Category List --%>
                            </ul>
                        </div>
                    </aside>

                    <%-- <aside class="left_widgets p_filter_widgets">
                        <div class="l_w_title">
                            <h3>Color Filter</h3>
                        </div>
                        <div class="widgets_inner">
                            <ul class="list">
                                <li>
                                    <a href="#">Black</a>
                                </li>
                                <li>
                                    <a href="#">Black Leather</a>
                                </li>
                                <li class="active">
                                    <a href="#">Black with red</a>
                                </li>
                                <li>
                                    <a href="#">Gold</a>
                                </li>
                                <li>
                                    <a href="#">Spacegrey</a>
                                </li>
                            </ul>
                        </div>
                    </aside> --%>

                    <aside class="left_widgets p_filter_widgets price_rangs_aside">
                        <div class="l_w_title">
                            <h3>가격</h3>
                        </div>
                        <div class="widgets_inner">
                            <div class="range_item">
                                <!-- <div id="slider-range"></div> -->
                                <input type="text" class="js-range-slider" value="" />
                                <div class="" style="display:none;">
                                    <%-- <div class="price_text">
                                        <p>가격 :</p>
                                    </div> --%>
                                    <div class="price_value d-flex justify-content-center" >
                                        <input type="text" class="js-input-from" id="amount" readonly />
                                        <span style="margin: 5px; font-size:10pt">~</span>
                                        <input type="text" class="js-input-to" id="amount" readonly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product_top_bar d-flex justify-content-between align-items-center">
                            <div class="single_product_menu">
                                <p><span id="prodCnt"></span>개의 상품</p>
                            </div>
                            <div class="single_product_menu ml-auto d-flex pr-3">
                                <h5>정렬 : </h5>
                                <select id="orderSelect">
                                    <option data-display="선택">선택</option>
                                    <option value="pch">높은가격순</option>
                                    <option value="pcl">낮은가격순</option>
                                    <option value="vw">조회순</option>
                                    <option value="no">최신순</option>
                                </select>
                            </div>
                            <div class="single_product_menu">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder=""
                                        id="searchWord" aria-describedby="inputGroupPrepend" 
                                        onKeyPress="if( event.keyCode==13 ){searchFunc();}">
                                    <div class="input-group-prepend" id="searchBtn">
                                        <span class="input-group-text" id="inputGroupPrepend"><i
                                                class="ti-search"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center latest_product_inner">
                
                    <div class="col-lg-4 col-sm-6 prod" id="prod_0" style="display:none;">
                        <div class="single_product_item">
                            <img src="template/img/product/product_1.png" alt="">
                            <div class="single_product_text">
                                <h4>Quartz Belt Watch</h4>
                                <h3>$150.00</h3>
                                <a href="#" class="add_cart">+ add to cart<i class="ti-heart"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12" id="shop_pageination">
                        <div class="pageination">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center">
                                    <%-- page section --%>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script src="template/js/price_rangs.js"></script>
<script src="js/shopService.js"></script>
<script src="js/shop.js"></script>
