package co.yedam.asks.service;

import java.util.List;

import co.yedam.asks.vo.AskVO;
import co.yedam.asks.vo.ReplyProdVO;
import co.yedam.asks.vo.ReplyVO;

public interface ReplyService {
	public List<ReplyVO> replyList();
	public boolean addReply(ReplyVO rvo);
	public boolean delReply(int ano);
	public ReplyVO getReply(int ano);
	
	// 문의관리페이지 
	public ReplyProdVO adminGetProd(int pno); //상품 1개
	public AskVO adminGetAsk(int ano);		   //문의 1개
}
