/**
 * userInfo.js
 */


$(document).ready(function() {
	$.ajax({
		url: "userInfoControl.do",
		method: "get",
		
		success: function(data) {
		data=JSON.parse(data)
			$("#mName").text(data.mName);
			$("#id").text(data.id);
			$("#pw").text(data.pw);
			$("#email").text(data.email);
			$("#phone").text(data.phone);
		},
		error: function() {
			// Handle error if user information cannot be fetched
			console.log("Error fetching user information");
		}

	})
})