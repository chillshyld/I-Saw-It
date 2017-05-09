
function init(){
	//Update nav bar according to user log in info
	initNavBar();
	//get data from backend
	var postData = initGetData();
	//create & populate post in homepage using data send from backend
	populatePagePosts(postData);



	
}

//create html post
function populatePagePosts(postData){
	
	postList = postData.postList;

	for (var i = 0;i < postList.length;i++){
		var post = postList[i];
		var postImage = post.imageURL;
		var postTitle = post.postTitle;
		var postDetail = post.postDetail;
		var postID = post.postID;
				$(".row").append('<div class="col-sm-6 col-md-4"><div class="thumbnail"><a href="#"><img src=' + '\'' + postImage + '\'' +   'alt="..."></a><div class="caption"><h3>' + postTitle + '</h3><p>' + postDetail + '</p><p><a href=' + 'viewPost.html?post_id=' + postID + ' class="btn btn-primary" role="button">View</a></p></div></div></div>');


	}
}


$("#btn").click(function(){
	window.location.href = "file:///Users/Chieh/Downloads/views/viewPost.html";
});






//initially get required post data from backend
function initGetData(){
	
	data = {
	postList: [
			{
				postTitle: "Coca Cola",
				postID: "123",
				companyName: "Coca Cola" ,
				imageURL: "https://farm6.staticflickr.com/5059/5518252117_d232831997.jpg",
				postDetail: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				postDeathline: "12-12-12",
				stickerList: [
					{
						type: "doorFront" ,
						amountRemaining: "10" ,
						paymentPerMonth: "2000"
					}
				]	
			},
			{
				postTitle: "Pepsi",
				postID: "124",
				companyName: "Pepsi" ,
				imageURL: "https://farm7.staticflickr.com/6188/6106475454_cf4dab4d64.jpg",
				postDetail: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
				postDeathline: "10-10-10",
				stickerList: [
					{
						type: "doorBack" ,
						amountRemaining: "17" ,
						paymentPerMonth: "1500"
					}
				]	
			},

			{
				postTitle: "Audi",
				postID: "125",
				companyName: "Audi" ,
				imageURL: "https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg",
				postDetail: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
				postDeathline: "11-11-11",
				stickerList: [
					{
						type: "vendorLeft" ,
						amountRemaining: "4" ,
						paymentPerMonth: "500"
					}
				]	
			}

		]
 	};
 	return data;
}


function initNavBar(){
	//Make post request to get whether user is log in if yes change to user Nav bar
	changeToUserNavBar();
}




