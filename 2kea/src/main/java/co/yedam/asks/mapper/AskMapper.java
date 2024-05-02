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
	public List<AskVO> selectAdminAskList(AskPageVO askPage);
	public List<AskVO> replyAskList(AskPageVO askPage);
	public List<AskVO> noReplyAskList(AskPageVO askPage);
	
	//admin Ask Count
	public int adminAskCount();
	public int adminAskCountRe();
	public int adminAskCountNoRe();
}
