package co.yedam.asks.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.asks.mapper.ReplyMapper;
import co.yedam.asks.vo.AskVO;
import co.yedam.asks.vo.ReplyProdVO;
import co.yedam.asks.vo.ReplyVO;
import co.yedam.common.DataSource;

public class ReplyServiceImpl implements ReplyService{
	SqlSession session = DataSource.getInstance()
			.openSession(true);
	ReplyMapper mapper = session.getMapper(ReplyMapper.class);
	
	@Override
	public List<ReplyVO> replyList() {
		return mapper.selectReplyList();
	}

	@Override
	public boolean addReply(ReplyVO rvo) {
		return mapper.insertReply(rvo) == 1;
	}

	@Override
	public boolean delReply(int ano) {
		return mapper.deleteReply(ano) == 1;
	}

	// 문의관리페이지 
	@Override
	public ReplyProdVO adminGetProd(int pno) {
		return mapper.selectReplyProd(pno);
	}

	@Override
	public AskVO adminGetAsk(int ano) {
		return mapper.selectReplyAsk(ano);
	}

	@Override
	public ReplyVO getReply(int ano) {
		return mapper.getReply(ano);
	}
}
