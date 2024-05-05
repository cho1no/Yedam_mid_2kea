package co.yedam.common;

import java.util.Map;

import co.yedam.wish.control.AddWish;
import co.yedam.wish.control.CheckingWish;
import co.yedam.wish.control.RemoveWish;
import co.yedam.wish.control.WishList;
import co.yedam.wish.control.WishListControl;

public class FcWish {
	static void init(Map<String, Control> map) {
		// wish
		map.put("/wishListControl.do", new WishListControl()); // 위시리스트 페이지
		map.put("/wishList.do", new WishList()); // 위시리스트목록
		map.put("/addWish.do", new AddWish()); // 위시추가
		map.put("/removeWish.do", new RemoveWish()); // 위시삭제
		map.put("/checkingWish.do", new CheckingWish()); //위시체크
	}
}
