const url = 'https://api.openweathermap.org/data/2.5/'
const key = '18b92deaaa1f0f0d4b51013e4332474b'
const search = document.querySelector('.search-bar');
const btn = document.querySelector('button');
btn.addEventListener('click', setQuery);

function setQuery() {
    if (search.value == ' ') {
        alert('error');
    } else {
        getResult(search.value);
    }
}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric`;
    fetch(query)
        .then(weather => {
            return weather.json();
        })
        .then(displayResult);

}
const displayResult = (result) => {
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.description');
    desc.innerText = result.weather[0].description;
}