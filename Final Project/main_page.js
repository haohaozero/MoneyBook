window.onload=function(){
	var loginbtn= document.getElementById("loginbtn");
	var register = document.getElementById("registerbtn");
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	loginbtn.addEventListener("click",function(event){
		console.log("Username get~");
		if(username.value == ""){
			if(event.cancelable){
			event.preventDefault();
			username.classList.add("blink");
			}
			else{
				if(username.classList.contains("blink"))
		{
			username.classList.remove("blink");
		}
			}

		}

		if (password.value == ""){
			if(event.cancelable){
			event.preventDefault();
			}
		}
		
		

	})
	
}