package co.yedam.asks.control;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.asks.service.ReplyService;
import co.yedam.asks.service.ReplyServiceImpl;
import co.yedam.asks.vo.ReplyVO;
import co.yedam.common.Control;

public class AddReply implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String replyContent = req.getParameter("replyContent");
		String askNo = req.getParameter("askNo");
		
		ReplyVO rvo = new ReplyVO();
		rvo.setAskNo(Integer.parseInt(askNo));
		rvo.setId(id);
		rvo.setReplyContent(replyContent);
		rvo.setReplyDate(new Date());
		
		ReplyService rvc = new ReplyServiceImpl();
		
		Map<String, Object> result = new HashMap<>();
		if(rvc.addReply(rvo)) {
			result.put("retCode", "Success");
			result.put("retVal", rvo);
		}else {
			result.put("retCode", "Fail");
			result.put("retVal", null);
		}
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(result);
		
		resp.getWriter().print(json);

	}

}
