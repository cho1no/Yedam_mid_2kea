<%-- <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> --%>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    
<style>
.btn_3_close {
	display: inline-block;
	padding: 9px 39px;
	border-radius: 50px;
	background-color: #ff3368;
	border: 1px solid #ecfdff;
	font-size: 15px;
	font-weight: 700;
	color: #fff;
	text-transform: uppercase;
	font-weight: 400;
	box-shadow: -1.717px 8.835px 29.76px 2.24px rgba(255, 51, 104, 0.18);
	border: 1px solid #ff3368;
	-webkit-transition: 0.5s;
	transition: 0.5s;
}

.btn_ask {
	border: 1px solid #e0e0e0;
	padding: 2px 25px;
	display: inline-block;
	line-height: 32px;
	border-radius: 50px;
	font-size: 14px;
	font-family: "Poppins", sans-serif;
	color: #2a2a2a;
}

.delAskBtn{
	border: 1px solid #fff;
	padding: 10px 10px 10px 10px;
	display: inline-block;
	line-height: 3px;
	border-radius: 20px;
	font-size: 11px;
	font-family: "Poppins", sans-serif;
	color: #2a2a2a;
}

.editAskBtn{
	border: 1px solid #e0e0e0;
	padding: 1px 10px;
	display: inline-block;
	line-height: 20px;
	border-radius: 35px;
	font-size: 10px;
	font-family: "Poppins", sans-serif;
	color: #2a2a2a;
}
.btn_ask:hover {
	background: #ff3368;
	border-color: #ff3368;
	color: #fff;
}


</style>

<%-- <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"> --%>
<div class="row mb-3">
    <div class="col-11">
        <h3>QnA</h3>
    </div>
    <div class="col-1">
        <a class="btn_ask" data-bs-toggle="modal" data-bs-target="#AskModal" data-bs-whatever="@mdo">Ask</a>
    </div>
    </div>
    <div class="comment_list" >
    <div class="review_item" id="asklist" style="" data-no="0">
        <div class="media">
        <div class="media-body">
            <div class="row">
            <div class="col-1">
                <h4>user1</h4>
            </div>
            <div class="col-1">	
                <p class="delAskBtn">X</p>
            </div>
                        </div>
            <h5>문의</h5>
                        <h5>날짜</h5>
            <a class="reply_btn" href="#">Reply</a>
        </div>
        </div>
        <p>oo</p>
    </div>
    <div class="review_item reply" id="replyist" style="display: none;">
        <div class="media">
        <div class="media-body">
            <h4>Blake Ruiz</h4>
            <h5>12th Feb, 2017 at 05:56 pm</h5>
            <a class="reply_btn" href="#">Reply</a>
        </div>
        </div>
        <p>ㅇㅇ</p>
    </div>
</div><!-- end of comment_list -->
<%-- </div> <!--==========================문의하기 끝========================= --> --%>