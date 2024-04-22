package co.yedam.revw.mapper;

import java.util.List;

import co.yedam.revw.vo.ReviewVO;

public interface ReviewMapper {
	public List<ReviewVO> reviewList();
	public int insertReview(ReviewVO rvo);
}
