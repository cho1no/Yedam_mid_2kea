package co.yedam.prod.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.prod.service.ProdService;
import co.yedam.prod.service.ProdServiceImpl;
import co.yedam.prod.vo.ProdVO;

public class ProdDetail implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String pno = req.getParameter("pno");
		ProdService svc = new ProdServiceImpl();
		ProdVO vo = svc.showProd(Integer.parseInt(pno));
		
		req.setAttribute("pvo", vo);
		
		req.getRequestDispatcher("2kea/prodDetail.tiles").forward(req, resp);
	}

}
