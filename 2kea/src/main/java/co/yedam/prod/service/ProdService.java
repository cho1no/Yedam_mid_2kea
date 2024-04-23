package co.yedam.prod.service;

import java.util.List;

import co.yedam.prod.vo.ProdImgVO;
import co.yedam.prod.vo.ProdVO;

public interface ProdService {
	public List<ProdVO> showProdList();
	
	public ProdVO showProd(int pno);
	
	public List<ProdImgVO> showProdImgList(int pno);
}
