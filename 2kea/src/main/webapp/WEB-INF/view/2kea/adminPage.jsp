<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


		
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

.btn_3_close:hover {
	background-color: #fff;
	color: #000;
}

.btn_3:hover {
	background-color: #fff;
	color: #000;
}
.table-striped tbody tr:nth-of-type(odd) {
	background-color: #fff;
}

.blog_right_sidebar .single_sidebar_widget {
	background: #fff;
	padding: 0px;
	margin-bottom: 30px;
}

.table {
	text-align: center;
}

.pagination {
	display: inline-block;
}

.pagination a {
	color: black;
	float: left;
	padding: 8px 16px;
	text-decoration: none;
	transition: background-color .3s;
	border: 1px solid #ddd;
	margin: 0 4px;
}

.pagination a.active {
	background-color: #ff3368;
	color: white;
	border: 1px solid #ff3368;
}

.pagination a:hover {
	background-color: #ff3368;
	color: #fff;
}

.blog_left_sidebar {
    height: 626.22px; 
}
.table table-striped{
	position: fixed;
}
.replyProd_content{
	margin: 15px;
}

textarea{
	resize: none;
}


</style>


<section class="padding_top">
	<div class="container">
		<div class="row">
			<div class="col-lg-3">
				<div class="blog_right_sidebar">
					<aside class="single_sidebar_widget post_category_widget">
						<h4 class="widget_title">Ask Category</h4>
						<ul class="list cat-list" id="askCategory">
							<li>
								<a href="#" class="d-flex">
								<p>전체보기<span></span></p>
								</a>
							</li>
							<li>
								<a href="#" class="d-flex">
								<p>답변대기<span></span></p>
								</a>
							</li>
							<li>
								<a href="#" class="d-flex">
								<p>답변완료<span></span></p>
								</a>
							</li>
						</ul>
					</aside>
				</div>
			</div>
			<!-- 오른쪽 -->
			<div class="col-lg-9 mb-5 mb-lg-0">
				<div class="blog_left_sidebar">
					<table class="table table-striped">
						<thead id="th_list">
							<tr align="center">
								<th>상품번호</th>
								<th>문의번호</th>
								<th>아이디</th>
								<th>카테고리</th>
								<th>작성일시</th>
								<th>답변유무</th>
							</tr>
						</thead>
						<tbody id="tb_list">
							<%-- ask list --%>
						</tbody>
					</table>
					<nav class="blog-pagination justify-content-center d-flex">
						<div class="pagination">
							<a href="#">1</a>
							<a href="#">2</a>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- =======================답변대기 모달=========================== -->
<div class="modal fade" id="adminNoReplyModal" tabindex="-1"
	aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title fs-5" id="exampleModalLabel">문의 답변하기</h3>
			</div>
			<div class="modal-body">
				<form>
					<div class="col-md-12 mb-2 d-flex" id="replyProd" style="display: none;">
                            <img src="img/BUSUNGE 부숭에.png" style="width: 250px">
                            <div class="replyProd_content">
                                <h4>BUSUNGE 부숭에</h4>
                                <h4>169,000원</h4>
                                <p>detail</p>
                            </div>
					</div>
					
					<div class="col-md-12">
						<div class="row">
							<h4 class="col-2">회원Id</h4>
							<h4 class="col-5">문의카테고리</h4>
						</div>
						<div class="form-group">
							<textarea class="form-control" name="ask_message" rows="3"
								id="askContentNoRe" placeholder="문의내용" readonly></textarea>
						</div>
					</div>
					<div class="col-md-12">
						<textarea class="form-control" name="reply_message" rows="5" 
						id="replyContentNoRe" placeholder="답변내용을 적어주세요"></textarea>
					</div>
					<div class="col-md-12 text-right"></div>
					<input type="hidden" id="askDataNo">
					<input type="hidden" id="replyProdNo">
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn_3" id="addAdminReplyBtn"
					data-dismiss="modal" >완료</button>
				<button type="button" value="button" class="btn_3_close closeAskBtn"
					data-dismiss="modal" >취소</button>
			</div>
		</div>
	</div>
</div>

<!-- ======================답변대기 모달========================== -->
<!-- =======================답변완료 모달=========================== -->
<div class="modal fade" id="adminReplyModal" tabindex="-1"
	aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title fs-5" id="exampleModalLabel">문의 답변하기</h3>
			</div>
			<div class="modal-body">
				<form>
					<div class="col-md-12 mb-2 d-flex" id="replyProd" style="display: none;">
						<img src="img/BUSUNGE 부숭에.png" style="width: 250px">
						<div class="replyProd_content">
							<h4>BUSUNGE 부숭에</h4>
							<h4>169,000원</h4>
							<p>detail</p>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="row">
							<h4 class="col-2">회원Id</h4>
							<h4 class="col-5">문의카테고리</h4>
						</div>
						<div class="form-group">
							<textarea class="form-control" name="ask_message" rows="3"
								id="askContentRe" placeholder="문의내용" readonly></textarea>
						</div>
					</div>
					<div class="col-md-12">
						<textarea class="form-control" name="reply_message" rows="5" 
						id="replyContentRe" placeholder="답변내용을 적어주세요" readonly></textarea>
					</div>
					<div class="col-md-12 text-right"></div>
					<input type="hidden" id="askDataNo">
					<input type="hidden" id="replyProdNo">
				</form>
			</div>
			<div class="modal-footer">
			  <button type="button" value="button" class="btn_3 adminDelReplyBtn"
					data-dismiss="modal">삭제</button>
				<button type="button" class="btn_3" data-dismiss="modal">닫기</button>
			</div>
		</div>
	</div>
</div>

<!-- ======================답변완료 모달========================== -->
<script src="js/adminPageService.js"></script>
<script src="js/adminPage.js"></script>

