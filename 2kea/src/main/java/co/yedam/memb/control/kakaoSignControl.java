package co.yedam.memb.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;

public class kakaoSignControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	    // 카카오에서 전달된 정보를 추출합니다.
	    String id = req.getParameter("id");
	    String mName = req.getParameter("mName");
	    String email = req.getParameter("email");
	    
	    // 세션을 통해 사용자 정보를 저장합니다.
	    HttpSession session = req.getSession();
	    session.setAttribute("id", id);
	    session.setAttribute("mName", mName);
	    session.setAttribute("email", email);

	    // 카카오 로그인 성공 페이지로 리다이렉트합니다.
	    resp.sendRedirect("prodMain.do");
	}

}
