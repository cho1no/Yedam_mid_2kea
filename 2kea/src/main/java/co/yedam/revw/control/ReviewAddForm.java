package co.yedam.revw.control;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.revw.service.ReviewService;
import co.yedam.revw.service.ReviewServiceImpl;
import co.yedam.revw.vo.ReviewVO;

public class ReviewAddForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		
		int prodNO = Integer.parseInt(req.getParameter("prodNo"));
		String id = req.getParameter("id");
		int rating = Integer.parseInt(req.getParameter("rating"));
		String reviewContent = req.getParameter("reviewContent");
		
		ReviewVO rvo = new ReviewVO();
		rvo.setProdNo(prodNO);
		rvo.setId(id);
		rvo.setRating(rating);
		rvo.setReviewContent(reviewContent);
		
		ReviewService svc = new ReviewServiceImpl();
		
		Map<String, Object> result = new HashMap<>();
		if(svc.addReview(rvo)) {
			result.put("retCode", "Success");
			result.put("retVal", rvo);
		} else {
			result.put("retCode", "Fail");
			result.put("retVal", null);
		}
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(result);
		
		resp.getWriter().print(json);

	}

}
