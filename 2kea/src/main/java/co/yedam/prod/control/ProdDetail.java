package co.yedam.prod.control;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.prod.service.ProdService;
import co.yedam.prod.service.ProdServiceImpl;
import co.yedam.prod.vo.ProdImgVO;
import co.yedam.prod.vo.ProdVO;

/**
 * 상세 페이지로 이동
 */
public class ProdDetail implements Control {
	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String pno = req.getParameter("pno");
		
		if (pno == null) pno = "1000";
		
		ProdService svc = new ProdServiceImpl();
		ProdVO vo = svc.showProd(Integer.parseInt(pno));
		List<ProdImgVO> list = svc.showProdImgList(Integer.parseInt(pno));
		// 이미지 이름만 넘기기
		List<String> imgNameList = new ArrayList<String>();
		for (ProdImgVO ivo : list) {
			imgNameList.add(ivo.getImage1());
		}
		svc.addViewCount(Integer.parseInt(pno));
		
		req.setAttribute("pvo", vo);
		req.setAttribute("imgs", imgNameList);
		
		req.getRequestDispatcher("2kea/prodDetail.tiles").forward(req, resp);
	}
}
