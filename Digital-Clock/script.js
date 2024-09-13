
function time() {
    const date = new Date();
const ampm = (date.getHours() >= 12) ? "PM" : "AM";
const hour = (date.getHours() <= 12) ? "0" + date.getHours() : date.getHours();
const minutes = (date.getMinutes() < 10) ? "0" + date.getSeconds() : date.getMinutes();
const seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();

    document.getElementById("clock").innerText = `${hour} : ${minutes} : ${seconds} ${ampm}`
}

setInterval(time, 1000);




