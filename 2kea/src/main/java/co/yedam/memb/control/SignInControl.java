package co.yedam.memb.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.memb.service.LoginService;
import co.yedam.memb.service.LoginServiceImpl;
import co.yedam.memb.vo.MemberVO;

public class SignInControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");

		MemberVO vo = new MemberVO();
		vo.setId(id);
		vo.setPw(pw);
		
		LoginService ls  = new LoginServiceImpl();
		vo = ls.login(vo);
		
		if (vo != null){
			HttpSession session = req.getSession();
			session.setAttribute("id", vo.getId());
			session.setAttribute("pw", vo.getResponsibility());
			
			if (vo.getResponsibility().equals("Admin")) {
				req.getRequestDispatcher("#").forward(req, resp);
			} else {
				req.getRequestDispatcher("#").forward(req, resp);
			}
			
		} else {
			req.setAttribute("msg", "id와 password를 확인하세요.");
			req.getRequestDispatcher("#").forward(req, resp);
		}
	}

}
