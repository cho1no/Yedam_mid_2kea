package co.yedam.asks.mapper;

import java.util.List;

import co.yedam.asks.vo.AskVO;
import co.yedam.asks.vo.ReplyProdVO;
import co.yedam.asks.vo.ReplyVO;

public interface ReplyMapper {
	public List<ReplyVO> selectReplyList();
	public int insertReply(ReplyVO rvo);
	public int deleteReply(int ano);
	public ReplyVO getReply(int ano);
	
	// 문의관리페이지 
	public ReplyProdVO selectReplyProd(int pno);
	public AskVO selectReplyAsk(int ano);
}
