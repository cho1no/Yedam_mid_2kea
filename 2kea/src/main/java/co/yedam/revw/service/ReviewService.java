package co.yedam.revw.service;

import java.util.List;

import co.yedam.revw.vo.ReviewVO;

public interface ReviewService {
	public List<ReviewVO> reviewList(int pno);
	public boolean addReview (ReviewVO rvo);
	public boolean removeReview (int reviewNo);
	public boolean modifyReview (ReviewVO rvo);
	
	public int getReviewCount(int pno);
	public int getReviewFilteredCount(int pno);
}
