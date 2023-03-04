const wrapper = document.querySelector('.wrapper');
const inputField = document.querySelector('input');

inputField.addEventListener('keyup', (e) => {
    if(e.key == 'Enter' && inputField.value != ""){
        requestApi(inputField.value);
        inputField.value = "";
    }
});

function requestApi(city){
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=27cd174a3b303dec7b59e42eadf52e77`;
    fetch(api).then(res => res.json()).then(result => weatherDetails(result));
}

function weatherDetails(info){
    console.log(info);
    const city = info.name;
    const country = info.sys.country;
    const {description} = info.weather[0];
    const {temp} = info.main;

    wrapper.querySelector('.temp .numb').innerText = Math.floor(temp);
    wrapper.querySelector('.temp .weather').innerText = description;
    wrapper.querySelector('.location span').innerText = `${city} ${country}`;
}