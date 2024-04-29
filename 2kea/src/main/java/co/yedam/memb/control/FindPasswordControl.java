package co.yedam.memb.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

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
		MemberVO mvo = ls.findPw(vo);

		if (mvo != null) {
			Gson gson = new GsonBuilder().create();
			String json = gson.toJson(mvo);
			resp.getWriter().print(json);
		} else {
			req.setAttribute("error", "이름과 번호를 확인하세요."); // 첫번째는 속성이름 두번째는 속성값.
		}
	}
}
