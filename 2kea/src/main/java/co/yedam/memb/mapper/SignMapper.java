package co.yedam.memb.mapper;

import co.yedam.memb.vo.MemberVO;

public interface SignMapper {
	public MemberVO selectMember(MemberVO vo);
	public int insertMember(MemberVO vo);
	public int deleteMember(String id);
	public int  updateMember(MemberVO vo);
}
