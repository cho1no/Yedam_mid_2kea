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
		
		Gson gson = new GsonBuilder().create();

		if (mvo != null) {
			String json = gson.toJson(mvo);
			resp.getWriter().print(json);
		} else {
			resp.getWriter().print("{\"retCode\": \"False\"}");
		}
	}
}
