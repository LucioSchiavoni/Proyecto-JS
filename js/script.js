const banderas = document.getElementById("banderas");

document.addEventListener("DOMContentLoaded", e => {
    fetchData();
});

const fetchData = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        console.log(data);
        banderasId(data);
        formularioData(data);

    } catch (error) {
        console.log(error);
    };
};

//Muestro la api en el dom
const banderasId = data => {
    let elementos = "";
    data.forEach(element => {
        elementos += `
           <div class="card">
           <div class="card-content">
            <img src="${element.flags.png}"/>
                    <h2>${element.translations.spa.common}</h2><br>
                    <p><b>Capial:</b> ${element.capital}</p >
                    <p><b>Poblacion:</b> ${element.population}</p>
                    <p><b>${element.continents}</b></p>
                 
                    
                </div>
            </div>


            `
    });
    banderas.innerHTML = elementos;
};

////Buscador de paises
const inputId = document.getElementById("inputForm");
const form = document.getElementById("formulario");
const formularioData = data => {
    form.addEventListener("keyup", e => {
        e.preventDefault();
        const letraUser = inputId.value.toLowerCase();
        const arrayFilter = data.filter(item => {
            const inputData = item.translations.spa.common.toLowerCase();
            if (inputData.indexOf(letraUser) !== -1) {
                return item;
            };
        });
        banderasId(arrayFilter);
    });
};


///Boton Dark mode

const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");


    //Lo guardamos en el localstorage

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
});
//El modo actual
if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
} else {
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
}