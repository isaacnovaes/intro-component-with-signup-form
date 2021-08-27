const form = document.querySelector("form"),
	formContainer = document.querySelector("div.form-container"),
	correctInputs = [];

form.addEventListener("submit", validateForm);

function validateForm(event) {
	event.preventDefault();

	const firstName = document.getElementById("firstName"),
		lastName = document.getElementById("lastName"),
		email = document.getElementById("email"),
		password = document.getElementById("password");

	validateName(firstName);
	validateName(lastName);
	validateEmail(email);
	validatePassword(password);

	if (
		correctInputs.every((item) => {
			return item === true;
		})
	) {
		showResultSubmission(formContainer);
	}
	correctInputs.length = 0;
}

function showError(element) {

	element.nextElementSibling.style.backgroundImage = "url(images/icon-error.svg)";
	element.nextElementSibling.nextElementSibling.style.visibility = "visible";
	element.style.border = "2px solid rgba(255, 0, 0, 0.883)";
	correctInputs.push(false);
}
function showCorrect(element) {
	element.nextElementSibling.style.backgroundImage = "url(images/checked-icon.svg)";
	element.nextElementSibling.nextElementSibling.style.visibility = "hidden";
	element.style.border = "2px solid hsl(154, 59%, 51%)";
	correctInputs.push(true);
}

function showSubmission(element) {
	element.innerHTML = "Your free trial is about to come!";
	element.style.color = "hsl(154, 59%, 51%)";
	element.style.textAlign = "center";
	element.style.height = "60px";
}
function validateName(name) {
	if (name.value.trim() == "") {
		showError(name);
	} else {
		showCorrect(name);
	}
}

function validateEmail(name) {
	if (
		!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			name.value.trim()
		)
	) {
		showError(name);
	} else {
		showCorrect(name);
	}
}

function validatePassword(name) {
	if (name.value.trim() == "") {
		showError(name);
	} else if (name.value.trim().length <= 6) {
		showError(name);
		name.nextElementSibling.nextElementSibling.textContent = "Password should have more than 6 characters.";
	} else {
		showCorrect(name);
	}
}

function showResultSubmission(element) {
	const inputs = document.querySelectorAll("div.input");
	let counter = 0;

	inputs.forEach((item) => {
		item.style.animationDelay = `${counter++ / 1.5}s`;
	});
	setInterval(() => {
		inputs.forEach((item) => {
			item.classList.add("animate");
		});
	}, 1000);

	setInterval(() => {
		showSubmission(element);
	}, 4000);
}
