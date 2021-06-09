function search(){
    //Fetch con async await
    
    async function newsSearch(city_name) {
        let url =  `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }

    let info = newsSearch(searchInput.value);
    info.then(response => {
        console.log(response);
        results.textContent = `Clima: ${response.weather[0].main}, Temperatura:  ${response.main.temp} °K`
    }).catch(error => {
        console.log(error);
    })
}