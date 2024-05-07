package co.yedam.common;

import java.util.Map;


import co.yedam.asks.control.AddAsk;
import co.yedam.asks.control.AddReply;
import co.yedam.asks.control.AdminAskCount;
import co.yedam.asks.control.AdminAskCountNoRe;
import co.yedam.asks.control.AdminAskCountRe;
import co.yedam.asks.control.AdminAskList;
import co.yedam.asks.control.AdminAskListNoRe;
import co.yedam.asks.control.AdminAskListRe;
import co.yedam.asks.control.AdminGetAsk;
import co.yedam.asks.control.AdminGetProd;
import co.yedam.asks.control.AdminPage;
import co.yedam.asks.control.AskCount;
import co.yedam.asks.control.AskList;
import co.yedam.asks.control.DelAsk;
import co.yedam.asks.control.DelReply;
import co.yedam.asks.control.GetReply;
import co.yedam.asks.control.ReplyList;

public class FcAsks {
	static void init(Map<String, Control> map) {
		// ask
		map.put("/askList.do", new AskList()); // 문의목록
		map.put("/addAsk.do", new AddAsk()); // 문의등록
		map.put("/delAsk.do", new DelAsk()); // 문의삭제
		map.put("/askCount.do", new AskCount());
		// reply
		map.put("/replyList.do", new ReplyList()); // 답변목록
		map.put("/getReply.do", new GetReply());  	  // 한 건
		map.put("/addReply.do", new AddReply()); // 답변등록
		map.put("/delReply.do", new DelReply()); // 답변삭제
		
		// admin
		map.put("/adminPage.do", new AdminPage()); //관리자 페이지 화면
		map.put("/adminAskList.do", new AdminAskList()); //전체보기 문의목록
		map.put("/adminAskListRe.do", new AdminAskListRe()); //답변완료 문의목록
		map.put("/adminAskListNoRe.do", new AdminAskListNoRe()); //답변대기 문의목록
		
		//admin Ask Count
		map.put("/adminAskCount.do", new AdminAskCount());		 //전체보기 count
		map.put("/adminAskCountRe.do", new AdminAskCountRe()); //답변완료 count
		map.put("/adminAskCountNoRe.do", new AdminAskCountNoRe()); //답변대기 count
		
		// 문의관리페이지
		map.put("/adminReplyProd.do", new AdminGetProd());
		map.put("/adminReplyAsk.do", new AdminGetAsk());
	}
}
