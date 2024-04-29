package co.yedam.memb.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.memb.service.LoginService;
import co.yedam.memb.service.LoginServiceImpl;
import co.yedam.memb.vo.MemberVO;

public class SignUpControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		String mName = req.getParameter("mName");
		String email = req.getParameter("email");
		String phone = req.getParameter("phone");

		MemberVO vo = new MemberVO();
		vo.setId(id);
		vo.setPw(pw);
		vo.setMName(mName);
		vo.setEmail(email);
		vo.setPhone(phone);

		LoginService ls = new LoginServiceImpl();
		
		if (ls.addMember(vo)) {
			// "{\"retCode\": \"success\"}")
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		} else {
			// "{\"retCode\": \"success\"}")
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
			resp.sendRedirect("signIn.do");

		}
	}

}
