import axios from 'axios';
import { useState } from "react";

const GetWeather = nome => {
	const keyID = '276028a84e6f633afbd7b4e1d68552bf';

	const [dados, setDados] = useState([]);

	axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${nome}&appid=${keyID}&units=metric`)
		.then(res => {
			setDados(res.data);
		});

	return dados;
}

export default GetWeather;