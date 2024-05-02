package co.yedam.memb.service;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.memb.mapper.SignMapper;
import co.yedam.memb.vo.MemberVO;

public class LoginServiceImpl implements LoginService{
	
	SqlSession session = DataSource.getInstance().openSession(true);
	SignMapper mapper = session.getMapper(SignMapper.class);
	
	@Override
	public MemberVO login(MemberVO vo) {
		return mapper.selectMember(vo);
	}

	@Override
	public boolean addMember(MemberVO vo) {
		return mapper.insertMember(vo) == 1;
	}

	@Override
	public boolean removeMember(MemberVO vo) {
		return mapper.deleteMember(vo) == 1;
	}

	@Override
	public boolean modifyMember(MemberVO vo) {
		return mapper.updateMember(vo) == 1;
	}

	@Override
	public MemberVO findId(MemberVO vo) {
		return mapper.findId(vo);
	}

	@Override
	public MemberVO findPw(MemberVO vo) {
		return mapper.findPw(vo);
	}

	@Override
	public MemberVO getUserInfo(String id) {
		return mapper.selectUserInfo(id);
	}

	@Override
	public boolean modifyPw(MemberVO vo) {
		return mapper.updatePw(vo) == 1;
	}

	@Override
	public MemberVO idCheck(String id) {
		return mapper.selectId(id);
	}
	
}
