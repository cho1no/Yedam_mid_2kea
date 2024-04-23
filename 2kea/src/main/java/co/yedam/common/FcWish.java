package co.yedam.common;

import java.util.Map;

import co.yedam.cart.control.WishList;
import co.yedam.cart.control.WishListForm;
import co.yedam.wish.control.AddWish;
import co.yedam.wish.control.RemoveWish;

public class FcWish {
	static void init(Map<String, Control> map) {
		// wish
		map.put("/wishListForm.do", new WishListForm()); // 위시리스트 페이지
		map.put("/wishList.do", new WishList()); // 위시리스트목록
		map.put("/addWish.do", new AddWish()); // 위시추가
		map.put("/removeWish.do", new RemoveWish()); // 위시삭제
	}
}
