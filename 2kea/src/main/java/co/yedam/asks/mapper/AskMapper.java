package co.yedam.asks.mapper;

import java.util.List;

import co.yedam.asks.vo.AskPageVO;
import co.yedam.asks.vo.AskVO;

public interface AskMapper {
	public List<AskVO> selectAskList(AskPageVO askPage);
	public int insertAsk(AskVO avo);
	public int deleteAsk(int ano);
	
	//Count
	public int AskCount(int pno);
	
	//admin
	public List<AskVO> selectAdminAskList();
	public List<AskVO> replyAskList();
	public List<AskVO> noReplyAskList();
}
