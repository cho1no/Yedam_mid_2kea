package co.yedam.prod.vo;

import lombok.Data;

@Data
public class ShopVO {
	// Search
	private String showCase;
	private int showNum; // for main
	private String searchWord;
	private String category;
	private int startPrice;
	private int endPrice;
	private String id;
	
	// Page
	private int page;
}
