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
	public boolean removeMember(String id) {
		return mapper.deleteMember(id) == 1;
	}

	@Override
	public boolean modifyMember(MemberVO vo) {
		return mapper.updateMember(vo) == 1;
	}
	
}
