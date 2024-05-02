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
</style>


<section class="blog_area padding_top">
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
<script src="js/adminPageService.js"></script>
<script src="js/adminPage.js"></script>

