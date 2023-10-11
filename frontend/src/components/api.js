import axios from 'axios';

export const options = {
  method: 'GET',
  url: 'https://open-weather13.p.rapidapi.com/city/delhi',
  headers: {
    'X-RapidAPI-Key': '50b74be4abmsh3612e33a5aa0344p120b8ejsn2a83698e62d4',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
    
	console.log(response.data);
} catch (error) {
	console.error(error);
}

// export {options};