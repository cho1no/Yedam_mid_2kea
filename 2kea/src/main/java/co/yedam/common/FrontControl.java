package co.yedam.common;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// init -> service -> destroy
// .do로 끝나는 url패턴일때 실행되는 FrontControl
public class FrontControl extends HttpServlet {
	
	//url pattern - 실행서블릿. 관리.
	Map<String, Control> map;
	public FrontControl() {
		map = new HashMap<>();
	}

	@Override
	public void init(ServletConfig config) throws ServletException {
		// front control setttings
		FcAsks.init(map); // 문의
		FcCart.init(map); // 장바구니
		FcMemb.init(map); // 멤버
		FcProd.init(map); // 상품
		FcRevw.init(map); // 리뷰
		FcWish.init(map); // 찜
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		
		resp.setContentType("text/html;charset=utf-8");
		
		String uri = req.getRequestURI();
		String context = req.getContextPath();
		String path = uri.substring(context.length());
		String ip = req.getRemoteAddr();
		System.out.println(new Date());
		System.out.println("uri	: " + uri);
//		System.out.println("context : " + context);
//		System.out.println("path	: " + path);
		System.out.println("ip	: " + ip);
		Control control = map.get(path);
		control.exec(req, resp);
	}

	@Override
	public void destroy() {
		
	}
}
