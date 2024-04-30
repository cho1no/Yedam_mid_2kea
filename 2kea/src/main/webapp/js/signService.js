/**
 * 
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
	signUp() {
		fetch('signUpControl.do', {
			method: 'post',
			headers: { 'Content-type': 'application/x-www-form-urlencoded' },
			body: 'id=' + id + '&pw=' + pw + '&mName=' + mName + '&email='
				+ email + '&phone=' + phone
		})
			.then(response => response.json())
			.then(succesCall)
			.error(errorCall)
	}
}

function signUp() {
	var id = document.querySelector('input[name="id"]').value;
	var pw = document.querySelector('input[name="pw"]').value;
	var mName = document.querySelector('input[name="mName"]').value;
	var email = document.querySelector('input[name="email"]').value;
	var phone = document.querySelector('input[name="phone"]').value;

	sign_svc.signInfo(id, pw, mName, email, phone)
		, function(data) {
			if (data) {
				alert("회원가입이 되었습니다.")
				window.location.href = 'prodMain.do';
			}
		},
		function(error) {
			if (error) {
				alert("회원가입에 실패했습니다.")
			}
		}
}

function signUp1() {




	then(data => {
		if (data) {
			alert("회원가입이 되었습니다.")
			window.location.href = 'prodMain.do';
		}
	})
		.catch()

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
				alert('Id는 ' + id + '입니다.');
				window.location.href = 'signIn.do';
			} else {
				alert('Id가 존재하지 않습니다.');
			}
		})
		.catch(error => {
			alert('Id가 존재하지 않습니다.');
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
			if (data) {
				var pw = data.pw
				alert('Password는 ' + pw + ' 입니다.')
				window.location.href = 'signIn.do';
			} else {
				alert('입력한 정보가 올바르지 않습니다.');
			}
		})
		.catch(err => {
			alert('입력한 정보가 올바르지 않습니다.');
			console.err(err + '정보가 존재하지 않습니다.');
		})
}

