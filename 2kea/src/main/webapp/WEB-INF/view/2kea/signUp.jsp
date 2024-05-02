<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">


    <!--================login_part Area =================-->
    <section class="login_part padding_top">
        <div class="container">
			<div class="d-flex row align-items-center justify-content-center" >
                <div class="col-lg-9 col-md-9">
                    <div class="login_part_form">
                        <div class="login_part_form_iner">
							<h3>Welcome to Your Account Settings!</h3>
                            <form class="row contact_form" action="" method="post" novalidate="novalidate">
							<div class="col-md-12 form-group">
                                <input type="text" class="form-control" id="mName" name="mName" value="" placeholder="User Name">
                            </div>
                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control" id="id" name="id" value="" placeholder="Id">
                                <button type="button" class="btn" id="idCheck" onclick="idCheck()" style="display: inline-block;"> Id Check</button>
                            </div>
                            <div class="col-md-12 form-group">
                                <input type="password" class="form-control" id="pw" name="pw" value="" placeholder="Password">
                            </div>
                            <div class="col-md-12 form-group">
                                <input type="email" class="form-control" id="email" name="email" value="" placeholder="Email">
                            </div>
                            <div class="col-md-12 form-group">
                                <input type="tel" class="form-control" id="phone" name="phone" value="" placeholder="Phone">
                            </div>
                            <div class="col-md-12 form-group">
                                <button type="button" value="submit" class="btn_3" onclick="signUp()">Sign Up</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================login_part end =================-->
    
    <script src="js/signService.js"></script>

   