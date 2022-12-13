const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setDate = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondDegrees = ((seconds / 60) * 360); // Every second = 1 degree // Add a +offset if necessary
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360);
	minHand.style.transform = `rotate(${minsDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = ((hours / 60) * 360);
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); // Every seconds 