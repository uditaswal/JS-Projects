const name = document.getElementById("name");
const type = document.getElementById("type");
const height = document.getElementById("height");
const wieght = document.getElementById("wieght");
const image = document.getElementById("image");
const ability = document.getElementById("ability");

async function getpokedetails() {
    // fetching details
    try {
        const pokename = document.getElementById("pokename").value.toLowerCase();
        const pokeapi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
 
        if (!pokeapi.ok) {
            alert("Enter correct name")
            throw new Error("error");
        }
        const data = await pokeapi.json();

        // adding image
        const pokeimg = document.getElementById("pokeimg");
        image.src = data.sprites.front_default;
        pokeimg.appendChild(image);

        // editing pokedtails
        name.textContent = `${(data.name).charAt(0).toUpperCase() + (data.name).slice(1)}`;
        type.textContent = `${(data.types[0].type.name).charAt(0).toUpperCase() + (data.types[0].type.name).slice(1)}`;
        height.textContent = data.height + " in";
        wieght.textContent = data.weight + " Kg";
        ability.textContent = `${(data.abilities[0].ability.name).charAt(0).toUpperCase() + (data.abilities[0].ability.name).slice(1)}`; ;

    } catch (error) {
        console.log(error)
    }
}

document.addEventListener("keydown", event => {
    pokename.focus();

    if (event.keyCode == 32 || event.keyCode == 13) {
        getpokedetails()
    }
})