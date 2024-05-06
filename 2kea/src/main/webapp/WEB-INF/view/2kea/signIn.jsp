<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<!--================login_part Area =================-->
<section class="login_part padding_top">
	<div class="container">
		<div class="d-flex row align-items-center justify-content-center">
			<div class="col-lg- col-md-7">
				<div class="login_part_form">
					<div class="login_part_form_iner">
						<h3>
							Welcome Back ! <br> Please Sign in now
						</h3>
						<form class="row contact_form" action="signInControl.do"
							method="post" novalidate="novalidate">
							<div class="col-md-12 form-group p_star">
								<p>ID</p>
								<input type="text" class="form-control" id="name" name="id"
									value="test999" placeholder="Username">
							</div>
							<div class="col-md-12 form-group p_star">
								<p>PASSWORD</p>
								<input type="password" class="form-control" id="password"
									name="pw" value="999" placeholder="Password">
							</div>

							<div class="col-md-12 form-group">
								<div class="creat_account d-flex align-items-center">
									<!-- 									<input type="checkbox" id="f-option" name="selector"> -->
									<!-- 									<label for="f-option">Remember me</label> -->
								</div>
								<a class="lost_pass" href="findId.do">forgot id?</a><br> <a
									class="lost_pass" href="findPassword.do">forgot password?</a>
								<button type="submit" value="submit" class="btn_3"
									onclick="signIn()">sign</button>
								<button type="button" class="btn_3"
									onclick="location.href = 'signUp.do' ">Create an
									Account</button>
<!-- 								<a id="kakao-login-btn"> <img
									src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
									width="222" alt="카카오 로그인 버튼" />
								</a> -->
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
<!-- <script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>

<script>
let data;
//카카오 초기화
Kakao.init('00a16e488ed5e22467911da9c160b89f');
console.log( Kakao.isInitialized() ); // 초기화 판단여부
        // REST API 키
        const REST_API_KEY = 'dd2afa46d0d50958c1ff5dafcf3085c0';
        // Redirect URI
        const REDIRECT_URI = 'http://localhost:8080/2kea';

        // Kakao SDK 초기화

        // 카카오 로그인 버튼 클릭 시 이벤트 처리
        document.getElementById('kakao-login-btn').addEventListener('click', function() {
            Kakao.Auth.login({
                redirectUri: 'http://localhost:8080/2kea',
                success: function(authObj) {
                    console.log(authObj); // 인증 성공 시 처리할 내용
                    success(authObj);
                },
                fail: function(err) {
                    console.error(err); // 인증 실패 시 처리할 내용
                }
            });
        });
        
        
        
        function success(authObj) {
            // 카카오에서 제공하는 사용자 정보 요청 API 호출
            Kakao.API.request({
                url: 'http://localhost:8080/2kea/signIn.do',
                success: function(response) {
					console.log(response);
		            var kakaoId = response.id; // 카카오 사용자 고유 ID
		            var kakaoNickname = response.properties.nickname; // 카카오 닉네임
		            var kakaoEmail = response.kakao_account.email; // 카카오 이메일
                    // 서버로 카카오 사용자 정보 전송
                    $.ajax({
                        url: '/login/kakao', // 서버의 로그인 처리 API 엔드포인트
                        method: 'POST',
                        data: {
                            id: kakaoId,
                            mName: kakaoNickname,
                            email: kakaoEmail
                        },
                        success: function(response) {
                            // 서버에서 로그인 처리 후의 응답 처리
                            console.log(response);
                        },
                        error: function(xhr, status, error) {
                            // 오류 발생 시 처리
                            console.error(error);
                        }
                    });
                },
                fail: function(error) {
                    // 사용자 정보 요청 실패 시 처리
                    console.error(error);
                }
            });
        }


    </script>
 -->