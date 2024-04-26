<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>



    <!--================login_part Area =================-->
    <section class="login_part padding_top">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-lg-9 col-md-9">
                    <div class="login_part_form">
                        <div class="login_part_form_iner">
							<h3>Welcome to Our Shop! <br>
							    Create an Account</h3>
                            <form class="row contact_form" action="signInControl.do" method="post" novalidate="novalidate">
							<div class="col-md-12 form-group">
								<p>이름</p>
                                <input type="text" class="form-control" id="mName" name="mName" value="" placeholder="User Name">
                                <span class="error" id="username_error"></span>
                            </div>
                            <div class="col-md-12 form-group">
                            	<p>ID</p>
                                <input type="text" class="form-control" id="id" name="id" value="" placeholder="Id">
                                <span class="error" id="id_error"></span>
                            </div>
                            <div class="col-md-12 form-group">
                            	<p>PASSWORD</p>
                                <input type="password" class="form-control" id="pw" value="" placeholder="Password">
                                <span class="error" id="password_error"></span>
                            </div>
                            <div class="col-md-12 form-group">
                            	<p>EMAIL</p>
                                <input type="email" class="form-control" id="email" name="email" value="" placeholder="Email">
                                <span class="error" id="email_error"></span>
                            </div>
                            <div class="col-md-12 form-group">
                            	<p>PHONE</p>
                                <input type="tel" class="form-control" id="phone" name="phone" value="" placeholder="Phone">
                                <span class="error" id="tel_error"></span>
                            </div>
                                <input type="checkBox" class="form-control" id="phone" name="phone" value="" placeholder="Phone">
                            <div class="col-md-12 form-group">
                                <button type="submit" value="submit" class="btn_3">Sign Up</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="js/userInfoEdit.js"></script>
<script>
	var id = $
	{
		session.getAttribute("id")
	}
</script>