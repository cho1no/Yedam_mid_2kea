package co.yedam.prod.vo;

import lombok.Data;

@Data
public class ProdVO {
	private int prodNo;
	private String name;
	private int price;
	private String detail;
	private String description;
	private String category;
	private int viewCount;
	private String image1;
	private int wish; // 있으면 1이상 없으면 0
}
