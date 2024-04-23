package co.yedam.asks.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.asks.service.AskService;
import co.yedam.asks.service.AskServiceImpl;
import co.yedam.common.Control;

public class DelAsk implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String askNo = req.getParameter("askNo");

		AskService svc = new AskServiceImpl();
		if (svc.delAsk(Integer.parseInt(askNo))) {
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}

	}

}
