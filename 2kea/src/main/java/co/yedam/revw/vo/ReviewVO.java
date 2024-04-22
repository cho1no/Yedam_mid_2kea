package co.yedam.revw.vo;

import java.util.Date;

import lombok.Data;

@Data
public class ReviewVO {
	private int reviewNo;
	private int prodNo;
	private String id;
	private int rating;
	private String reviewContent;
	private Date reviewDate;
}
