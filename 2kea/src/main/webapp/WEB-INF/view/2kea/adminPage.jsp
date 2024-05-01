<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<style>
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
.blog_area a {
    color: #212529 !important;
}
</style>


<section class="blog_area padding_top">
	<div class="container">
		<div class="row">
			<div class="col-lg-3">
				<div class="blog_right_sidebar">
					<aside class="single_sidebar_widget post_category_widget">
						<h4 class="widget_title">Ask Category</h4>
						<ul class="list cat-list" id="askCategory">
							<li><a href="#" class="d-flex">
									<p>전체보기</p>
							</a></li>
							<li><a href="#" class="d-flex">
									<p>답변대기</p>
							</a></li>
							<li><a href="#" class="d-flex">
									<p>답변완료</p>
							</a></li>
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
							</tr>
						</thead>
						<tbody id="tb_list">
							<%-- 					<c:forEach var="vo" items="${blist}">
								<tr>
									<td align="center"><a
										href="getboard.do?bno=${vo.boardNo}&page=${paging.page}
										&searchCondition=${searchCondition}&keyword=${keyword}">${vo.boardNo}</a>
									</td>
									<td><c:out value="${vo.title}" /></td>
									<td><c:out value="${vo.writer}" /></td>
									<td><c:out value="${vo.createDate}" /></td>
								</tr>
							</c:forEach> --%>
						</tbody>
					</table>
					<nav class="blog-pagination justify-content-center d-flex">
						<ul class="pagination">
							<li class="page-item"><a href="#" class="page-link"
								aria-label="Previous"> <i class="ti-angle-left"></i>
							</a></li>
							<li class="page-item"><a href="#" class="page-link">1</a></li>
							<li class="page-item active"><a href="#" class="page-link">2</a>
							</li>
							<li class="page-item"><a href="#" class="page-link"
								aria-label="Next"> <i class="ti-angle-right"></i>
							</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</section>
<script src="js/adminPageService.js"></script>
<script src="js/adminPage.js"></script>

