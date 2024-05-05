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
                            <div class="col-md-9 form-group">
                                <input type="text" class="form-control" id="mName" name="mName" value="" placeholder="User Name">
                            </div>
                            <div class="col-md-9 form-group">
                                <input type="text" class="form-control" id="id" name="id" value="" placeholder="Id">
                                <button type="button" class="btn" id="idCheckk" onclick="idCheck()" > Id Check</button>
                            </div>
                            <div class="col-md-9 form-group">
                                <input type="password" class="form-control" id="pw" name="pw" value="" placeholder="Password">
                            </div>
                            <div class="col-md-9 form-group">
                                <input type="email" class="form-control" id="email" name="email" value="" placeholder="Email">
                            </div>
                            <div class="col-md-9 form-group">
                                <input type="tel" class="form-control" id="phone" name="phone" value="" placeholder="Phone">
                            </div>
                            <div id="btn_back2" class="col-md-12 form-group">
                                <button type="button" value="submit" class="btn_3" onclick="signUp()">Sign Up</button>
                                <button type="button" class="btn_3" onclick="goBack()" >back</button>
                            </div>
							<ul>
							    <li>
							        <a href="javascript:void(0)" onclick="kakaoLogin();">
							            <span>카카오 로그인</span>
							        </a>
							    </li>
							    <li>
							        <a href="javascript:void(0)" onclick="kakaoLogout();">
							            <span>카카오 로그아웃</span>
							        </a>
							    </li>
							</ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--================login_part end =================-->
<script src="js/signService.js"></script>
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
<script>
	Kakao.init('00a16e488ed5e22467911da9c160b89f'); // 발급받은 Kakao 앱 키

    // 카카오 로그인
    function kakaoLogin() {
        Kakao.Auth.login({
            success: function (response) {
                // 로그인 성공 시 사용자 정보 요청
                Kakao.API.request({
                    url: '/v2/user/me',
                    success: function (response) {
                        console.log(response);
                        // 여기서 사용자 정보를 받아와서 원하는 처리를 수행할 수 있습니다.
                    },
                    fail: function (error) {
                        console.error(error);
                    }
                });
            },
            fail: function (error) {
                console.error(error);
            }
        });
    }

    // 카카오 로그아웃
    function kakaoLogout() {
        if (Kakao.Auth.getAccessToken()) {
            Kakao.API.request({
                url: '/v1/user/unlink',
                success: function (response) {
                    console.log(response);
                },
                fail: function (error) {
                    console.error(error);
                }
            });
            Kakao.Auth.setAccessToken(undefined);
        }
    }
</script>
