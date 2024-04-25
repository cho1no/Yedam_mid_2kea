package co.yedam.asks.mapper;

import java.util.List;

import co.yedam.asks.vo.ReplyVO;

public interface ReplyMapper {
	public List<ReplyVO> selectReplyList();
	public int insertReply(ReplyVO rvo);
	public int updateReply(ReplyVO rvo);
	public int deleteReply(int ano);
}
