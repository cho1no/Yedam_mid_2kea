package co.yedam.memb.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

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

		Gson gson = new GsonBuilder().create();
		if (ls.findId(vo) != null) {
			MemberVO mvo = ls.findId(vo);
			
			String json = gson.toJson(mvo);
			resp.getWriter().print(json);
		}

	}

}
