package co.yedam.asks.service;

import java.util.List;

import co.yedam.asks.vo.AskVO;

public interface AskService {
	public List<AskVO> askList();
	public boolean addAsk(AskVO avo);
	public boolean editAsk(AskVO avo);
	public boolean delAsk(int ano);
	
}
