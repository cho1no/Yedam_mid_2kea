package co.yedam.wish.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.wish.mapper.WishMapper;
import co.yedam.wish.vo.WishVO;

public class WishServiceImpl implements WishService {
	SqlSession session = DataSource.getInstance()//
			.openSession(true);
	
	WishMapper mapper = session.getMapper(WishMapper.class);

	@Override
	public List<WishVO> wishList() {
		// TODO Auto-generated method stub
		return mapper.selectWish();
	}

	@Override
	public boolean addWish(WishVO wvo) {
		// TODO Auto-generated method stub
		return mapper.insertWish(wvo) == 1;
	}

	@Override
	public boolean removeWish(WishVO wvo) {
		// TODO Auto-generated method stub
		return mapper.deleteWish(wvo) == 1;
	}
	
	

	
	
}
