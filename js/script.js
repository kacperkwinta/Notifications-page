"use strict";
console.log(123);

const notificationsNumber = document.querySelector(".notifications-number");
const btnClearNotifications = document.querySelector(".mark-as-read");
const notificationsDot = document.querySelectorAll(".dot");

btnClearNotifications.addEventListener("click", function () {
	notificationsNumber.textContent = "0";

	notificationsDot.forEach((dot) => {
		dot.classList.add("dot--hidden");
	});
});
