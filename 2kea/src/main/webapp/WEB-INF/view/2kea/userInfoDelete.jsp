<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<style>


</style>


<!--================login_part Area =================-->
<section class="login_part padding_top">
	<div class="container">
		<div class="row align-items-center">

			<div class="col-lg-9 col-md-9">
				<div class="login_part_form">
					<div class="login_part_form_iner">
						<h3 id="firstWord">
							"Welcome to our shop! <br> Modify your information here."
						</h3>
						<form class="row contact_form" action="signInControl.do"
							method="post" novalidate="novalidate">
							<div class="col-md-12 form-group" id="pw">
								<p>PASSWORD</p>
								<input type="text" class="form-control"  name="pw" value="" placeholder="pw" >
							</div>
							<div id="checkbox" >
							    <input type="checkbox" id="myCheckbox">
							    <label for="myCheckbox">Are you sure you want to withdraw your membership?</label>
							</div>
						</form>
						<div id="btn_drop" class="col-md-12 form-group">
							<button type="button" class="btn_3" onclick="deleteSuccess()">membership withdrawal</button>
						</div>
						<div id="btn_back" class="col-md-12 form-group">
							<button type="button" class="btn_3" onclick="goBack()">back</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<script src="js/userInfo.js"></script>
<script>
	var id = "${sessionScope.id}"
</script>
