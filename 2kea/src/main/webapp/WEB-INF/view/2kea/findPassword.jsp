<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<section class="login_part padding_top">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-8 col-md-8">
				<div class="login_part_form">
					<div class="login_part_form_iner">
						<h3>Forgot Password</h3>
						<form id="forgot_password" class="row contact_form"
							action="" method="post" novalidate="novalidate">
							<div class="col-md-12 form-group p_star">
								<input type="text" class="form-control" id="id" name="id"
									placeholder="Id" required="">
							</div>
							<div class="col-md-12 form-group p_star">
								<input type="text" class="form-control" id="mName" name="mName"
									placeholder="mName" required="">
							</div>
							<div class="col-md-12 form-group p_star">
								<input type="tel" class="form-control" id="phone" name="phone"
									placeholder="Phone" required="">
							</div>
							<div class="col-md-12 form-group">
								<button type="button" value="submit" class="btn_3" onclick="findPw()">Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    <script src="js/signService.js"></script>
