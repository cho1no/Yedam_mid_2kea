package co.yedam.asks.mapper;

import java.util.List;

import co.yedam.asks.vo.AskPageVO;
import co.yedam.asks.vo.AskVO;

public interface AskMapper {
	public List<AskVO> selectAskList(AskPageVO askPage);
	public int insertAsk(AskVO avo);
	public int updateAsk(AskVO avo);
	public int deleteAsk(int ano);
}
