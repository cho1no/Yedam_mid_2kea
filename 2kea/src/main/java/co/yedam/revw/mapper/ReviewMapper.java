package co.yedam.revw.mapper;

import java.util.List;
import java.util.Map;

import co.yedam.revw.vo.ReviewVO;

public interface ReviewMapper {
	public List<ReviewVO> reviewList(ReviewVO rvo);
	public int insertReview(ReviewVO rvo);
	public int deleteReview(int reviewNo);
	public int updateReview(ReviewVO rvo);
	
	public Map<String, Object> selectReviewCount (int pno);
	public int selectReviewFilteredCount(int pno);
}
