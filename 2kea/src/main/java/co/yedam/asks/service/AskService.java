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
	public List<AskVO> adminAskList();
	public List<AskVO> adminAskListRe();
	public List<AskVO> adminAskListNoRe();
}
