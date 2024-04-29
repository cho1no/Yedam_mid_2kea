<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<!--================login_part Area =================-->
<section class="login_part padding_top">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-8 col-md-8">
				<div class="login_part_form">
					<div class="login_part_form_iner">
						<h3>
							Welcome Back ! <br> Please Sign in now
						</h3>
						<form class="row contact_form" action="signInControl.do" method="post" novalidate="novalidate">
							<div class="col-md-12 form-group p_star">
								<input type="text" class="form-control" id="name" name="id"	value="test999" placeholder="Username">
							</div>
							<div class="col-md-12 form-group p_star">
								<input type="password" class="form-control" id="password" name="pw" value="999" placeholder="Password">
							</div>
							
							<div class="col-md-12 form-group">
								<div class="creat_account d-flex align-items-center">
									<input type="checkbox" id="f-option" name="selector">
									<label for="f-option">Remember me</label>
								</div>
								<a class="lost_pass" href="findId.do">forgot id?</a><br> <a
									class="lost_pass" href="findPassword.do">forgot password?</a>
								<button type="submit" value="submit" class="btn_3" onclick="signIn()">sign</button>
								<button type="button" class="btn_3" onclick="location.href = 'signUp.do' ">Create an Account</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    <script src="js/signService.js"></script>
<!--================login_part end =================-->

