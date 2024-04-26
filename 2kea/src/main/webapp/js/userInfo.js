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
	$("#id").find('input').prop('readonly', false);
	$("#mName").find('input').prop('readonly', false);
	$("#email").find('input').prop('readonly', false);
	$("#phone").find('input').prop('readonly', false);
	$("#pw").css('display', 'block');
	$("#btn_delete").css('display', 'none');
	$("#btn_editSucces").css('display', 'block')
	$("#btn_edit").css('display', 'none')
}

document.getElementById('pw_checkbox').checked = true;

function pwCheckbox() {
	let checkbox = document.getElementById('pw_checkbox');
	let pwInput = document.querySelector('input[name="pw"]');

	if (checkbox.checked) {
		pwInput.type = "password";
	} else {
		pwInput.type = "text";
	}
}
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
		.then(response => {
			if (response.ok) {
				
			} else {
				
			}
		})
		.catch(error => {
			
		});
}


function deletSuccess() {
	fetch(userDeletionControl.do, {
		method: post,
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: 'id=' + id
	})
		.then(successCall)
		.catch(errorCall)

}


