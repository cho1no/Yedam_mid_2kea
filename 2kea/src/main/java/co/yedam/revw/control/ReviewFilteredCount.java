package co.yedam.revw.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.revw.service.ReviewService;
import co.yedam.revw.service.ReviewServiceImpl;
import co.yedam.revw.vo.ReviewCountVO;

public class ReviewFilteredCount implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json; charset=utf-8");
				
		ReviewService svc = new ReviewServiceImpl();
		String pno = req.getParameter("pno");
		
		int rvcnt = svc.getReviewFilteredCount(Integer.parseInt(pno));
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(rvcnt);
		
		resp.getWriter().print(json);
	}
	

}
