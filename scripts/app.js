let buttonOne = document.querySelector('.buttonOne');
let headingName = document.querySelector('.headingName');

buttonOne.onclick = function () {
	setUserName();
};

function setUserName() {
	let userName = prompt('Enter your name');
	if (!userName) setUserName();
	else {
		localStorage.setItem('name', userName);
		headingName.textContent = `Mozilla is cool, ${userName}`;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	headingName.textContent = `Mozilla is cool, ${storedName}`;
}
