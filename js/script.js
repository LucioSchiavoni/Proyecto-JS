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


