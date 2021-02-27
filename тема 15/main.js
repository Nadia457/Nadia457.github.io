
function showUser(){
	const user_data=document.getElementById('user_data');
	
	user_data.innerHtml=
	`
	<tr>
	
	<td>${user.name}</td>
	<td>${user.lastName}</td>
	<td>${user.age}</td>
	<td>${user.email}</td>
	<td>${user.city}</td>
	
	</tr>
	`
}
function changeName(new_name){
	if(new_name.length>2){
	user.name=new_name;
	showUser();
	}
	else{
		alert("Ім'я надто коротке")
	}	
}
function changeLastName(new_last_name){
	
	user.lastName=new_last_name;
	showUser();
}
function changeAge(new_age){
	if(typeof new_age=='number'){
	user.age=new_age;
	showUser();}
	else{
		alert("Невірно вказаний вік.")
}
}
function changeEmail(new_email){
	if(new_email.includes("@")){
	user.email=new_email;
	showUser();}
	else{
		alert("Невірно вказаний email")
	}
}
function changeCity(new_city){
	user.city=new_city;
	showUser();
}
function changeUserData(new_name,new_last_name,new_age,new_email,new_city){
	if(new_name.length>2){
	user.name=new_name;
	showUser();
	}
	else{
		alert("Ім'я надто коротке")
	}	
	user.lastName=new_last_name;
	showUser();
	if(typeof new_age=='number'){
	user.age=new_age;
	showUser();}
	else{
		alert("Невірно вказаний вік.")
}
if(new_email.includes("@")){
	user.email=new_email;
	showUser();}
	else{
		alert("Невірно вказаний email")
	}
	user.city=new_city;
	showUser();
}
showUser();