package co.yedam.common;

import java.util.Map;

import co.yedam.prod.control.ProdDetail;
import co.yedam.prod.control.ProdImgeListControl;
import co.yedam.prod.control.ProdListByCaseControl;
import co.yedam.prod.control.ProdMain;

public class FcProd {
	static void init(Map<String, Control> map) {
		// product
		map.put("/prodListByCase.do", new ProdListByCaseControl());  		// main 최근 등록순 상품 리스트 json
		
		// product detail
		map.put("/prodImgList.do", new ProdImgeListControl());  //상품 이미지 리스트 json
		
		// 페이지 이동
		map.put("/prodMain.do", new ProdMain());		 //메인 페이지 이동
		map.put("/prodDetail.do", new ProdDetail()); 
	}
}
