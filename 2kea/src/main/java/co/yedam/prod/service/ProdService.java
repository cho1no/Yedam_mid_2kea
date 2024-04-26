package co.yedam.prod.service;

import java.util.List;

import co.yedam.prod.vo.ProdImgVO;
import co.yedam.prod.vo.ProdVO;
import co.yedam.prod.vo.ShopVO;

public interface ProdService {
	public List<ProdVO> showProdListByCase(ShopVO vo); // main 최신상품순
	public List<ProdVO> showShopList(ShopVO vo);
	
	public int cntProd(ShopVO vo); // count products
	
	public ProdVO showProd(int pno);
	
	public List<ProdImgVO> showProdImgList(int pno);
}
