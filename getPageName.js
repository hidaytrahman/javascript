	//Get URL of current page
	var url = window.location.href;
	//Fetch only page name
	var pageName = url.split('/').pop().split('.').shift();
	
	document.write("Your page Name is <b>"+pageName);
