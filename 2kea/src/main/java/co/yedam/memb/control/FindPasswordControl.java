package co.yedam.memb.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.memb.vo.MemberVO;

public class FindPasswordControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String mName = req.getParameter("mName");
		String phone = req.getParameter("phone");
		
		MemberVO vo = new MemberVO();
		
	}

}
