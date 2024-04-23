package co.yedam.revw.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.revw.service.ReviewService;
import co.yedam.revw.service.ReviewServiceImpl;

public class ReviewRemove implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		
		int reviewNo = Integer.parseInt(req.getParameter("reviewNo"));
		
		ReviewService svc = new ReviewServiceImpl();
		
		if(svc.removeReview(reviewNo)) {
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}
}


