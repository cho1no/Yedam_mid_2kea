package co.yedam.asks.vo;

import lombok.Data;

@Data
public class ReplyProdVO { // 문의관리페이지에 사용 
	private int prodNo;
	private String name;
	private int price;
	private String detail;
	private String description;
	private String category;
	private int viewCount;
	private String image1;
}
