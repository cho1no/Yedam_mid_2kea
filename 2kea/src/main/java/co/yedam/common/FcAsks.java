package co.yedam.common;

import java.util.Map;



import co.yedam.asks.control.AddAsk;
import co.yedam.asks.control.AddReply;
import co.yedam.asks.control.AdminAskList;
import co.yedam.asks.control.AdminAskListNoRe;
import co.yedam.asks.control.AdminAskListRe;
import co.yedam.asks.control.AdminPage;
import co.yedam.asks.control.AskCount;
import co.yedam.asks.control.AskList;
import co.yedam.asks.control.DelAsk;
import co.yedam.asks.control.DelReply;
import co.yedam.asks.control.EditReply;
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
		map.put("/addReply.do", new AddReply()); // 답변등록
		map.put("/editReply.do", new EditReply()); // 답변수정
		map.put("/delReply.do", new DelReply()); // 답변삭제
		// admin
		map.put("/adminPage.do", new AdminPage()); //관리자 페이지 화면
		map.put("/adminAskList.do", new AdminAskList()); //전체 문의목록
		map.put("/adminAskListRe.do", new AdminAskListRe()); //답변완료 문의목록
		map.put("/adminAskListNoRe.do", new AdminAskListNoRe()); //답변대기 문의목록
	}
}
