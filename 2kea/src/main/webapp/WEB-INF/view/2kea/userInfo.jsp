<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<!-- HTML 코드 -->

<section class="login_part padding_top">
    <div class="container" >
        <div class="d-flex row align-items-center justify-content-center"  >
            <div class="col-lg-9 col-md-9" >
                <div class="login_part_form" >
                    <div class="login_part_form_iner" >
                        <h3 id="firstWord">
                            "Welcome to our shop! <br> Modify your information here."
                        </h3>
                        <form class="row contact_form" action="updateUserInfo.do" method="post" novalidate="novalidate">
                            <div class="col-md-9 form-group" >
                                <p>USER</p>
                                <input type="text" class="form-control" id="mName" name="mName" value="${userInfo.mName}" placeholder="User Name" readonly>
                            </div>
                            <div class="col-md-9 form-group" >
                                <p>ID</p>
                                <input type="text" class="form-control" id="id" name="id" value="${userInfo.id}" placeholder="id" readonly>
                            </div>
                            <div class="col-md-9 form-group" >
                                <p>EMAIL</p>
                                <input type="text" class="form-control" id="email" name="email" value="${userInfo.email}" placeholder="email" readonly>
                            </div>
                            <div class="col-md-9 form-group" >
                                <p>PHONE</p>
                                <input type="text" class="form-control" id="phone"  name="phone" value="${userInfo.phone}" placeholder="phone" readonly>
                            </div>
                        </form>
                        <div id="btn_edit" class="col-md-12 form-group">
							<a href="userInfoEdit.do" class="btn_3" style="text-align: center;">Edit Information</a>
                        </div>
                        <div id="btn_delete" class="col-md-12 form-group">
							<a href="userInfoDelete.do" class="btn_3" style="text-align: center;">Delete Account</a>
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
<script src="js/inputCheck.js"></script>
