fetch(`https://restcountries.com/v3.1/name/peru`)
    .then((response) => response.json())
    .then(data => {
        input.style.display = "block"
        loader.style.display = "none"
    })

input.addEventListener("change", () => {
    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
        .then((response) => response.json())
        .then(data => {
            
            container.innerHTML = ""
            const html = `
                <div class="card">
                    <img src=${data[0].flags.svg} alt="">
            
                    <div class="content">
                        <h3>${data[0].name.common}</h3>
                        <b>Poytaxti: ${data[0].capital}</b>
                        <b>aholisi: ${data[0].population}</b>
                        <p>puli: ${renderCurrinesies(data[0].currencies)}</p>
                        <p>nomer: ${data[0].idd.root}${renderNumber(data[0].idd.suffixes)}</p>
                        <a href=${data[0].maps.googleMaps}  target="_blank">Kartadagi Manzili</a>
                    </div>
                </div>
            `

            container.insertAdjacentHTML("beforeend",html)
        })
        faSolid.style.transform = `rotateX(${x + 180}deg)`
        x+=180;
        counrty.classList.toggle("counrtyShow")
    input.value =""
})

function renderCurrinesies(currencies) {
    for(let i in currencies) {
        return currencies[i].name
    }
}

function renderNumber(suffixes) {
    for(let i of suffixes) {
        return i
    }
}


faSolid.addEventListener("click",() => {
    faSolid.style.transform = `rotateX(${x + 180}deg)`
    x+=180;
    counrty.classList.toggle("counrtyShow")
})