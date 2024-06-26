package co.yedam.memb.mapper;

import co.yedam.memb.vo.MemberVO;

public interface SignMapper {
	public MemberVO selectMember(MemberVO vo);
	public int insertMember(MemberVO vo);
	public int deleteMember(MemberVO vo);
	public int updateMember(MemberVO vo);
	public MemberVO	findId(MemberVO vo);
	public MemberVO findPw(MemberVO vo);
	public MemberVO selectUserInfo(String id);
	public int updatePw(MemberVO vo);
	public MemberVO selectId(String id);
}
