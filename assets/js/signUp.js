
var phoneNumber = /[0-9-()+]{11}/; 
var passwordStrengthRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/; 
var usernameRegex = /^([A-z]+[0-9]*){4,16}$/; 
var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    CHECK INPUT    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$("#noti").hide();
$( "#contact_no" ).focusout(function() {
	// Phone number Valification
	phoneNumber.compile(phoneNumber);
	if(phoneNumber.exec($("#contact_no").val()) != null){
		$("#check_contact").text(" Pass ");
		$("#noti").hide("slow");
	}
	else if ($("#contact_no").val() != ""){
		$("#check_contact").text($("#contact_no").val() + " is invalid. Please enter at least 11 digits. Please try again.");
		$("#notification").text("Invalid phone number. Please enter 11 digits.");
		$("#noti").show("slow");
		document.body.scrollTop = document.documentElement.scrollTop = 0; // scroll to th top of the page
	}
});


$( "#email" ).focusout(function() {
	
	// Email Valification
	emailRegex.compile(emailRegex);
	if(emailRegex.exec($("#email").val()) != null){
		$("#check_email").text(" Pass ");
		$("#noti").hide();
		$.ajax({
	        type: "POST",
	        url: "interface url",
	        contentType: "application/json",
	        dataType: "json",
	        data: {
				email: $("#email").val()
	        },
	        success: function(response) {
	            console.log(response);
	            // Do the thing here!!!
	            if(response.result === "exist"){
	            	$("#notification").text($("#email").val()+" is already exist, please try again.");
					$("#noti").show("slow");
					document.body.scrollTop = document.documentElement.scrollTop = 0; // scroll to th top of the page
	            }
	        },
	        error: function(response) {
	            console.log(response);
	        }
	    });
	}
	else if ($("#email").val() != ""){
		$("#notification").text("Invalid email. Please try again.");
		$("#noti").show("slow");
		document.body.scrollTop = document.documentElement.scrollTop = 0; // scroll to th top of the page
	}
});


$( "#username" ).focusout(function() {
	
	//Username Valification
	usernameRegex.compile(usernameRegex);
	if(usernameRegex.exec($("#username").val()) != null){
		$("#check_username").text(" Pass ");
		$("#noti").hide();
		$.ajax({
	        type: "POST",
	        url: "interface url",
	        contentType: "application/json",
	        dataType: "json",
	        data: {
				username: $("#username").val()
	        },
	        success: function(response) {
	            console.log(response);
	            // Do the thing here!!!
	            if(response.result === "exist"){
	            	$("#notification").text($("#username").val()+" is already exist, please try again.");
					$("#noti").show("slow");
					document.body.scrollTop = document.documentElement.scrollTop = 0; // scroll to th top of the page
	            }
	        },
	        error: function(response) {
	            console.log(response);

	        }
	    });
	}
	else if ($("#username").val() != ""){
		//$("#check_username").text($("#username").val()+" is invalid. Pleases enter length at least 4-16 characters, contain at least one alphabet.");
		$("#notification").text($("#username").val()+" is invalid. Pleases enter length at least 4-16 characters, contain at least four alphabets.");
		$("#noti").show("slow");
		document.body.scrollTop = document.documentElement.scrollTop = 0; // scroll to th top of the page
	}
	// or check if exist username!!!! HERE
});

$( "#password" ).focusout(function() {
	$("#check_password").text($("#password").val());
	// Password Valification
	passwordStrengthRegex.compile(passwordStrengthRegex);
	if(passwordStrengthRegex.exec($("#password").val()) != null){
		$("#check_password").text(" Pass ");
		$("#noti").hide();
	}
	else if ($("#password").val() != ""){
		//$("#check_password").text("Invalid Password. Password must have LENGTH at least 8 characters long, contain at least ONE digit, ONE lower case letter, ONE upper case letter.");
		$("#notification").text("Invalid Password. Password must have LENGTH at least 8 characters long, contain at least ONE digit, ONE lower case letter, ONE upper case letter.");
		$("#noti").show("slow");
		document.body.scrollTop = document.documentElement.scrollTop = 0; // scroll to th top of the page
	}
});

$( "#re_password" ).focusout(function() {
	
	if($("#password").val() === $("#re_password").val() && $("#password").val() != ""){
			$("#check_re_password").text(" Pass ");
			$("#noti").hide();
		}
		else if ($("#re_password").val() != ""){
			$("#check_re_password").text("Miss macth Password. Please try again.");
			$("#notification").text("Miss macth Password. Please try again.");
			$("#noti").show("slow");
			document.body.scrollTop = document.documentElement.scrollTop = 0; // scroll to th top of the page
		}
});

$("#submitBtn").on("click",function(){
	var nameOfUser = $("#firstName").val() +" "+ $("#lastName").val();
	// window.location.href = "signInPage.html";
	console.log(window.location.href);
	$.ajax({
	        type: "POST",
	        url: "interface url",
	        contentType: "application/json",
	        dataType: "json",
	        data: {
	            name: nameOfUser,
				gender: $("#user_gender").val() ,
				dob: $("#birth_date").val(),
				nationalIDNumber: $("#national_id").val() ,
				contactNumber: $("#contact_no").val() ,
				email: $("#email").val(),
				address: $("#address").val(),
				username: $("#username").val(),
				password: $("#password").val()
	        },
	        success: function(response) {
	            console.log(response);
	            // Go to Login page
	            window.location.href = "signInPage.html";
	        },
	        error: function(response) {
	            console.log(response);

	        }
	    });

});





// var nameOfUser = $("#firstName").val() +" "+ $("#lastName").val();
// $.ajax({
//         type: "POST",
//         url: "interface url",
//         contentType: "application/json",
//         dataType: "json",
//         data: {
//             name: nameOfUser,
// 			gender: $("#user_gender").val() ,
// 			dob: $("#birth_date").val(),
// 			nationalIDNumber: $("#national_id").val() ,
// 			contactNumber: $("#contact_no").val() ,
// 			email: $("#email").val(),
// 			address: $("#address").val(),
// 			username: $("#username").val(),
// 			password: $("#password").val()
//         },
//         success: function(response) {
//             console.log(response);
//             // Do the thing here!!!
//         },
//         error: function(response) {
//             console.log(response);
//         }
//     });