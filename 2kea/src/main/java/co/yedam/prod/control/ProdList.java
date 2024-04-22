package co.yedam.prod.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.prod.service.ProdService;
import co.yedam.prod.service.ProdServiceImpl;
import co.yedam.prod.vo.ProdVO;

public class ProdList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// json문자열생성
		resp.setContentType("text/json; charset=utf-8");
		ProdService svc = new ProdServiceImpl();
		List<ProdVO> list = svc.showProdList();
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);
//		req.getRequestDispatcher("2kea/main.tiles").forward(req, resp);
	}

}
