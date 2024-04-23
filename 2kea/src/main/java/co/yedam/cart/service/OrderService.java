package co.yedam.cart.service;

import java.util.List;

import co.yedam.cart.vo.OrderDetailVO;
import co.yedam.cart.vo.OrderVO;

public interface OrderService {
	//결제페이지
	public List<OrderVO> orderList();
		
	//주문내역
	public List<OrderDetailVO> orderDetailList();

}
