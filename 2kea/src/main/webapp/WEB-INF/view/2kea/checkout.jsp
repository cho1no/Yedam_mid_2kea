<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script type="text/javascript"
	src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
<!-- <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> -->
<script	src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.10/dist/sweetalert2.min.css">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.10/dist/sweetalert2.min.js"></script>


<style>
.swal-button--confirm {
	background: FF3368 !important;
}

span.middle {
	margin-left: 500px !important;
}


.order_box{
	background: #fff !important;
}
</style>
<link rel="styleesheet" href="sweetalert2.min.css">
<!--================Home Banner Area =================-->
<!-- breadcrumb start-->
<section class="breadcrumb breadcrumb_bg">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-8">
				<div class="breadcrumb_iner">
					<div class="breadcrumb_iner_item">
						<h2>상품 주문</h2>
						<p>2kea</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- breadcrumb start-->

<!--================Checkout Area =================-->
<section class="checkout_area padding_top">
	<div class="container">
		<div class="billing_details">
			<div class="row justify-content-center">
			<div class="order_box">
				<div class="col-lg-12">
					<h3 align="center">결제 세부정보</h3>
					<form class="row justify-content-center" action="#" method="post"
						novalidate="novalidate">
						<div class="col-md-4 form-group p_star">
							<input type="text" class="form-control" id="name" name="name" placeholder="이름 *" />
						</div>
						<div class="col-md-4 form-group p_star">
							<input type="text" class="form-control" id="number" name="number" placeholder="전화번호 *" />
						</div>
						<div class="col-md-8 form-group p_star">
							<input type="text" class="form-control" id="email" name="compemailany" placeholder="이메일 *" />
						</div>
						<div class="col-md-8 form-group p_star"></div>
						<!-- 주소찾기 api -->
						<div class="col-md-5 form-group p_star">
							<input type="text" class="form-control" id="sample4_postcode" placeholder="우편번호">
						</div>
						<div class="col-md-3 form-group p_star">
							<input type="button" class="form-control" onclick="sample4_execDaumPostcode()" value="우편번호 찾기">
						</div>
						<div class="col-md-8 form-group p_star">
							<input type="text" class="form-control" id="sample4_roadAddress" placeholder="도로명주소">
						</div>
						<div class="col-md-8 form-group p_star">
							<input type="text" class="form-control" id="sample4_jibunAddress" placeholder="지번주소">
						</div>
						<div class="col-md-8 form-group p_star">
							<span id="guide" style="color: #999; display: none"></span> 
							<input type="text" class="form-control" id="sample4_detailAddress" placeholder="상세주소">
						</div>
						<input type="text" id="sample4_extraAddress" placeholder="참고항목" style="display: none">
<!-- 						<div class="col-md-12 form-group p_star">  -->
<!-- 							<input type="text" class="form-control" id="sample4_extraAddress" placeholder="참고항목"> -->
<!-- 						</div> -->
						<!-- end api -->
					</form>
				</div>
				</div>
				<div class="order_box justify-content-center">
					<div class="col-lg-8" style="margin:auto" >
						<table class="table">
							<thead>
								<tr>
									<th scope="col">상품</th>
									<th class="col-2" scope="col">가격</th>
									<th class="col-1" scope="col">수량</th>
									<th class="col-2" scope="col">합계</th>
								</tr>
							</thead>
							<tbody>
								<tr class="cart_list" data-pno="0" style="display: none;">
									<td>
										<div class="media">
											<div class="d-flex" id="cart_prod_img">
												<img src="template/img/product/single-product/cart-1.jpg"
													alt="1" />
											</div>
											<div class="media-body d-flex align-self-center justify-content-center">
												<p>Minimalistic shop for multipurpose use</p>
											</div>
										</div>
									</td>
									<td class="total price">
										<h5>$360.00</h5>
									</td>
									<td class="total" >
										<div class="product_count" style="text-align:center" >
											<span class="qty"></span>
										</div>
									</td>
									<td class="total">
										<h5>$720.00</h5>
									</td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td>
										<h5>총 합계</h5>
									</td>
									<td class="subtotal">
										<h5></h5>
									</td>
								</tr>
							</tbody>
						</table>												
					</div>					
					<a class="btn_3 col-lg-3" href="#" onclick="requestPay()" style=margin:auto;>카카오페이</a>					
				</div>
			</div>
		</div>
	</div>
	
</section>
<!--================End Checkout Area =================-->


<script src="js/checkoutService.js"></script>
"
