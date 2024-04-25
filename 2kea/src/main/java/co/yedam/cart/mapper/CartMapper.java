package co.yedam.cart.mapper;

import java.util.List;

import co.yedam.cart.vo.CartVO;

public interface CartMapper {
	//장바구니목록
	public List<CartVO> selectCart(String id);
	
	//장바구니추가
	public int insertCart(CartVO cvo);
	
	//장바구니수량변경
	public int updateCart(CartVO cvo);
	
	//장바구니삭제
	public int deleteCart(CartVO cvo);
	
}

