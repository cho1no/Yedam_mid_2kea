<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <style>
    	input[type=checkbox]{
    		accent-color:black;
    	}
    </style>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<!--================Cart Area =================-->
  <section class="cart_area padding_top">
    <div class="container">
    <div class="section_tittle text-center">
    <h2>
	  장바구니 
	</h2>
	</div>
      <div class="cart_inner">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
              	<th scope="col">✓</th>
                <th scope="col">상품</th>
                <th scope="col">가격</th>
                <th scope="col">수량</th>
                <th scope="col">합계</th>
              </tr>
            </thead>
            <tbody>          
              <tr class="cart_list" data-pno="0" style="display:none;">
              <td> 
              	<div class="check" align="center" ><input type="checkbox" name="buy">&nbsp;</div>
              </td>
                <td>
                  <div class="media">
                    <div class="d-flex" id="cart_prod_img">
                      <img src="template/img/product/single-product/cart-1.jpg" alt="1" />
                    </div>
                    <div class="media-body">
                      <p>Minimalistic shop for multipurpose use</p>
                    </div>
                  </div>
                </td>
                <td class="price">
                  <h5>$360.00</h5>
                </td>
                <td>
                  <div class="product_count">
                    <span class="input-number-decrement"> <i class="ti-angle-down"></i></span>
                    <input class="input-number" type="text" value="1" min="0" max="10">
                    <span class="input-number-increment"> <i class="ti-angle-up"></i></span>
                  </div>
                </td>
                <td class="total">
                  <h5>$720.00</h5>
                </td>
              </tr> 
              <tr>
                <td></td>
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
          <div class="checkout_btn_inner float-right">
            <a class="btn_1" id="btn_1" href="#" onclick="">선택상품 삭제</a>
            <a class="btn_1 " href="#" onclick ="location.href='checkout.do'">주문하기</a>
          </div>
            <a class="btn_1 checkout_btn_1" href="#" onclick="">장바구니 비우기</a>
        </div>
      </div>
      </div>
  </section>
  <!--================End Cart Area =================-->
  <script src="js/cartService.js"></script>