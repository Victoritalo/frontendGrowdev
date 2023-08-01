const body = document.querySelector('body');
async function callApi() {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=13014aaac87e4b569e221558230108&q=Goiânia&aqi=no"
  );
  const data = await response.json();
  const city = data.location.name;
  const temp = data.current.temp_c;
  body.innerHTML += `<h1>Temperatura em ${city}: ${temp}C°</h1>`
  console.log(data);
}
callApi();
