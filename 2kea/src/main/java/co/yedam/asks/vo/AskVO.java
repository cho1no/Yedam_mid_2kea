package co.yedam.asks.vo;

import java.util.Date;

import lombok.Data;

@Data
public class AskVO {
	private int askNo;           //문의번호
	private int prodNo;          //상품코드
	private String id;           //아이디
	private String askContent;   //문의내용
	private Date askDate;        //문의날짜
	private String askCategory;  //문의유형
	private int rc; // replyCheck 답변이 없으면 0, 있으면 1~
}
