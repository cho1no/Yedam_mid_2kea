<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- product_list part start-->

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

<section class="product_list best_seller section_padding">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-12">
				<div class="section_tittle text-center">
					<h2>
						찜 목록
					</h2>
				</div>
			</div>
		</div>

		<div style="display:none" id="owl_wish">
			<div class="single_product_item">
				<img src="template/img/product/product_1.png" alt="">
				<div class="single_product_text">
					<h4>Quartz Belt Watch</h4>
					<h3>$150.00</h3>
					<a class="add_cart"><span style="color:#ff3368">+ 장바구니 담기</span><i class=""></i></a>
				</div>
			</div>
		</div>
	
		<div class="row align-items-center justify-content-between">
			<div class="col-lg-12 wish">
				<div class="best_wish_product_slider owl-carousel"></div>
			</div>
		</div>
	</div>
</section>
<!-- product_list part end-->
<script src="js/wishService.js"></script>
