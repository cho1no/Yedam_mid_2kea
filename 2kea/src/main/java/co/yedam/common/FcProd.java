package co.yedam.common;

import java.util.Map;

import co.yedam.memb.control.ProdShop;
import co.yedam.prod.control.CategoryCountControl;
import co.yedam.prod.control.ProdCountControl;
import co.yedam.prod.control.ProdDetail;
import co.yedam.prod.control.ProdImgeListControl;
import co.yedam.prod.control.ProdListByCaseControl;
import co.yedam.prod.control.ProdMain;
import co.yedam.prod.control.ProdShopListControl;

public class FcProd {
	static void init(Map<String, Control> map) {
		// product list
		map.put("/prodListByCase.do", new ProdListByCaseControl());  // main 최근 등록순 상품 리스트 json
		map.put("/prodShopList.do", new ProdShopListControl()); 		// shop 리스트 뽑기
		map.put("/prodCount.do", new ProdCountControl()); // total page calc
		map.put("/categoryCount.do", new CategoryCountControl()); // category Count
		// product detail
		map.put("/prodImgList.do", new ProdImgeListControl());  //상품 이미지 리스트 json
		
		// 페이지 이동
		map.put("/prodMain.do", new ProdMain());		 //메인 페이지 이동
		map.put("/prodDetail.do", new ProdDetail()); 	 //상세 페이지 이동
		map.put("/prodShop.do", new ProdShop()); //카테고리 페이지 이동
	}
}
