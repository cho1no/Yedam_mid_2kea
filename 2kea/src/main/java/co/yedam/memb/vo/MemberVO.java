package co.yedam.memb.vo;

import java.util.Date;

import lombok.Data;

@Data
public class MemberVO {
	private String id;
	private String pw;
	private String mName;
	private String email;
	private String phone;
	private Date regidate;
	private String authority;
	
}
