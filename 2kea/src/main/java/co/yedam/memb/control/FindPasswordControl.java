package co.yedam.memb.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.memb.service.LoginService;
import co.yedam.memb.service.LoginServiceImpl;
import co.yedam.memb.vo.MemberVO;

public class FindPasswordControl implements Control {

    @Override
    public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        String mName = req.getParameter("mName");
        String phone = req.getParameter("phone");
        
        MemberVO vo = new MemberVO();
        vo.setId(id);
        vo.setMName(mName);
        vo.setPhone(phone);
        
        LoginService ls = new LoginServiceImpl();
        vo = ls.findPw(vo);
        
		if (vo != null) {
			resp.sendRedirect("prodMain.do");
		} else {
			req.setAttribute("error", "이름과 번호를 확인하세요.");	//첫번째는 속성이름 두번째는 속성값.
			resp.sendRedirect("login.do");

		}
    }
}
