function changeToUserNavBar(){
	//Make post request to get whether user is log in if yes
	//Change to user nav bar if yes 
	//Otherwise don't change
	// $.post("",{},function(res){
	// 	res = true;
	// 	//User is logged in
	// 	if (res){
	// 		//Change to user nav bar
	// 		var navbarRight = $("#navbarRight").html('');
	// 		var profileTab = $('<li><a href="viewProfilePage.html"><i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i> Profile</a></li>');
	// 		var dropDown = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="manageVehicle.html">Manage Vehicles</a></li><li><a href="homepage.html">Sign out</a></li></ul></li>');

	// 		navbarRight.prepend(dropDown);

	// 		navbarRight.prepend(profileTab);
	// 	}
	// });
	// alert("hey3");
	var login = true;
	//User is logged in
	if (login){
		//Change to user nav bar
		var navbarRight = $("#navbarRight").html('');
		var profileTab = $('<li><a href="viewProfilePage.html"><i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i> Profile</a></li>');
		var dropDown = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="manageVehicle.html">Manage Vehicles</a></li><li><a href="homepage.html">Sign out</a></li></ul></li>');

		navbarRight.prepend(dropDown);

		navbarRight.prepend(profileTab);
	}
	
}
