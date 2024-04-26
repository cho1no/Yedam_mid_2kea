package co.yedam.asks.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.asks.service.ReplyService;
import co.yedam.asks.service.ReplyServiceImpl;
import co.yedam.common.Control;

public class DelReply implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String askNo = req.getParameter("askNo");

		ReplyService svc = new ReplyServiceImpl();
		if (svc.delReply(Integer.parseInt(askNo))) {
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}

	}

}
