package co.yedam.memb.service;

import co.yedam.memb.vo.MemberVO;

public interface LoginService {
	public MemberVO login(MemberVO vo);
	public boolean addMember(MemberVO vo);
	public boolean removeMember(MemberVO vo);
	public boolean modifyMember(MemberVO vo);
	public MemberVO findId(MemberVO vo);
	public MemberVO findPw(MemberVO vo);
	public MemberVO getUserInfo(String id);
	public boolean modifyPw(MemberVO vo);
	public MemberVO idCheck(String id);
}
