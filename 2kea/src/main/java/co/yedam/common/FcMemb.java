package co.yedam.common;

import java.util.Map;

import co.yedam.memb.control.FindIdControl;
import co.yedam.memb.control.FindPasswordControl;
import co.yedam.memb.control.SignIn;
import co.yedam.memb.control.SignInControl;
import co.yedam.memb.control.SignUp;
import co.yedam.memb.control.SignUpControl;
import co.yedam.memb.control.UserDeletionControl;
import co.yedam.memb.control.UserInfo;
import co.yedam.memb.control.UserInfoControl;

public class FcMemb {
	static void init(Map<String, Control> map) {
		// member
		map.put("/signIn.do", new SignIn()); // 로그인 페이지
		map.put("/signInControl.do", new SignInControl()); // 로그인 기능 수행
		map.put("/findIdControl.do", new FindIdControl()); // 아이디 찾기 기능 수행
		map.put("/findPasswordControl.do", new FindPasswordControl()); // 비밀번호 찾기 기능 수행
		// map.put("/kakaoSignIn.do", new KakaoSignIn()); //카카오로그인 페이지(할수있다면)

		map.put("/signUp.do", new SignUp()); // 회원 가입 페이지
		map.put("/signUpControl.do", new SignUpControl()); // 회원 가입 기능 수행
		// map.put("/kakaoSignUp.do", new KakaoSignUp()); //카카오로그인 페이지(할수있다면)

		map.put("/userInfo.do", new UserInfo()); // 정보 수정 페이지
		map.put("/userInfoControl.do", new UserInfoControl()); // 정보 수정 기능 수행
		map.put("/userDeletionControl.do", new UserDeletionControl()); // 회원 탈퇴 기능 수행
	}
}
