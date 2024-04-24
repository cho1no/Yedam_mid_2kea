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

public class FindIdControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String mName = req.getParameter("mName");
		String phone = req.getParameter("phone");

		MemberVO vo = new MemberVO(); // 담기만 하는것.
		vo.setMName(mName);
		vo.setPhone(phone);

		LoginService ls = new LoginServiceImpl(); // 처리만하는것.
		vo = ls.findId(vo);

		if (vo != null) {
			resp.sendRedirect("prodMain.do");
		} else {
			req.setAttribute("error", "이름과 번호를 확인하세요.");
			resp.sendRedirect("login.do");

		}

	}

}
