package co.yedam.asks.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.asks.service.AskService;
import co.yedam.asks.service.AskServiceImpl;
import co.yedam.common.Control;

public class AskCount implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String pno = req.getParameter("pno");
		
		AskService svc = new AskServiceImpl();
		int totalCount = svc.getAskCount(Integer.parseInt(pno));
		
		resp.getWriter().print("{\"totalCount\": "+ totalCount +"}");
	}

}
