package co.yedam.memb.service;

import co.yedam.memb.vo.MemberVO;

public interface LoginService {
	public MemberVO login(MemberVO vo);
	public boolean addMember(MemberVO vo);
	public boolean removeMember(String id);
	public boolean modifyMember(MemberVO vo);


}
