package co.yedam.prod.vo;

import lombok.Data;

@Data
public class ShopVO {
	// Search
	private String showCase;
	private int showNum;
	private String searchWord;
	private int startPrice;
	private int endPrice;
	
	// Page
	private int page;
}
