//your JS code here. If required.
const form=document.getElementById("myForm");

function onSubmitForm(e){
	e.preventDefault()
	const name=e.target[0].value
	const email=e.target[1].value
	const password=e.target[2].value
	const confirmPassword=e.target[3].value
	if(password===confirmPassword){
		sessionStorage.setItem("user",JSON.stringify({name,email,password}))
		return
	}
	alert("Passwords do not match")
}

form.addEventListener("submit",onSubmitForm)
