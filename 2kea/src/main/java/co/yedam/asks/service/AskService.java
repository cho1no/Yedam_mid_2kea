package co.yedam.asks.service;

import java.util.List;

import co.yedam.asks.vo.AskVO;

public interface AskService {
	public List<AskVO> askList(int pno);
	public boolean addAsk(AskVO avo);
	public boolean editAsk(AskVO avo);
	public boolean delAsk(int ano);
	
}
