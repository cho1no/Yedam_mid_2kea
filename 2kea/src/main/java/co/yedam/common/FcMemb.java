package co.yedam.common;

import java.util.Map;

import co.yedam.memb.control.FindId;
import co.yedam.memb.control.FindIdControl;
import co.yedam.memb.control.FindPassword;
import co.yedam.memb.control.FindPasswordControl;
import co.yedam.memb.control.SignIn;
import co.yedam.memb.control.SignInControl;
import co.yedam.memb.control.SignOutControl;
import co.yedam.memb.control.SignUp;
import co.yedam.memb.control.SignUpControl;
import co.yedam.memb.control.UserDeletionControl;
import co.yedam.memb.control.UserInfo;
import co.yedam.memb.control.UserInfoControl;
import co.yedam.memb.control.UserInfoEditControl;

public class FcMemb {
	static void init(Map<String, Control> map) {
		// member
		map.put("/signIn.do", new SignIn()); // 로그인 페이지
		map.put("/signInControl.do", new SignInControl()); // 로그인 기능 수행
		map.put("/findId.do", new FindId()); // 로그인 기능 수행
		map.put("/findIdControl.do", new FindIdControl()); // 아이디 찾기 기능 수행
		map.put("/findPassword.do", new FindPassword()); // 비밀번호 찾기 기능 수행
		map.put("/findPasswordControl.do", new FindPasswordControl()); // 비밀번호 찾기 기능 수행
		map.put("/signOutControl.do", new SignOutControl());
		
		map.put("/signUp.do", new SignUp()); // 회원 가입 페이지
		map.put("/signUpControl.do", new SignUpControl()); // 회원 가입 기능 수행

		map.put("/userInfo.do", new UserInfo()); // 마이 페이지
		map.put("/userInfoControl.do", new UserInfoControl()); // 마이 페이지 정보 가져오기.
	
		//map.put("/userInfoEdit.do", new UserInfoEdit()); // 정보 수정 페이지.
		map.put("/userInfoEditControl.do", new UserInfoEditControl()); // 정보 수정 기능 수행
		
		map.put("/userDeletionControl.do", new UserDeletionControl()); // 회원 탈퇴 기능 수행
	}
}
