<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.10/dist/sweetalert2.min.css">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.10/dist/sweetalert2.min.js"></script>

<section class="login_part padding_top">
	<div class="container">
		<div class="d-flex row align-items-center justify-content-center" >
			<div class="col-lg-8 col-md-8">
				<div class="login_part_form">
					<div class="login_part_form_iner">
						<h3>Forgot Password</h3>
						<form id="forgot_password" class="row contact_form"
							action="" method="post" novalidate="novalidate">
							<div class="col-md-9 form-group p_star">
								<p id="idP">ID</p>
								<input type="text" class="form-control" id="id" name="id"
									placeholder="Id" required="">
							</div>
							<div class="col-md-9 form-group p_star">
								<p id="mNameP">USER</p>
								<input type="text" class="form-control" id="mName" name="mName"
									placeholder="UserName" required="">
							</div>
							<div class="col-md-9 form-group p_star">
								<p id="phoneP">PHONE</p>
								<input type="tel" class="form-control" id="phone" name="phone"
									placeholder="Phone" required="">
							</div>
							<div class="col-md-9 form-group p_star">
								<p id="pwP" style="display :none;">PASSWORD</p>
								<input type="password" class="form-control" id="pw" name="pw"
									placeholder="Password" required="" style="display : none;">
							</div>
							
							<div id="btn_back1" class="col-md-12 form-group">
								<button type="button" value="submit" id="btnFind"class="btn_3" onclick="findPw()">Send</button>
								<button type="button" class="btn_3" onclick="goBack()">back</button>
								
							</div>
							<div id="btn_back2" class="col-md-12 form-group" style="display: none;">
								<button type="button" value="submit" id="btnUpdate" class="btn_3" onclick="updatePw()">Update</button>
								<button type="button" class="btn_3" onclick="goBack()" >back</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    <script src="js/signService.js"></script>
