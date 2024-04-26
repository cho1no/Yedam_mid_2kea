package co.yedam.cart.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.cart.mapper.OrderMapper;
import co.yedam.cart.vo.OrderDetailVO;
import co.yedam.cart.vo.OrderVO;
import co.yedam.common.DataSource;

public class OrderServiceImpl implements OrderService {
	SqlSession session = DataSource.getInstance()//
			.openSession(true);

	OrderMapper mapper = session.getMapper(OrderMapper.class);

	@Override
	public List<OrderVO> orderList(OrderVO vo) {
		// TODO Auto-generated method stub
		return mapper.selectOrder(vo);
	}

	@Override
	public List<OrderDetailVO> orderDetailList() {
		// TODO Auto-generated method stub
		return mapper.selectOrderDetail();
	}

}
