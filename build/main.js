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
// Crida a la funció
const apiUrl = 'https://icanhazdadjoke.com';
const header = {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    }
};
// Declarar de les variables
let currentJoke = "";
const reportAcudits = [];
const d = new Date();
let dateToday = d.toISOString();
// Mostrar acudit
const showJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const response = yield fetch(apiUrl, header);
    const data = yield response.json();
    currentJoke = data.joke;
    console.log(currentJoke);
    (_a = document.getElementById('currentJoke')) === null || _a === void 0 ? void 0 : _a.innerHTML = currentJoke;
    return currentJoke;
});
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
    var _b;
    const response = yield fetch(meteoApiUrl);
    const data = yield response.json();
    let temp = data.main.temp;
    let temperature = `${temp} ºC`;
    let meteoArray = data.weather;
    let meteoData = meteoArray[0];
    let meteo = meteoData.description;
    let weather = `${meteo}, ${temperature}`;
    (_b = document.getElementById('meteoToday')) === null || _b === void 0 ? void 0 : _b.innerHTML = weather;
    return weather;
});
