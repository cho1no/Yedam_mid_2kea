package co.yedam.revw.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import co.yedam.common.Control;
import co.yedam.revw.service.ReviewService;
import co.yedam.revw.service.ReviewServiceImpl;

public class ReviewFilterdCount implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String pno = req.getParameter("pno");
		
		ReviewService svc = new ReviewServiceImpl();
		int ratingCounts = svc.getReviewFilteredCount(Integer.parseInt(pno));
		
        Gson gson = new Gson();
        String jsonData = gson.toJson(ratingCounts);

        resp.setContentType("application/json");
        resp.getWriter().print(jsonData);
	}
	

}
