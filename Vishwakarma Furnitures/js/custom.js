function sendWA() {
	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let phone = document.getElementById('phone');
	let textInput = document.getElementById('text-input');
  let mobileNumber = 918109783909;    //Enter your mobile number here

	if (name.value.trim() == "") {
		name.style.background = "lightpink";
		name.style.border = "4px solid red";
		alert('Please Enter your Name');
		return false;
	}

	let url = `https://wa.me/${mobileNumber}?text=` + "Name: " + name.value + "%0a" + "Email ID: " + email.value +"%0a" +"Phone:"+phone.value+"%0a" + "Message: " + textInput.value;

	window.open(url, '_blank').focus();
}





function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}