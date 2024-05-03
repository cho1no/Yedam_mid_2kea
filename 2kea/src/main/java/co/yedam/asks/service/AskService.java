package co.yedam.asks.service;

import java.util.List;

import co.yedam.asks.vo.AskPageVO;
import co.yedam.asks.vo.AskVO;

public interface AskService {
	public List<AskVO> askList(AskPageVO askPage);
	public boolean addAsk(AskVO avo);
	public boolean delAsk(int ano);
	
	//count
	public int getAskCount(int pno);
	
	//admin
	public List<AskVO> adminAskList(AskPageVO askPage);
	public List<AskVO> adminAskListRe(AskPageVO askPage);
	public List<AskVO> adminAskListNoRe(AskPageVO askPage);
	
	//admin Ask Count
	public int getAdminAskCount();
	public int getAdminAskCountRe();
	public int getAdminAskCountNoRe();
}
