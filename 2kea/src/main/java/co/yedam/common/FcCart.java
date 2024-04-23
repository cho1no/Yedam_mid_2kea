package co.yedam.common;

import java.util.Map;

import co.yedam.cart.control.AddCart;
import co.yedam.cart.control.CartList;
import co.yedam.cart.control.CartListForm;
import co.yedam.cart.control.ModifyCart;
import co.yedam.cart.control.OrderList;
import co.yedam.cart.control.OrderListForm;
import co.yedam.cart.control.OrderProduct;
import co.yedam.cart.control.RemoveCart;

public class FcCart {
	static void init(Map<String, Control> map) {
		// cart
		map.put("/cartListForm.do", new CartListForm()); // 장바구니 페이지
		map.put("/cartList.do", new CartList()); // 장바구니목록
		map.put("/addCart.do", new AddCart()); // 장바구니추가
		map.put("/modifyCart.do", new ModifyCart()); // 장바구니수량변경
		map.put("/removeCart.do", new RemoveCart()); // 장바구니상품삭제
		// oder
		map.put("/orderListForm.do", new OrderListForm()); // 주문내역 페이지
		map.put("/orderList.do", new OrderList()); // 주문목록
		map.put("/orderProduct.do", new OrderProduct()); // 주문상세내역
	}
}
