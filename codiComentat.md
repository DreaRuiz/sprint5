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


//	EXERCISE 1
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
	return nextJoke // Retorna el contingut de text de joke (a través de newJoke)
	
}



