var phoneNumber = /([0-9]+){11}/; 
var passwordStrengthRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/; 
var usernameRegex = /^([A-z]+[0-9]*){4,16}$/; 
	//var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/; 
var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var cantEdit = true;

$( "input" ).prop( "disabled", cantEdit );
$( "textarea" ).prop( "disabled", cantEdit );
$( "#submitBtn" ).prop( "disabled", cantEdit );

$("#noti").hide();

function init(){

	initGetData();

	//populatePagePost();
}

function initGetData(){
	$.ajax({
	        type: "POST",
	        url: "interface url",
	        contentType: "application/json",
	        dataType: "json",
	        data: {
	        	// get the user's information
				//username: $("#username").val()  
	        },
	        success: function(response) {
	        	// Do the thing here!!!
	            console.log(response);
	            $("#name").text("response.name");
	            $("#contact_no").text("response.contact_no");
	            $("#email").text("response.email");
	            $("#address").text("response.address");
	        },
	        error: function(response) {
	            console.log(response);
	        }
	    });
}


$("#editBtn").on("click",function(){
	if (cantEdit){ // Now you are editing 
		cantEdit = false;
	}
	 // editable only the allowed edit field
	$( "#name" ).prop( "disabled", cantEdit );
	$( "#contact_no" ).prop( "disabled", cantEdit );
	$( "#email" ).prop( "disabled", cantEdit );
	$( "#address" ).prop( "disabled", cantEdit );
	
	$( "#submitBtn" ).prop( "disabled", cantEdit );
	$( "#editBtn" ).prop( "disabled", true );
	
});

$( "#contact_no" ).focusout(function() {
	// Phone number Valification
	phoneNumber.compile(phoneNumber);
	if(phoneNumber.exec($("#contact_no").val()) != null){
		$("#noti").hide("slow");
		console.log("Contact no. pass." + phoneNumber.exec($("#contact_no").val()) );
	}
	else if ($("#contact_no").val() != ""){
		$("#notification").text("Invalid phone number. Please enter 11 digits.");
		$("#noti").show("slow");
		//console.log("Invalid phone number. Please enter at least 11 digits.");
	}
});

$( "#email" ).focusout(function() {
	// Email Valification
	emailRegex.compile(emailRegex);
	emailRegex.compile(emailRegex);
	if(emailRegex.exec($("#email").val()) != null){
		$("#noti").hide("slow");
		console.log("Email pass.");
	}
	else if ($("#email").val() != ""){
		$("#notification").text("Invalid email");
		$("#noti").show("slow");
	}
});

$("#submitBtn").on("click",function(){
	$("#noti").hide("slow");
	console.log("HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
	$( "#editBtn" ).prop( "disabled", cantEdit );
	cantEdit = true;
	$( "#submitBtn" ).prop( "disabled", cantEdit );
	$( "input" ).prop( "disabled", cantEdit );
	$( "textarea" ).prop( "disabled", cantEdit );
	// Throw every thing to the DB for update HERE!!!
	$.ajax({
        type: "POST",
        url: "interface url",
        contentType: "application/json",
        dataType: "json",
        data: {
        	// get the user's information
			//username: $("#username").val() // get user's id 
			name: $("#name").val() ,
			contactNumber: $("#contact_no").val() ,
			email: $("#email").val(),
			address: $("#address").val(),
        },
        success: function(response) {
        	// Do the thing here!!!
            console.log(response);
            location.reload(); // reload the page
        },
        error: function(response) {
            console.log(response);
        }
    });
});

