package co.yedam.prod.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;

/**
 * 메인 페이지로 이동
 */
public class ProdMain implements Control {
	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();
		System.out.println((String)session.getAttribute("id"));
		
		req.getRequestDispatcher("2kea/main.tiles").forward(req, resp);
	}
}
