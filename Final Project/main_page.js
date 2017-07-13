window.onload=function(){
	var loginbtn= document.getElementById("loginbtn");
	var register = document.getElementById("registerbtn");
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	loginbtn.addEventListener("click",function(event){
		
		if(username.value == ""){
			if(event.cancelable){
			event.preventDefault();
			}
		}

		if (password.value == ""){
			if(event.cancelable){
			event.preventDefault();
			}
		}


	})
}