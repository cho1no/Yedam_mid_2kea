package co.yedam.revw.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.revw.mapper.ReviewMapper;
import co.yedam.revw.vo.ReviewCountVO;
import co.yedam.revw.vo.ReviewVO;

public class ReviewServiceImpl implements ReviewService {
	SqlSession session = DataSource.getInstance().openSession(true);
	ReviewMapper mapper = session.getMapper(ReviewMapper.class);

	@Override
	public List<ReviewVO> reviewList(ReviewVO rvo) {
		return mapper.reviewList(rvo);
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

	@Override
	public Map<String, Object> getReviewCount(int pno) {
		return mapper.selectReviewCount(pno);
	}

	@Override
	public int getReviewFilteredCount(int pno) {
		return mapper.selectReviewFilteredCount(pno);
	}

}
