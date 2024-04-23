package co.yedam.memb.service;

import co.yedam.memb.vo.MemberVO;

public interface LoginService {
	public MemberVO login(MemberVO vo);
	public boolean addMember(MemberVO vo);
	public boolean removeMember(String id);
	public boolean modifyMember(MemberVO vo);
	public MemberVO findId(MemberVO vo);
	public MemberVO findPw(MemberVO vo);


}
