//	LEVEL 1
// Crida a la funció
const apiUrl = 'https://icanhazdadjoke.com';
const header: any = {
	method: 'GET',
	headers: {
		Accept: 'application/json'
	}
};

// Declarar de les variables
let currentJoke: string = "" 
const reportAcudits: { joke: string; score: number; date: string }[] = [];
const d = new Date()
let dateToday = d.toISOString() 


// Mostrar acudit
const showJoke = async () => {
	const response = await fetch(apiUrl, header);
	const data = await response.json();
	currentJoke = data.joke;
	console.log(currentJoke);
	document.getElementById('currentJoke')?.innerHTML = currentJoke
	return currentJoke;
};

// Puntuar acudit i guardar en nou array amb data
const evaluateJoke = (score: number) => { 
	let report = {
	  joke: currentJoke,
	  score: score,
	  date: dateToday,
	};
	reportAcudits.push(report);
	console.log(reportAcudits);
	 
  };


// LEVEL 2

// Crida a l'API del temps
const meteoApiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=41.3828939&lon=2.1774322&appid=b806aa9af1c4278561101712e94879ed&lang=ca&units=metric'

// Extreure les dades i mostrar-les
const showMeteo = async () => {
	const response = await fetch(meteoApiUrl);
	const data = await response.json();
	
	let temp = data.main.temp

	let temperature = `${temp} ºC`
	let meteoArray = data.weather
	let meteoData = meteoArray[0]
	let meteo = meteoData.description
	let weather = `${meteo}, ${temperature}`
	document.getElementById('meteoToday')?.innerHTML = weather
return weather

};




