package co.yedam.revw.service;

import java.util.List;
import java.util.Map;

import co.yedam.revw.vo.ReviewVO;

public interface ReviewService {
	public List<ReviewVO> reviewList(ReviewVO rvo);
	public boolean addReview (ReviewVO rvo);
	public boolean removeReview (int reviewNo);
	public boolean modifyReview (ReviewVO rvo);
	
	public Map<String, Object> getReviewCount(int pno);
	public int getReviewFilteredCount(int pno);
}
