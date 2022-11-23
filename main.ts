//	EXERCISE 1
const apiUrl = 'https://icanhazdadjoke.com';
const header: any = {
	method: 'GET',
	headers: {
		Accept: 'application/json'
	}
};

const showJoke = async () => {
	const response = await fetch(apiUrl, header);
	const data = await response.json();

	const nextJoke = data.joke;
	console.log(nextJoke);
	return nextJoke;
};
