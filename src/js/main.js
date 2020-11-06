const busket = document.querySelector("#busket");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector("#close");

busket.addEventListener(`click`, function (event) {
	modal.classList.add(`is-open`)
});

modalClose.addEventListener(`click`, function (event) {
	modal.classList.remove(`is-open`)
});


new WOW().init();