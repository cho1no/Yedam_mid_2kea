package co.yedam.revw.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.revw.service.ReviewService;
import co.yedam.revw.service.ReviewServiceImpl;

public class ReviewCount implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String pno = req.getParameter("pno");
		
		ReviewService svc = new ReviewServiceImpl();
		int totalCount = svc.getReviewCount(Integer.parseInt(pno));
		
		resp.getWriter().print("{\"totalCount\": "+ totalCount +"}");
	}

}
