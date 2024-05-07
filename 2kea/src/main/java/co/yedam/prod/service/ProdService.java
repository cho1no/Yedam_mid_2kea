package co.yedam.prod.service;

import java.util.List;

import co.yedam.prod.vo.CategoryVO;
import co.yedam.prod.vo.ProdImgVO;
import co.yedam.prod.vo.ProdVO;
import co.yedam.prod.vo.ShopVO;

public interface ProdService {
	public List<ProdVO> showProdListByCase(ShopVO vo); // main 최신상품순
	public List<ProdVO> showShopList(ShopVO vo);
	
	public int cntProd(ShopVO vo); // count products
	public List<CategoryVO> cntCategory();
	public int getMaxPrice();
	
	public ProdVO showProd(int pno);
	
	public List<ProdImgVO> showProdImgList(int pno);
	
	public boolean addViewCount(int pno);
	
	// 상품 등록
	public boolean addProd(ProdVO vo);
	public boolean addProdImg(ProdImgVO vo);
}
