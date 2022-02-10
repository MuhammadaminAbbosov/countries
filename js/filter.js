fetch(`https://restcountries.com/v2/all`)
    .then((response) => response.json())
    .then(data => {
        for(let counrtye of data) {
            const html= `
                <li>${counrtye.name}</li>
            `
            counrty.insertAdjacentHTML("beforeend",html)
        }
    })
    
    
    function filtredElement() {
    const filter = input.value.toLowerCase()
    const li = counrty.getElementsByTagName("li")
    let txtValue='';
    for (let i = 0;i < li.length; i++) {
        txtValue = li[i].innerText || li[i].textContent
        if(txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}