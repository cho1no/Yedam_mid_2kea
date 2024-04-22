package co.yedam.asks.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.asks.mapper.AskMapper;
import co.yedam.asks.vo.AskVO;
import co.yedam.common.DataSource;

public class AskServiceImpl implements AskService{
	SqlSession session = DataSource.getInstance()
			.openSession(true);
	AskMapper mapper = session.getMapper(AskMapper.class);
	
	@Override
	public List<AskVO> askList() {
		return mapper.selectAskList();
	}
	
	@Override
	public boolean addAsk(AskVO avo) {
		return mapper.insertAsk(avo) == 1;
	}
	
	@Override
	public boolean editAsk(AskVO avo) {
		return mapper.updateAsk(avo) == 1;
	}
	
	@Override
	public boolean delAsk(int ano) {
		return mapper.deleteAsk(ano) == 1;
	}
}
