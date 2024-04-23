package co.yedam.cart.control;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.cart.service.CartService;
import co.yedam.cart.service.CartServiceImpl;
import co.yedam.cart.vo.CartVO;
import co.yedam.common.Control;

public class AddCart implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String pno = req.getParameter("pno");
		String id = req.getParameter("id");
		String qty = req.getParameter("qty");
		
		CartVO cvo = new CartVO();
		cvo.setProdNo(Integer.parseInt(pno));
		cvo.setId(id);
		cvo.setQty(Integer.parseInt(qty));
		
		CartService csv = new CartServiceImpl();
		
		if(csv.addCart(cvo)) {
			resp.getWriter().print("{\"retCode\" : \"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\" : \"Fail\"}");
		}
	}

}
