package co.yedam.asks.service;

import java.util.List;

import co.yedam.asks.vo.ReplyVO;

public interface ReplyService {
	public List<ReplyVO> replyList();
	public boolean addReply(ReplyVO rvo);
	public boolean editReply(ReplyVO rvo);
	public boolean delReply(int ano);
}
