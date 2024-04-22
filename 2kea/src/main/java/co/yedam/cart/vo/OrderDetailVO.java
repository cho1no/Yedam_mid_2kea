package co.yedam.cart.vo;

import lombok.Data;

@Data
public class OrderDetailVO {
	private int OrderNo;
	private int prodNo;
	private int qty;
	private String orderStatus;
}
