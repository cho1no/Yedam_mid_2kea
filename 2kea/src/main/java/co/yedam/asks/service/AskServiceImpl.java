package co.yedam.asks.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.asks.mapper.AskMapper;
import co.yedam.asks.vo.AskPageVO;
import co.yedam.asks.vo.AskVO;
import co.yedam.common.DataSource;

public class AskServiceImpl implements AskService{
	SqlSession session = DataSource.getInstance()
			.openSession(true);
	AskMapper mapper = session.getMapper(AskMapper.class);
	
	@Override
	public List<AskVO> askList(AskPageVO askPage) {
		return mapper.selectAskList(askPage);
	}
	
	@Override
	public boolean addAsk(AskVO avo) {
		return mapper.insertAsk(avo) == 1;
	}
	
	@Override
	public boolean delAsk(int ano) {
		return mapper.deleteAsk(ano) == 1;
	}

	@Override
	public int getAskCount(int pno) {
		return mapper.AskCount(pno);
	}

	@Override
	public List<AskVO> adminAskList(AskPageVO askPage) {
		return mapper.selectAdminAskList(askPage);
	}

	@Override
	public List<AskVO> adminAskListRe(AskPageVO askPage) {
		return mapper.replyAskList(askPage);
	}

	@Override
	public List<AskVO> adminAskListNoRe(AskPageVO askPage) {
		return mapper.noReplyAskList(askPage);
	}

	@Override
	public int getAdminAskCount() {
		return mapper.adminAskCount();
	}

	@Override
	public int getAdminAskCountRe() {
		return mapper.adminAskCountRe();
	}

	@Override
	public int getAdminAskCountNoRe() {
		return mapper.adminAskCountNoRe();
	}

	
	
}
