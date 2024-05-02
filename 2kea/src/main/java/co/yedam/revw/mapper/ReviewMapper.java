package co.yedam.revw.mapper;

import java.util.List;

import co.yedam.revw.vo.ReviewVO;

public interface ReviewMapper {
	public List<ReviewVO> reviewList(int pno);
	public int insertReview(ReviewVO rvo);
	public int deleteReview(int reviewNo);
	public int updateReview(ReviewVO rvo);
	
	public int selectReviewCount (int pno);
	public int selectReviewFilteredCount (int pno);
}
