/**
 * userInfo.js
 */
$(document).ready(function() {
	$.ajax({
		url: "userInfoControl.do",
		method: "get",

		success: function(data) {
			data = JSON.parse(data)
			$("#mName").val(data.mName);
			$("#id").val(data.id);
			$("#pw").val(data.pw);
			$("#email").val(data.email);
			$("#phone").val(data.phone);
		},
		error: function() {
			console.log("Error fetching user information");
		}

	})
})

//document.getElementById('pw_checkbox').checked = true;
//document.querySelector('.eyes').addEventListener('click', function() {
//});

//document.querySelector('#btn_back').style.display = 'none';



function deleteAccount() {
	document.getElementById('pw').val

	document.getElementById('btn_edit').style.display = 'none';
	document.getElementById('btn_delete').style.display = 'none';
	document.getElementById('btn_drop').style.display = 'block';

	document.getElementById('firstWord').innerHTML = "Please don't leave."
}

const edit_svc = {
	editInfo(vo = {}, succesCall, errorCall) {
		fetch("userInfoEditControl.do", {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'id=' + vo.id + '&pw=' + vo.pw + '&mName=' + vo.mName
				+ '&email=' + vo.email + '&phone=' + vo.phone
		})
			.then(succesCall)
			.catch(errorCall)
	}
}

function editSuccess() {

	var id = document.querySelector('input[name="id"]').value;
	var pw = document.querySelector('input[name="pw"]').value;
	var mName = document.querySelector('input[name="mName"]').value;
	var email = document.querySelector('input[name="email"]').value;
	var phone = document.querySelector('input[name="phone"]').value;

    if (!validateMName(mName)) {
        swal('이름은 2글자 이상, 6글자 이하로 입력하세요.');
        return; // 수정을 중단하고 함수를 종료
    }
    if (!validateId(id)) {
        swal('아이디는 4~12글자로 입력하세요.');
        return;
    }
    if (!validatePassword(pw)) {
        swal('비밀번호는 4자 이상, 12자 이하여야 합니다.');
        return;
    }
    if (!validateEmail(email)) {
        swal('유효한 이메일 주소를 입력하세요.');
        return;
    }
    if (!validatePhone(phone)) {
        swal('유효한 전화번호를 입력하세요.');
        return;
    }


	edit_svc.editInfo({ id, pw, mName, email, phone },
		function(response) {		//결과값.
			console.log(response);
			if (response.ok) {
				swal("개인정보 변경이 되었습니다.");
				//window.location.href ="userInfo.do";
			}
		}, function(error) {
			swal('정보수정 에러.')
			console.error(error);
		})
}

function deleteSuccess() {
	fetch(userDeletionControl.do, {
		method: post,
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: 'id=' + id + '&pw=' + pw
	})
		.then(response => response.json())
		.then()
		.catch()
}