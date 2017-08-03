window.onload=function(){

	var loginbtn= document.getElementById("loginbtn");
	var register = document.getElementById("registerbtn");
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	loginbtn.addEventListener("click",function(event){

		var input_name = username.value;
		var input_pw  = password.value;
		var ready = true;
		if(username.value == ""){
			ready = false;
			if(event.cancelable){
			event.preventDefault();

			username.classList.add("blink");
			}
		}else{
			if(username.classList.contains("blink"))
		{
			username.classList.remove("blink");
		}
		}

		if (password.value == ""){
			ready = false;
			if(event.cancelable){
			event.preventDefault();
			password.classList.add("blink");
			}
		}else{
			if(password.classList.contains("blink"))
		{
			password.classList.remove("blink");
		}
		}
			if(ready){
				var data={username: input_name, password: input_pw};
			$.post( "http://localhost/money_book_be/login.php", data,
			  function( result ) {
			    console.log(result.result);
			    if(event.cancelable){
					event.preventDefault();
		}
			    if(result.result){

			    }   
			    else{
			    	if(event.cancelable){
					event.preventDefault();
		}
			    } 
			});
			
			// console.log(data);
			// $.ajax({ url: 'money_book_be/login.php',
   //       dataType:'json',
   //       type: 'post',
   //       data: data,
   //   	 success: function(result){
   //   	 	alert(result);
   //   	 }});
				
		}
		
		

	})
	
}