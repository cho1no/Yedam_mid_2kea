package co.yedam.prod.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.prod.mapper.ProdMapper;
import co.yedam.prod.vo.CategoryVO;
import co.yedam.prod.vo.ProdImgVO;
import co.yedam.prod.vo.ProdVO;
import co.yedam.prod.vo.ShopVO;

public class ProdServiceImpl implements ProdService {
	SqlSession session = DataSource.getInstance().openSession(true);
	ProdMapper mapper = session.getMapper(ProdMapper.class);
	
	@Override
	public List<ProdVO> showProdListByCase(ShopVO vo) {
		return mapper.selectProdListByCase(vo);
	}
	
	@Override
	public List<ProdVO> showShopList(ShopVO vo) {
		return mapper.selectShopList(vo);
	}

	@Override
	public int cntProd(ShopVO vo) {
		return mapper.countProd(vo);
	}
	@Override
	public List<CategoryVO> cntCategory() {
		return mapper.countCategory();
	}
	
	@Override
	public ProdVO showProd(int pno) {
		return mapper.selectProd(pno);
	}

	@Override
	public List<ProdImgVO> showProdImgList(int pno) {
		return mapper.selectProdImgList(pno);
	}


	
}
