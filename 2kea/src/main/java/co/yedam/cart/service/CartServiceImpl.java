package co.yedam.cart.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.cart.mapper.CartMapper;
import co.yedam.cart.vo.CartVO;
import co.yedam.cart.vo.OrderDetailVO;
import co.yedam.cart.vo.OrderVO;
import co.yedam.common.DataSource;

public class CartServiceImpl implements CartService {
	SqlSession session = DataSource.getInstance()//
			.openSession(true);

	CartMapper mapper = session.getMapper(CartMapper.class);

	@Override
	public List<CartVO> cartList() {
		// TODO Auto-generated method stub
		return mapper.selectCart();
	}

	@Override
	public boolean addCart(CartVO cvo) {
		// TODO Auto-generated method stub
		return mapper.insertCart(cvo) == 1;
	}

	@Override
	public boolean modifyCart(CartVO cvo) {
		// TODO Auto-generated method stub
		return mapper.updateCart(cvo) == 1;
	}

	@Override
	public boolean removeCart(CartVO cvo) {
		// TODO Auto-generated method stub
		return mapper.deleteCart(cvo) == 1;
	}

	

}
