package co.yedam.asks.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.asks.service.ReplyService;
import co.yedam.asks.service.ReplyServiceImpl;
import co.yedam.asks.vo.ReplyVO;
import co.yedam.common.Control;

public class ReplyList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String pno = req.getParameter("pno");

		ReplyService svc = new ReplyServiceImpl();
		List<ReplyVO> list = svc.replyList();

		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm").create();
		String json = gson.toJson(list);

		resp.getWriter().print(json);
	}

}
