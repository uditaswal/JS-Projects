
function diceImg() {

    const  mynum = document.getElementById('mynum').value;

    // Remove existing images
    const existingImages = document.querySelectorAll('img');
    existingImages.forEach(img => img.remove());

    for (let i = 0; i < mynum; i++) {
        let temp = Math.floor((Math.random() * 6) + 1);

        let img = document.createElement('img');
        img.width = 50;
        img.style.margin = "10px";
        if (temp === 1) {
            img.src = "img/1.png";
        } else if (temp === 2) {
            img.src = "img/2.png";
        } else if (temp === 3) {
            img.src = "img/3.png";
        } else if (temp === 4) {
            img.src = "img/4.png";
        } else if (temp === 5) {
            img.src = "img/5.png";
        } else if (temp === 6) {
            img.src = "img/6.png";
        }

        document.body.appendChild(img);
    }
}
