/**
 * signService.js
 */

/*
function signIn(successCall, errorCall) {
	fetch('signInControl.do', {
		method: 'post',
		headers: { 'Content-type': 'application/x-www-form-urlencoded' },
		body: 'id=' + vo.id + '&pw=' + vo.pw
	})
		.then(response => response.json())
		.then(successCall)
		.catch(errorCall)
}*/

const sign_svc = {
	signUp(vo = {}, successCall, errorCall) {
		fetch('signUpControl.do', {
			method: 'post',
			headers: { 'Content-type': 'application/x-www-form-urlencoded' },
			body: 'id=' + vo.id + '&pw=' + vo.pw + '&mName=' + vo.mName + '&email='
				+ vo.email + '&phone=' + vo.phone
		})
			.then(response => response.json())
			.then(successCall)
			.catch(errorCall)
	}
}

function signUp() {
	var id = document.querySelector('input[name="id"]').value;
	var pw = document.querySelector('input[name="pw"]').value;
	var mName = document.querySelector('input[name="mName"]').value;
	var email = document.querySelector('input[name="email"]').value;
	var phone = document.querySelector('input[name="phone"]').value;

	// 유효성 체크
	if (!validateMName(mName)) {
		swal('이름을 입력하세요');
		return;
	}
	
	if (!validateId(id)) {
		swal('아이디는 4~12글자이어야 합니다');
		return;
	}

	if (!validatePassword(pw)) {
		swal('비밀번호는 4~12자 이어야 합니다');
		return;
	}


	if (!validateEmail(email)) {
		swal('유효한 이메일 주소를 입력하세요');
		return;
	}

	if (!validatePhone(phone)) {
		swal('유효한 전화번호를 입력하세요');
		return;
	}

	sign_svc.signUp({ id, pw, mName, email, phone }
		, function(data) {
			if (data.retCode == "Success") {
				swal("회원가입이 되었습니다.")
				window.location.href = 'prodMain.do';
			}
		},
		function(error) {
			if (error) {
				swal("회원가입에 실패했습니다.")
			}
		})
}



function findId() {
	var mName = document.querySelector('input[id="mName"]').value;
	var phone = document.querySelector('input[id="phone"]').value;

	fetch('findIdControl.do', {
		method: 'post',
		headers: { 'Content-type': 'application/x-www-form-urlencoded' },
		body: 'mName=' + mName + '&phone=' + phone
	})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			if (data) {
				var id = data.id;
				console.log(id);
				Swal.fire({
					text: 'Id는 ' + id + '입니다.',
					icon: 'success'
				}).then(result => {
					if (result.isConfirmed) {
						window.location.href = 'signIn.do';
					}
				});
			} else {
				Swal.fire({
					text: 'Id가 존재하지 않습니다.',
					icon: 'error'
				});
			}
		})
		.catch(error => {
			Swal.fire({
				text: 'Id가 존재하지 않습니다.',
				icon: 'error'
			});
			console.error('Error occurred:', error);
		});
}

function findPw() {
	var mName = document.querySelector('input[id="mName"]').value;
	var phone = document.querySelector('input[id="phone"]').value;
	var id = document.querySelector('input[id="id"]').value;

	fetch('findPasswordControl.do', {
		method: 'post',
		headers: { 'Content-type': 'application/x-www-form-urlencoded' },
		body: 'id=' + id + '&mName=' + mName + '&phone=' + phone
	})
		.then(response => response.json())
		.then(data => {
			console.log(data.pw);
			if (data.pw != null) {
				document.getElementById('id').style.display = 'none';
				document.getElementById('idP').style.display = 'none';
				document.getElementById('mName').style.display = 'none';
				document.getElementById('mNameP').style.display = 'none';
				document.getElementById('phone').style.display = 'none';
				document.getElementById('phoneP').style.display = 'none';
				document.getElementById('pw').style.display = 'block';
				document.getElementById('pwP').style.display = 'block';
				document.getElementById('btnFind').style.display = 'none';
				document.getElementById('btnUpdate').style.display = 'block';
				document.getElementById('btn_back1').style.display = 'none';
				document.getElementById('btn_back2').style.display = 'block';
			} else {
				Swal.fire({
					text: '정보가 올바르지 않습니다.',
					icon: 'error'
				});
			}
		})
		.catch(err => {
			Swal.fire({
				text: '정보가 올바르 않습니다.',
				icon: 'error'
			});
			console.err(err + '정보가 존재하지 않습니다.');
		});
}




function updatePw() {
	var id = document.querySelector('input[id="id"]').value;
	var pw = document.querySelector('input[id="pw"]').value;


	function validatePassword(password) {
		return password.length >= 4 && password.length <= 12;
	}

	// 유효성 체크
	if (!validatePassword(pw)) {
		swal('비밀번호는 4~12자 이어야 합니다');
		return;
	}

	fetch('updatePasswordControl.do', {
		method: 'post',
		headers: { 'Content-type': 'application/x-www-form-urlencoded' },
		body: 'id=' + id + '&pw=' + pw
	})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			if (data) {
				swal.fire({
					text: '비밀번호가 변경되었습니다.',
					icon: 'success'
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = 'signIn.do';
					}
				});
			} else {
				swal.fire({
					text: '입력한 정보가 올바르지 않습니다.',
					icon: 'error'
				});
			}
		})

		.catch(err => {
			swal('입력한 정보가 올바르지 않습니다.');
			console.error(err + '정보가 존재하지 않습니다.');
		})
}


function idCheck() {
	var id = document.querySelector('input[id="id"]').value;

	if (!id) {
		swal('ID를 입력해주세요.');
		return;
	}

	if (!validateId(id)) {
		swal('ID는 4~12글자이어야 합니다');
		return;
	}

	fetch('signUpCheckControl.do', {
		method: 'post',
		headers: { 'Content-type': 'application/x-www-form-urlencoded' },
		body: 'id=' + id
	})
		.then(response => response.json())
		.then(data => {
			if (data)
				if (data.retCode === "Success") {
					swal('중복된 ID입니다.');
				} else if (data.retCode === "False") {
					swal('사용 가능한 ID입니다.');
				}
		})
		.catch(error => {
			swal('오류가 발생했습니다.');
			console.error('Error occurred:', error);
		});
}

function goBack() {
	window.history.back();
}


