package co.yedam.asks.vo;

import java.util.Date;

import lombok.Data;

@Data
public class ReplyVO {
	private int askNo;           //문의번호
	private String id;           //아이디
	private String askResponse;  //답변내용
	private Date responseDate;   //답변날짜
}
