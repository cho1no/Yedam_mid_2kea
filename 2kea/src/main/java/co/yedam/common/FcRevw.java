package co.yedam.common;

import java.util.Map;

import co.yedam.revw.control.ReviewAddForm;
import co.yedam.revw.control.ReviewAddFormControl;
import co.yedam.revw.control.ReviewCount;
import co.yedam.revw.control.ReviewFilteredCount;
import co.yedam.revw.control.ReviewList;
import co.yedam.revw.control.ReviewListControl;
import co.yedam.revw.control.ReviewModify;
import co.yedam.revw.control.ReviewRemove;

public class FcRevw {
	static void init(Map<String, Control> map) {
		// review
		map.put("/ReviewList.do", new ReviewList()); // 리뷰 더보기 기능
		map.put("/ReviewListControl.do", new ReviewListControl()); // 리뷰 더보기 기능
		map.put("/ReviewAddForm.do", new ReviewAddForm()); // 리뷰 작성 페이지
		map.put("/ReviewAddFormControl.do", new ReviewAddFormControl());// 리뷰 작성 기능 수행 페이지
		map.put("/ReviewModify.do", new ReviewModify());
		map.put("/ReviewRemove.do", new ReviewRemove());
		map.put("/reviewCount.do", new ReviewCount());
		map.put("/reviewFilteredCount.do", new ReviewFilteredCount());
	}
}
