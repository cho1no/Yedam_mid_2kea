package co.yedam.asks.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.asks.service.AskService;
import co.yedam.asks.service.AskServiceImpl;
import co.yedam.common.Control;

public class AdminAskCountNoRe implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		AskService svc = new AskServiceImpl();
		int totalCount = svc.getAdminAskCountNoRe();
		
		resp.getWriter().print("{\"totalCount\": "+ totalCount +"}");


	}

}
