document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '453a5e8f6ff490779f0ae147aa8780ca';
    const weatherInfoElement = document.getElementById('weather');
    const weatherIco = document.getElementById('weather-ico');
    const dayOfWeekHTML = document.getElementById('week-today');
    const dayMonth = document.getElementById('day-month');
    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleDateString('pt-BR', { weekday: 'long'});
    const dayOfMonth = currentDate.getDate();
    const month = currentDate.toLocaleDateString('pt-BR', { month: 'long' });
    const dayAndMonth = `${dayOfMonth} de ${month}`;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=ITUIUTABA&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp);
            const weatherIconCode = data.weather[0].icon;

            weatherInfoElement.textContent = `${temperature}º`;
            dayOfWeekHTML.textContent = `${dayOfWeek}`;
            dayMonth.textContent = `${dayAndMonth}`;

            weatherIco.setAttribute('src', `./assets/icos/weather-icos/${weatherIconCode}.svg`)
            console.log(weatherIco);
        })
        .catch(error => {
            console.log('Ocorreu um erro', error);
        });
});
