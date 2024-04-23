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
		map.put("/ReviewModify.do", new ReviewModify());
		map.put("/ReviewRemove.do", new ReviewRemove());
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
		  map.put("/wishListForm.do", new WishListForm());       // 위시리스트 페이지
		  map.put("/wishList.do", new WishList());            // 위시리스트목록 
		  map.put("/addWish.do", new AddWish());                // 위시추가
		  map.put("/removeWish.do", new RemoveWish());          // 위시삭제
		  // cart
		  map.put("/cartListForm.do", new CartListForm());        //장바구니 페이지
		  map.put("/cartList.do", new CartList());            //장바구니목록
		  map.put("/addCart.do", new AddCart());                 //장바구니추가
		  map.put("/modifyCart.do", new ModifyCart());           //장바구니수량변경
		  map.put("/removeCart.do", new RemoveCart());           //장바구니상품삭제
		  // oder 
		  map.put("/orderListForm.do", new OrderListForm());       //주문내역 페이지
		  map.put("/orderList.do", new OrderList());               //주문목록
		  map.put("/orderProduct.do", new OrderProduct());         //주문상세내역
		
		// product
		map.put("/prodList.do", new ProdListControl());  		//상품 리스트 json
		// product detail
		map.put("/prodImgList.do", new ProdImgeListControl());  //상품 이미지 리스트 json
		
		// 페이지 이동
		map.put("/prodMain.do", new ProdMain());		 //메인 페이지 이동
		map.put("/prodDetail.do", new ProdDetail());     //상세 페이지 이동
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
