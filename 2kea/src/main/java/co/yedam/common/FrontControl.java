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

import co.yedam.asks.control.AddAsk;
import co.yedam.asks.control.AddAskForm;
import co.yedam.asks.control.AddReply;
import co.yedam.asks.control.AskList;
import co.yedam.asks.control.DelAsk;
import co.yedam.asks.control.DelReply;
import co.yedam.asks.control.EditAsk;
import co.yedam.asks.control.EditReply;
import co.yedam.asks.control.ReplyList;
import co.yedam.cart.control.AddCart;
import co.yedam.cart.control.CartList;
import co.yedam.cart.control.CartListForm;
import co.yedam.cart.control.ModifyCart;
import co.yedam.cart.control.OrderList;
import co.yedam.cart.control.OrderListForm;
import co.yedam.cart.control.OrderProduct;
import co.yedam.cart.control.RemoveCart;
import co.yedam.cart.control.WishList;
import co.yedam.cart.control.WishListForm;
import co.yedam.memb.control.FindIdControl;
import co.yedam.memb.control.FindPasswordControl;
import co.yedam.memb.control.SignIn;
import co.yedam.memb.control.SignInControl;
import co.yedam.memb.control.SignUp;
import co.yedam.memb.control.SignUpControl;
import co.yedam.memb.control.UserDeletionControl;
import co.yedam.memb.control.UserInfo;
import co.yedam.memb.control.UserInfoControl;
import co.yedam.prod.control.ProdDetail;
import co.yedam.prod.control.ProdImgeListControl;
import co.yedam.prod.control.ProdListControl;
import co.yedam.prod.control.ProdMain;
import co.yedam.revw.control.ReviewAddForm;
import co.yedam.revw.control.ReviewAddFormControl;
import co.yedam.revw.control.ReviewList;
import co.yedam.revw.control.ReviewListControl;
import co.yedam.revw.control.ReviewModify;
import co.yedam.revw.control.ReviewRemove;
import co.yedam.wish.control.AddWish;
import co.yedam.wish.control.RemoveWish;

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
