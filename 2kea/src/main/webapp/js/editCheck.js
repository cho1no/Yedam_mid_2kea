/**
 * editCheck.js
 */
// JavaScript 코드

document.getElementById('mName').onkeyup = function() {
	// 입력된 아이디 값을 가져옴
	let mNameValue = this.value;

	// 아이디 유효성 검사 수행
	if (validateMName(mNameValue)) {
		// 유효한 경우
		document.getElementById('mNameError').innerText = ''; // 에러 메시지 숨김
	} else {
		// 유효하지 않은 경우
		document.getElementById('mNameError').innerText = '이름을 입력하세요'; // 에러 메시지 표시
	}
};

document.getElementById('id').onkeyup = function() {
    let idValue = this.value;

    if (validateId(idValue)) {
        document.getElementById('idError').innerText = '';
    } else {
        document.getElementById('idError').innerText = '아이디는 4~12글자이어야 합니다';
    }
};


document.getElementById('pw').onkeyup = function() {
	let pwValue = this.value;

	if (validatePassword(pwValue)) {
		document.getElementById('pwError').innerText = '';
	} else {
		document.getElementById('pwError').innerText = '비밀번호는 4~12자 이상이어야 합니다';
	}
};

document.getElementById('email').onkeyup = function() {
	let emailValue = this.value;

	if (validateEmail(emailValue)) {
		document.getElementById('emailError').innerText = '';
	} else {
		document.getElementById('emailError').innerText = '유효한 이메일 주소를 입력하세요';
	}
};

document.getElementById('phone').onkeyup = function() {
	let phoneValue = this.value;

	if (validatePhone(phoneValue)) {
		document.getElementById('phoneError').innerText = '';
	} else {
		document.getElementById('phoneError').innerText = '유효한 전화번호를 입력하세요';
	}
}

// 이름 유효성 검사 함수
function validateMName(mName) {
	return mName.length >= 2 && mName.length <= 6;
}

// 아이디 유효성 검사 함수
function validateId(id) {
	return id.length >= 4 && id.length <= 12;
}

// 비밀번호 유효성 검사 함수
function validatePassword(password) {
	console.log(password);
	return password.length >= 4 && password.length <= 12;
}

// 이메일 유효성 검사 함수
function validateEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 전화번호 유효성 검사 함수
function validatePhone(phone) {
	return phone.length >= 2;
}

function goBack() {
	window.history.back();
}
