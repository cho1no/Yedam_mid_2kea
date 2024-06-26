package co.yedam.revw.control;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.revw.service.ReviewService;
import co.yedam.revw.service.ReviewServiceImpl;

public class ReviewCount implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String pno = req.getParameter("pno");
		
		ReviewService svc = new ReviewServiceImpl();
		Map<String, Object> totalCount = svc.getReviewCount(Integer.parseInt(pno));
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(totalCount);
		
		resp.getWriter().print(json);
		
	}

}
