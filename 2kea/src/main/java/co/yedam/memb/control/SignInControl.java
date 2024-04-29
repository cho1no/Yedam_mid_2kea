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

public class SignInControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		// 파라미터를 추출한디.
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");

		// 파라미터를vo에 담고.
		MemberVO vo = new MemberVO();
		vo.setId(id);
		vo.setPw(pw);

		// service 기능 호출.
		LoginService ls = new LoginServiceImpl();
		vo = ls.login(vo);

//		Gson gson = new GsonBuilder().create();
//		String json = gson.toJson(vo);
//		
//		resp.getWriter().print(json);
		// service결과가 있다면
		if (vo != null) { // 결과가 일치한다 null이 아니다.
			HttpSession session = req.getSession();
			session.setAttribute("id", vo.getId());
			session.setAttribute("authority", vo.getAuthority());// 컨트롤 클릭해서authority로 해야하는지 확인받

			if (vo.getAuthority().equals("ADMIN")) {
				resp.sendRedirect("prodMain.do");
			} else {
				resp.sendRedirect("prodMain.do");
			}
		} else {
			req.setAttribute("msg", "id와 password를 확인하세요."); // attribute가 저장하는것.
			resp.sendRedirect("signIn.do");
		}
	}

}
