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
      <div class="cart_inner">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
              	<th scope="col">check</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
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
             
                    <!-- <input type="text" value="1" min="0" max="10" title="Quantity:"
                      class="input-text qty input-number" />
                    <button
                      class="increase input-number-increment items-count" type="button">
                      <i class="ti-angle-up"></i>
                    </button>
                    <button
                      class="reduced input-number-decrement items-count" type="button">
                      <i class="ti-angle-down"></i>
                    </button> -->
                
<!--               <tr class="bottom_button"> -->
<!--                 <td> -->
<!--                   <a class="btn_1" href="#">Update Cart</a> -->
<!--                 </td> -->
<!--                 <td></td> -->
<!--                 <td></td> -->
<!--                 <td> -->
<!--                   <div class="cupon_text float-right"> -->
<!--                     <a class="btn_1" href="#">Close Coupon</a> -->
<!--                   </div> -->
<!--                 </td> -->
<!--               </tr> -->
              <tr>
                <td></td>
                <td></td>
                <td>
                  <h5>Subtotal</h5>
                </td>
                <td class="subtotal">
                  <h5></h5>
                </td>
              </tr>
<!--               <tr class="shipping_area"> -->
<!--                 <td></td> -->
<!--                 <td></td> -->
              
<!--                 <td> -->
<!--                   <div class="shipping_box"> -->
<!--                     <ul class="list"> -->
<!--                       <li> -->
<!--                         <a href="#">Flat Rate: $5.00</a> -->
<!--                       </li> -->
<!--                       <li> -->
<!--                         <a href="#">Free Shipping</a> -->
<!--                       </li> -->
<!--                       <li> -->
<!--                         <a href="#">Flat Rate: $10.00</a> -->
<!--                       </li> -->
<!--                       <li class="active"> -->
<!--                         <a href="#">Local Delivery: $2.00</a> -->
<!--                       </li> -->
<!--                     </ul> -->
<!--                     <h6> -->
<!--                       Calculate Shipping -->
<!--                       <i class="fa fa-caret-down" aria-hidden="true"></i> -->
<!--                     </h6> -->
<!--                     <select class="shipping_select"> -->
<!--                       <option value="1">Bangladesh</option> -->
<!--                       <option value="2">India</option> -->
<!--                       <option value="4">Pakistan</option> -->
<!--                     </select> -->
<!--                     <select class="shipping_select section_bg"> -->
<!--                       <option value="1">Select a State</option> -->
<!--                       <option value="2">Select a State</option> -->
<!--                       <option value="4">Select a State</option> -->
<!--                     </select> -->
<!--                     <input type="text" placeholder="Postcode/Zipcode" /> -->
<!--                     <a class="btn_1" href="#">Update Details</a> -->
<!--                   </div> -->
<!--                 </td> -->
<!--               </tr> -->
            </tbody>
          </table>
          <div class="checkout_btn_inner float-right">
            <a class="btn_1" id="btn_1" href="#" onclick="">선택상품 삭제</a>
            <a class="btn_1 " href="#" onclick ="window.open('orderList.do')">주문하기</a>
          </div>
            <a class="btn_1 checkout_btn_1" href="#" onclick="">장바구니 비우기</a>
        </div>
      </div>
      </div>
  </section>
  <!--================End Cart Area =================-->
  <script src="js/cartService.js"></script>