/**
 * userInfo.js
 */


$(document).ready(function() {
	$.ajax({
		url: "userInfoControl.do",
		method: "get",

		success: function(data) {
			data = JSON.parse(data)
			$("#mName").find('input').val(data.mName);
			$("#id").find('input').val(data.id);
			$("#pw").find('input').val(data.pw);
			$("#email").find('input').val(data.email);
			$("#phone").find('input').val(data.phone);
		},
		error: function() {
			console.log("Error fetching user information");
		}

	})
})

function editInformation() {
	$("#mName").find('input').prop('readonly', false);
	$("#email").find('input').prop('readonly', false);
	$("#phone").find('input').prop('readonly', false);
	$("#pw").css('display', 'block');
	$("#btn_delete").css('display', 'none');
	$("#btn_editSucces").css('display', 'block')
	$("#btn_edit").css('display', 'none')
}

//document.getElementById('pw_checkbox').checked = true;

//document.querySelector('.eyes').addEventListener('click', function() {

//});


function deleteAccount() {
	document.getElementById('mName').style.display = 'none';
	document.getElementById('id').style.display = 'none';
	document.getElementById('email').style.display = 'none';
	document.getElementById('phone').style.display = 'none';
	document.getElementById('checkbox').style.display = 'block';

	document.getElementById('pw').style.display = 'block';

	document.getElementById('btn_edit').style.display = 'none';
	document.getElementById('btn_delete').style.display = 'none';
	document.getElementById('btn_drop').style.display = 'block';

	document.getElementById('firstWord').innerHTML = "Please don't leave."







}

/*
function deleteAccount() {
	$("#mName").hide();
	$("#id").hide();
	$("#email").hide();
	$("#phone").hide();
	$("#checkbox").show();

	$("#pw").show();
	$("#btn_edit").hide();
	$("#btn_delete").hide();
	$("#btn_drop").show();

	$("#firstWord").html("Are you sure you want to withdraw? If you proceed, your personal information will be sold to third parties");
}
*/



function editSuccess() {

	var id = document.querySelector('input[name="id"]').value;
	var pw = document.querySelector('input[name="pw"]').value;
	var mName = document.querySelector('input[name="mName"]').value;
	var email = document.querySelector('input[name="email"]').value;
	var phone = document.querySelector('input[name="phone"]').value;


	fetch("userInfoEditControl.do", {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: 'id=' + id + '&pw=' + pw + '&mName=' + mName
			+ '&email=' + email + '&phone=' + phone
	})
		.then(response => {		//결과값.
		console.log(response);
			if (response.ok) {
				alert("개인정보 변경이 되었습니다.");
				document.querySelector('#mName').querySelector('input').readOnly = true;
				document.querySelector('#email').querySelector('input').readOnly = true;
				document.querySelector('#phone').querySelector('input').readOnly = true;
				document.querySelector('#pw').style.display = 'none';
				document.querySelector('#btn_delete').style.display = 'block';
				document.querySelector('#btn_editSucces').style.display = 'none';
				document.querySelector('#btn_edit').style.display = 'block';
			} else {

			}
		})
		.catch(error => {
			alert('정보수정 에러.')
		});
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


