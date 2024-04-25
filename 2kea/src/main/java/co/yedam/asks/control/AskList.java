package co.yedam.asks.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.asks.service.AskService;
import co.yedam.asks.service.AskServiceImpl;
import co.yedam.asks.vo.AskVO;
import co.yedam.common.Control;

public class AskList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String pno = req.getParameter("pno");
		
		AskService svc = new AskServiceImpl();
		List<AskVO> list = svc.askList(Integer.parseInt(pno));
		
		Gson gson = new GsonBuilder()
				.setDateFormat("yyyy.MM.dd")
				.create();
		String json = gson.toJson(list); 
		
		resp.getWriter().print(json);

	}

}
