<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<!-- HTML 코드 -->

<section class="login_part padding_top">
    <div class="container">
        <div class="d-flex row align-items-center justify-content-center" >
            <div class="col-lg-9 col-md-9">
                <div class="login_part_form">
                    <div class="login_part_form_iner">
                        <h3 id="firstWord">
                            "Welcome to our shop! <br> Modify your information here."
                        </h3>
                        <form class="row contact_form" action="updateUserInfo.do" method="post" novalidate="novalidate">
                            <div class="col-md-9 form-group" >
                                <p>USER</p>
                                <input type="text" class="form-control" id="mName" name="mName" value="" placeholder="User Name">
                                <span id="mNameError" class="text-danger"></span> <!-- 에러 표시 창 -->
                            </div>
                            <div class="col-md-9 form-group" >
                                <p>ID</p>
                                <input type="text" class="form-control"  id="id" name="id" value="" placeholder="id" readonly>
							    <span id="idError" class="text-danger"></span> <!-- 에러 표시 창 -->
                            </div>
                            <div class="col-md-9 form-group" >
                                <p>PASSWORD</p>
                                <input type="password" class="form-control" id="pw" name="pw" placeholder="New Password">
                                <span id="pwError" class="text-danger"></span> <!-- 에러 표시 창 -->
                            </div>
                            <div class="col-md-9 form-group" >
                                <p>EMAIL</p>
                                <input type="text" class="form-control" id="email" name="email" value="" placeholder="email">
                                <span id="emailError" class="text-danger"></span> <!-- 에러 표시 창 -->
                            </div>
                            <div class="col-md-9 form-group" >
                                <p>PHONE</p>
                                <input type="text" class="form-control" id="phone" name="phone" value="" placeholder="phone">
                                <span id="phoneError" class="text-danger"></span> <!-- 에러 표시 창 -->
                            </div>
                        </form>
                        <div id="btn_edit" class="col-md-12 form-group">
                            <button type="submit" class="btn_3" onclick="editSuccess()">Save Changes</button>
                        </div>
                        <div id="btn_back" class="col-md-12 form-group">
                            <button type="button" class="btn_3" onclick="goBack()">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script>
	var id = "${sessionScope.id}"
</script>

<script src="js/userInfo.js"></script>
<script src="js/editCheck.js"></script>
