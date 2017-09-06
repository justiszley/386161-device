var writeUs = document.querySelector(".write-us-btn");
var writeUsPopup = document.querySelector(".modal-write-us");
var writeUsClose = document.querySelector(".modal-write-us .modal-close");

var	map = document.querySelector(".map-btn");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map .modal-close");

writeUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUsPopup.classList.add("modal-show");
});

writeUsClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUsPopup.classList.remove("modal-show");
})

map.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
})

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
})