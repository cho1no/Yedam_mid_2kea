package co.yedam.memb.mapper;

import co.yedam.memb.vo.MemberVO;

public interface SignMapper {
	public MemberVO selectMember(MemberVO vo);
	public boolean insertMember();
	public int deleteMember(int id);
	
}
