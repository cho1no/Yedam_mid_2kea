package co.yedam.revw.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.revw.mapper.ReviewMapper;
import co.yedam.revw.vo.ReviewVO;

public class ReviewServiceImpl implements ReviewService {
	SqlSession session = DataSource.getInstance().openSession(true);
	ReviewMapper mapper = session.getMapper(ReviewMapper.class);

	@Override
	public List<ReviewVO> reviewList() {
		return mapper.reviewList();
	}

	@Override
	public boolean addReview(ReviewVO rvo) {
		return mapper.insertReview(rvo) == 1;
	}

	@Override
	public boolean removeReview(int reviewNo) {
		return mapper.deleteReview(reviewNo) == 1;
	}

	@Override
	public boolean modifyReview(ReviewVO rvo) {
		return mapper.updateReview(rvo) == 1;
	}

}
