const GetWeather = nome => {
	const keyID = '276028a84e6f633afbd7b4e1d68552bf';

	let dados = "";

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nome}&appid=${keyID}&units=metric`)
	.then(res => res.json())
	.then(data => {
		const {main, name, sys, weather} = data;
		dados = {main, name, sys, weather};
	});
	
	console.log(dados);
	return dados;
}

export default GetWeather;