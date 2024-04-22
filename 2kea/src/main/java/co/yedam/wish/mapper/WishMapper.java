package co.yedam.wish.mapper;

import java.util.List;

import co.yedam.wish.vo.WishVO;

public interface WishMapper {

	//위시목록
	public List<WishVO> selectWish();
	
	//위시추가
	public int insertWish(WishVO wvo);

	//위시삭제
	public int deleteWish(WishVO wvo);
	
}	
