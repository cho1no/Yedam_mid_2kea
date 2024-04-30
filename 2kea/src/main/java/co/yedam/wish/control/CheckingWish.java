package co.yedam.wish.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.wish.service.WishService;
import co.yedam.wish.service.WishServiceImpl;
import co.yedam.wish.vo.WishVO;

public class CheckingWish implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String pno = req.getParameter("pno");
		String id = req.getParameter("id");
		System.out.println(pno);
		System.out.println(id);
		
		WishVO wvo = new WishVO();
		wvo.setProdNo(Integer.parseInt(pno));
		wvo.setId(id);
		
		
		WishService wsv = new WishServiceImpl();
		
		if(wsv.checkWish(wvo)) {
			resp.getWriter().print("{\"retCode\" : \"true\"}");
		} else {
			resp.getWriter().print("{\"retCode\" : \"false\"}");
		}
	}

}
