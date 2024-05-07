package co.yedam.cart.service;

import java.util.List;

import co.yedam.cart.vo.OrderDetailVO;
import co.yedam.cart.vo.OrderVO;

public interface OrderService {
	//결제내역페이지
	public List<OrderVO> orderList(OrderVO vo);
		
	//주문내역
	public List<OrderDetailVO> orderDetailList();

}
