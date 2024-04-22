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
		// ask
		map.put("/addAskForm.do", new AddAskForm()); // 문의 등록 화면 
		map.put("/askList.do", new AskList());       // 문의목록
		map.put("/addAsk.do", new AddAsk());		 // 문의등록
		map.put("/editAsk.do", new EditAsk());		 // 문의수정
		map.put("/delAsk.do", new DelAsk());		 // 문의삭제
		// reply
		map.put("/replyList.do", new ReplyList());   // 답변목록
		map.put("/addReply.do", new AddReply());     // 답변등록
		map.put("/editReply.do", new EditReply());   // 답변수정
		map.put("/delReply.do", new DelReply());     // 답변삭제
		
		// review
		map.put("/ReviewList.do", new ReviewList());			        // 리뷰 더보기 기능
		map.put("/ReviewListControl.do", new ReviewListControl());		// 리뷰 더보기 기능
		map.put("/ReviewAddForm.do", new ReviewAddForm());				// 리뷰 작성 페이지
		map.put("/ReviewAddFormControl.do", new ReviewAddFormControl());// 리뷰 작성 기능 수행 페이지
		
		// member
		map.put("/signIn.do", new SignIn());				    		//로그인 페이지
		map.put("/signInControl.do", new SignInControl());				//로그인 기능 수행
		map.put("/findIdControl.do", new FindIdControl());				//아이디 찾기 기능 수행
		map.put("/findPasswordControl.do", new FindPasswordControl());	//비밀번호 찾기 기능 수행
		//map.put("/kakaoSignIn.do", new KakaoSignIn());				//카카오로그인 페이지(할수있다면)


		map.put("/signUp.do", new SignUp());					//회원 가입 페이지
		map.put("/signUpControl.do", new SignUpControl());		//회원 가입 기능 수행
		//map.put("/kakaoSignUp.do", new KakaoSignUp());		//카카오로그인 페이지(할수있다면)

		map.put("/userInfo.do", new UserInfo());						//정보 수정 페이지
		map.put("/userInfoControl.do", new UserInfoControl());			//정보 수정 기능 수행
		map.put("/userDeletionControl.do", new UserDeletionControl());	//회원 탈퇴 기능 수행
		
		// wish
		map.put("/wishList.do", new WishListControl()); // 위시리스트목록
		map.put("/addWish.do", new AddWish()); 			// 위시추가
		map.put("/modifyWish.do", new ModifyWish()); 	// 위시수량변경
		map.put("/removeWish.do", new RemoveWish()); 	// 위시삭제
		// cart
		map.put("/cartList.do", new CartList());     //장바구니목록
		map.put("/addCart.do", new AddCart());       //장바구니추가
		map.put("/modifyCart.do", new ModifyCart()); //장바구니수량변경
		map.put("/removeCart.do", new RemoveCart()); //장바구니상품삭제
		// oder & buy
		map.put("/orderList.do", new OrderList());       //주문내역페이지
		map.put("/orderProduct.do", new OrderProduct()); //결제페이지
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
