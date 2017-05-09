
$("#submitBtn").on("click",function(){
    alert($("#username").val());
    alert($("#password").val());
    alert($('input[name="user_type"]:checked').val());
    window.location = 'homepage.html';
	$.ajax({
        type: "POST",
        url: "interface url",
        contentType: "application/json",
        dataType: "json",
        data: {
			username: $("#username").val() ,
			password: $("#password").val() ,
			usertype: $('input[name="user_type"]:checked').val()
        },
        success: function(response) {
        	// Do the thing here!!!
            console.log(response);
            // Go to user homepage
            window.location.href = "homepage.html";
        },
        error: function(response) {
            console.log(response);
            if (response.result == username_wrong){
                $("#username_error").text("Invalid username.");
            }
            else if (response.result == password_wrong){
                $("#password_error").text("Invalid password.");
            }
        }
    });

});