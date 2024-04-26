package co.yedam.wish.service;

import java.util.List;

import co.yedam.wish.vo.WishVO;

public interface WishService {
	
	//위시목록
	public List<WishVO> wishList(String id);
	
	//위시추가
	public boolean addWish(WishVO wvo);
	
	//위시삭제
	public boolean removeWish(WishVO wvo);
	
	
	

}
