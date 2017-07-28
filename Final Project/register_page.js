window.onload=function(){
	var cancelbtn= document.getElementById("cancel");
	cancelbtn.addEventListener("click",function(){
		document.location.href="main_page.html";
	});

	var myform = document.getElementById('register_form');
	myform.onsubmit= function(event){
		var username = document.getElementById("register_username");
		var password = document.getElementById("register_password");
		var confirm = document.getElementById("register_confirm");
		var month_income = document.getElementById("monthly_income");

		if(username.value = ""){
			if(event.cancelable){
		event.preventDefault();
		}
		}
		if(password.value = ""){
			if(event.cancelable){
		event.preventDefault();
		}
		}
		if(confirm.value = ""){
			if(event.cancelable){
		event.preventDefault();
		}
		}
		if(month_income.value = ""){
			if(event.cancelable){
		event.preventDefault();
		}
		}
		
	}





}