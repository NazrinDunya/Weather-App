const cityInput = document.querySelector('.inputText');
const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    getData(cityInput.value);
})
function getData(name){
   const apiKey = 'ea38f22d1d2b6c0d2ccbfd9b04e74ea2';
   const dataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric&lang=az`;
   fetch(dataUrl).then(res => res.json())
   .then(data => {
     const { name,sys: {country},main:{temp,feels_like},weather:[{description}]} = data;
     const city = document.querySelector('#city');
     const temperature = document.querySelector('#temp');
     const weatherDesc = document.querySelector('#weather');
     const felt = document.querySelector('#felt');
     city.textContent = `${name}, ${country}`;
     weatherDesc.textContent = `${description}`;
     temperature.textContent = `${temp}`;
     felt.textContent = `${feels_like}`

   })
   .catch(err =>console.warn(err));
   
}