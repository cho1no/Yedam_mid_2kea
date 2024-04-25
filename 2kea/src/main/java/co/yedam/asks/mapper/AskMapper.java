package co.yedam.asks.mapper;

import java.util.List;

import co.yedam.asks.vo.AskVO;

public interface AskMapper {
	public List<AskVO> selectAskList(int pno);
	public int insertAsk(AskVO avo);
	public int updateAsk(AskVO avo);
	public int deleteAsk(int ano);
}
