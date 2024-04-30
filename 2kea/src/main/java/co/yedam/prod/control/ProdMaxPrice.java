package co.yedam.prod.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.prod.service.ProdService;
import co.yedam.prod.service.ProdServiceImpl;

public class ProdMaxPrice implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json; charset=utf-8");
		ProdService svc = new ProdServiceImpl();
		int max = svc.getMaxPrice();
				
		String json = "{\"max\": "+max+"}";
		resp.getWriter().print(json);
	}

}
