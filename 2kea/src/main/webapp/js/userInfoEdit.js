/**
 * userInfoEdit.js
 */

 $(document).ready(function() {
	$.ajax({
		url: "userInfoControl.do",
		method: "get",
		
		success: function(data) {
		data=JSON.parse(data)
			$("#mName").val(data.mName);
			$("#id").val(data.id);
			$("#pw").val(data.pw);
			$("#email").val(data.email);
			$("#phone").val(data.phone);
		},
		error: function() {
			// Handle error if user information cannot be fetched
			console.log("Error fetching user information");
		}

	})
})