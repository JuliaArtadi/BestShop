document.addEventListener("DOMContentLoaded", function () {

    const formEl = document.querySelector(".calc__columns form");
    const productsElem = formEl.querySelector(".calc__input")
        .firstElementChild;
    const ordersElem = productsElem.parentElement.nextElementSibling
        .firstElementChild;
    const packageElem = formEl.querySelector(".calc__select");
    const dropdownElems = packageElem.querySelector("ul")
        .querySelectorAll("li");
    const itemsElem = document.querySelectorAll(".list__item");

    const showCalculator = function (element, index, price) {
        itemsElem[index].querySelector(".item__calc")
            .innerText = element.value + " * $" + price;
        itemsElem[index].classList.add("open");
        if (!element.value) {
            itemsElem[index].classList.remove("open");
            console.log(itemsElem[index]);
        }
    }

    productsElem.addEventListener("keyup", function (){showCalculator(this, 0, 0.5)})

    ordersElem.addEventListener("keyup", showCalculator(this, 1, 0.25))

})
