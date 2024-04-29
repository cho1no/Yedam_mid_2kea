package co.yedam.prod.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.prod.service.ProdService;
import co.yedam.prod.service.ProdServiceImpl;
import co.yedam.prod.vo.ShopVO;

public class ProdCountControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json; charset=utf-8");
		
		String sw = req.getParameter("sw") == null ? "" : req.getParameter("sw");
		String sc = req.getParameter("sc") == null ? "" : req.getParameter("sc");
		String cg = req.getParameter("cg") == null ? "" : req.getParameter("cg");
		
		
		ShopVO vo = new ShopVO();
		vo.setSearchWord(sw);
		vo.setShowCase(sc);
		vo.setCategory(cg);
		
		ProdService svc = new ProdServiceImpl();
		int totalCount = svc.cntProd(vo);
				
		String json = "{\"totalCount\": "+totalCount+"}";
		resp.getWriter().print(json);
	}

}
