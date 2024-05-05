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

public class UpdatePasswordControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		
		MemberVO vo = new MemberVO();
		vo.setId(id);
		vo.setPw(pw);

		LoginService ls = new LoginServiceImpl();
		

		Gson gson = new GsonBuilder().create();
		if (ls.modifyPw(vo)) { 
			String json = gson.toJson(vo);
			// { "retCode" : "Success" }
			resp.getWriter().print(json);
//			resp.sendRedirect("prodMain.do");

		} else {
			resp.getWriter().print("{\"retCode\": \"False\"}");
		}

	}

}
