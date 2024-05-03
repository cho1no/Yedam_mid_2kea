package co.yedam.asks.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.asks.service.ReplyService;
import co.yedam.asks.service.ReplyServiceImpl;
import co.yedam.asks.vo.ReplyProdVO;
import co.yedam.common.Control;

public class AdminReplyProd implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String pno = req.getParameter("pno");
		
		ReplyService svc = new ReplyServiceImpl();
		ReplyProdVO rvo = svc.replyProd(Integer.parseInt(pno));
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(rvo);
		 
		resp.getWriter().print(json);
	}

}
