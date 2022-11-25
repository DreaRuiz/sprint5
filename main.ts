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





