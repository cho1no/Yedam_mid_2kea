package co.yedam.prod.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.prod.mapper.ProdMapper;
import co.yedam.prod.vo.ProdVO;

public class ProdServiceImpl implements ProdService {
	SqlSession session = DataSource.getInstance().openSession(true);
	ProdMapper mapper = session.getMapper(ProdMapper.class);
	
	@Override
	public List<ProdVO> showProdList() {
		return mapper.selectProdList();
	}

}