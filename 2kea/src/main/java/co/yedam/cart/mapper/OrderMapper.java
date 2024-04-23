package co.yedam.cart.mapper;

import java.util.List;

import co.yedam.cart.vo.OrderDetailVO;
import co.yedam.cart.vo.OrderVO;

public interface OrderMapper {

	//결제페이지
	public List<OrderVO> selectOrder();
	
	//주문내역
	public List<OrderDetailVO> selectOrderDetail();
	
}
