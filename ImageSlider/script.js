const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");
const image = document.getElementById("image");
const numberofImages = 5;


let count = 1;
const carImg = document.getElementById("car-img");
leftArrow.addEventListener("click", event => {
    count++;
    count > numberofImages ? count = 1 : count;
    try {
        carImg.src = `img/Car${count}.png`;
    } catch (error) {
        console.error(error)
    }
}
);
rightArrow.addEventListener("click", event => {
    count <= 1 ? count = numberofImages + 1 : count;
    count--;
    try {
        carImg.src = `img/Car${count}.png`;
    } catch (error) {
        console.error(error)
    }
}
);

