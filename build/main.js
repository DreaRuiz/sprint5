"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//	LEVEL 1
// Declarar de les variables
let currentJoke = "";
const reportAcudits = [];
const d = new Date();
let dateToday = d.toISOString();
// Crida a la funció
const apiUrl = 'https://icanhazdadjoke.com';
const header = {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    }
};
// Mostrar acudit (PRIMERA API - EXERCICI 1)
const showJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const response = yield fetch(apiUrl, header);
    const data = yield response.json();
    currentJoke = data.joke;
    console.log(currentJoke);
    (_a = document.getElementById('currentJoke')) === null || _a === void 0 ? void 0 : _a.innerHTML = currentJoke;
    return currentJoke;
});
// Crida a l'API
const apiJokeUrl = 'https://geek-jokes.p.rapidapi.com/api?format=json';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9f561f8d62msh317d8f745c6a5dbp1fb206jsnb656500f06e9',
        'X-RapidAPI-Host': 'geek-jokes.p.rapidapi.com'
    }
};
// Mostrar acudit (SEGONA API - EXERCICI 5 NIVELL 2)
const showAcudit = () => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const response = yield fetch(apiJokeUrl, options);
    const data = yield response.json();
    currentJoke = data.joke;
    (_b = document.getElementById('currentJoke')) === null || _b === void 0 ? void 0 : _b.innerHTML = currentJoke;
    return currentJoke;
});
// Intercalar els acudits de les dues APIs (EXERCICI 5 NIVELL 2)
function showRandomJoke() {
    let option = Math.floor(Math.random() * 2);
    if (option === 0) {
        showJoke();
    }
    if (option === 1) {
        showAcudit();
    }
}
// Puntuar acudit i guardar en nou array amb data
const evaluateJoke = (score) => {
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
const meteoApiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=41.3828939&lon=2.1774322&appid=b806aa9af1c4278561101712e94879ed&lang=ca&units=metric';
// Extreure les dades i mostrar-les
const showMeteo = () => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const response = yield fetch(meteoApiUrl);
    const data = yield response.json();
    let temp = data.main.temp;
    let temperature = `${temp} ºC`;
    let meteoArray = data.weather;
    let meteoData = meteoArray[0];
    let meteo = meteoData.description;
    let weather = `${meteo}, ${temperature}`;
    (_c = document.getElementById('meteoToday')) === null || _c === void 0 ? void 0 : _c.innerHTML = weather;
    return weather;
});
