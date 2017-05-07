function init(){
	var queryString = window.location.search.substring(1);
	console.log(queryString);
	var pair = queryString.split("=");
	console.log(pair);
	var post_id = pair[1];
	console.log(post_id);

}