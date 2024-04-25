<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<section class="login_part padding_top">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-8 col-md-8">
				<div class="login_part_form">
					<div class="login_part_form_iner">
						<h3>Forgot Id</h3>
						<form id="forgot_password" class="row contact_form"
							action="/forgot-password" method="post" novalidate="novalidate">
							<div class="col-md-12 form-group p_star">
								<input type="email" class="form-control" id="mName" name="mName"
									placeholder="mName" required="">
							</div>
							<div class="col-md-12 form-group p_star">
								<input type="email" class="form-control" id="email" name="email"
									placeholder="Email" required="">
							</div>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="btn_3">Send
									OTP</button>
							</div>

							<p style="color: red;"></p>

						</form>

					</div>
				</div>
			</div>
		</div>
</section>
</div>