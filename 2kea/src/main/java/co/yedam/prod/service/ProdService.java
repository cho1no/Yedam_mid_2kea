package co.yedam.prod.service;

import java.util.List;

import co.yedam.prod.vo.MainShowCaseVO;
import co.yedam.prod.vo.ProdImgVO;
import co.yedam.prod.vo.ProdVO;

public interface ProdService {
	public List<ProdVO> showProdListByCase(MainShowCaseVO vo); // main 최신상품순
	
	public ProdVO showProd(int pno);
	
	public List<ProdImgVO> showProdImgList(int pno);
}
