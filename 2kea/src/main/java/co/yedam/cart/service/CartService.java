package co.yedam.cart.service;

import java.util.List;

import co.yedam.cart.vo.CartVO;

public interface CartService {

	//장바구니목록
	public List<CartVO> cartList(String id);
	
	//장바구니추가
	public boolean addCart(CartVO cvo);
	
	//장바구니수량변경
	public boolean modifyCart(CartVO cvo);
	
	//장바구니삭제
	public boolean removeCart(CartVO cvo);

	
	
	
}
