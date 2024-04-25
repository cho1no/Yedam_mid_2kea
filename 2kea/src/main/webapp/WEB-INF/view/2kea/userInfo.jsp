<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>



<!--================login_part Area =================-->
<section class="login_part padding_top">
	<div class="container">
		<div class="row align-items-center">

			<div class="col-lg-9 col-md-9">
				<div class="login_part_form">
					<div class="login_part_form_iner">
						<h3>
							"Welcome to our shop! <br> Modify your information here."
						</h3>
						<form class="row contact_form" action="signInControl.do"
							method="post" novalidate="novalidate">
							<div class="col-md-12 form-group">
								<p>이름</p>
								<span class="form-control" id="mName"></span>
							</div>
							<div class="col-md-12 form-group">
								<p>ID</p>
								<span class="form-control" id="id"></span>
							</div>
							<div class="col-md-12 form-group">
								<p>PASSWORD</p>
								<span class="form-control" id="pw"></span>
							</div>
							<div class="col-md-12 form-group">
								<p>EMAIL</p>
								<span class="form-control" id="email"></span>
							</div>
							<div class="col-md-12 form-group">
								<p>PHONE</p>
								<span class="form-control" id="phone"></span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<script src="js/userInfo.js"></script>
<script>
	var id = $
	{
		session.getAttribute("id")
	}
</script>
