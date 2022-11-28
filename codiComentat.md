/* CRIDA A UNA API
1. Apuntar a la url (apiUrl)
2. A través d'una funció async* (asíncrona):
	2.1 Demanar la info (amb fetch i entre () dir-li la url i el header) i que et doni un "resguard" que guardaràs una variable.
	2.2 Convertir aquest "resguard" en la json i guardar-ho en una variable.
	2.3 Dir-li exactament quina part de l'objecte que t'ha portat vols (això li demanes amb la key, com un obj normal).
	2.4 Retornar el que vulguis extreure a través de la funció (si cal).

La funció ASINC fa que el programa no segueixi fins que s'hagi completat la funció.
Sempre que fas una function ASINC has de posar AWAIT a dins. Serveixen perquè la funció no passi a la següent fins que aquesta no s'hagi resolt.
 */

// LEVEL 1
//	EXERCISE 1 i 2
const apiUrl = "https://icanhazdadjoke.com"; // Crida a l'API, i guarda la crida a APIURL
const header = {
    method: 'GET',
    headers: {
    	'Accept': 'application/json' // El HEADER que indica les dades que necessita de l'API.
    }
}

const showJoke = async () => { 
    const response = await fetch(apiUrl,header); // Obté un "resguard" del la info que li has demanat.
    const data = await response.json(); // Converteix la info de la API en JSON (pq la pugi llegir el programa).
    
    const nextJoke = data.joke  // Agafa el contingut concret de l'obj (amb la key), l'acudit.
	console.log(nextJoke); // Mostra l'acudit.
		let currentJoke = nextJoke  // Guardo l'acudit en una variable. ( EXERCISE 2 )
	currentJoke = document.getElementById('currentJoke')?.innerHTML; // El mostro a la pantalla. ( EXERCISE 2 )
	return nextJoke // Retorna el contingut de text de joke (a través de newJoke)
	
}

EXERCISE 3 (tot el codi)
//	LEVEL 1
// Crida a la funció
const apiUrl = 'https://icanhazdadjoke.com';
const header: any = {
	method: 'GET',
	headers: {
		Accept: 'application/json'
	}
};

// Variables
let currentJoke: string = "" // Declara que currentJoke serà un string (on anirà l'acudit)
const reportAcudits: { joke: string; score: number; date: string }[] = []; // Crea un array d'objectes amb les keys indicades.
const d = new Date() // Demana la data actual
let dateToday = d.toISOString() // Converteix la data en ISO


// Mostrar acudit
const showJoke = async () => {
	const response = await fetch(apiUrl, header);  // Obté un "resguard" del la info que li has demanat.
	const data = await response.json();  // Converteix la info de la API en JSON (pq la pugi llegir el programa).
	currentJoke = data.joke; // Agafa el contingut concret de l'obj (amb la key), l'acudit.
	console.log(currentJoke);
	document.getElementById('currentJoke')?.innerHTML = currentJoke  // Mostra l'acudit al DOM. ( EXERCISE 2 ).
	return currentJoke; // Retorna el contingut de text de joke (a través de newJoke).
	
};

// Puntuar acudit i guardar en nou array
const evaluateJoke = (score: number) => { // Crida a la funció i li passa per paràmetres un num.
	let report = { // Crea l'objecte amb els values corresponents al nou acudit.
	  joke: currentJoke, // Afegeix l'string de l'acudit
	  score: score, // Afegeix a l'score la nota (que li ve dels botons de colors).
	  date: dateToday, // Afegeix la data
	};
	reportAcudits.push(report); // Afegeix l'objecte (acudit puntuat amb data) a l'array d'obj.
	console.log(reportAcudits); 
  };

const showJoke = async () => {
	const response = await fetch(meteoApiUrl, meteoHeader);
	const data = await response.json();
	currentJoke = data.joke; ---- const {joke} = data;
	console.log(currentJoke);
	document.getElementById('currentJoke')?.innerHTML = currentJoke
	return currentJoke;
};

    const {joke} = data;
    //console.log(joke); Exercise 1
    
    const nextJoke = randomJoke.textContent = `"${joke}"`;
    return nextJoke
}

// LEVEL 2
// Crida a l'API del temps
const meteoApiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=41.3828939&lon=2.1774322&appid=b806aa9af1c4278561101712e94879ed&lang=ca&units=metric'

// Extreure les dades i mostrar-les
const showMeteo = async () => { // Crida a la funció
	const response = await fetch(meteoApiUrl); // Apunta a la API i als headers concrets.
	const data = await response.json(); // Converteix la info que em dona en json.
	
	let temp = data.main.temp // Agafa la temperatura del json (la info del dia).
	
	let temperature = `${temp} ºC` // Guarda la temperatura amb el símbol de graus.
	let meteoArray = data.weather // Busca dins l'obj el temps.
	let meteoData = meteoArray[0] // Busca dins del temps (que és un array) per posició.
	let meteo = meteoData.description // Busca dins l'obj que hi ha dins l'array, la descripció.
	let weather = `${meteo}, ${temperature}` // Ho converteix en una "frase".
	document.getElementById('meteoToday')?.innerHTML = weather // Mostrar per pantalla.
return weather
	
};




