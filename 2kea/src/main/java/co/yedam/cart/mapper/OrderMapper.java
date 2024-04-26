package co.yedam.cart.mapper;

import java.util.List;

import co.yedam.cart.vo.OrderDetailVO;
import co.yedam.cart.vo.OrderVO;

public interface OrderMapper {

	//주문내역
	public List<OrderVO> selectOrder(OrderVO vo);
	
	//주문상세
	public List<OrderDetailVO> selectOrderDetail();
	
}
