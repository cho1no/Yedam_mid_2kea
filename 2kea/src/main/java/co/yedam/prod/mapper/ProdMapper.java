package co.yedam.prod.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import co.yedam.prod.vo.ProdImgVO;
import co.yedam.prod.vo.ProdVO;
import co.yedam.prod.vo.ShopVO;

@Mapper
public interface ProdMapper {
	// 상품 리스트
	public List<ProdVO> selectProdListByCase(ShopVO vo);
	public List<ProdVO> selectShopList(ShopVO vo);
	
	public int countProd(ShopVO vo);
	
	// 상품 단건 상세
	public ProdVO selectProd(int pno);
	
	// 상품 상세 이미지
	public List<ProdImgVO> selectProdImgList(int pno);
	
	
}
