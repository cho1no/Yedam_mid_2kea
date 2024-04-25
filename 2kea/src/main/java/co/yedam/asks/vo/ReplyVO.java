package co.yedam.asks.vo;

import java.util.Date;

import lombok.Data;

@Data
public class ReplyVO {
	public int askNo;            //문의번호
	public String id;            //아이디
	public String replyContent;  //답변내용
	public Date replyDate;       //답변날짜
}
