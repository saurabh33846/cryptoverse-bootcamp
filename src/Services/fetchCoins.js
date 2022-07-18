// Function To Fetch All The coin

import { cryptoApiHeaders } from "./utils";


export const fetchCoins = async () => {
	const response = await fetch(process.env.REACT_APP_HOST + `/coins?limit=10`, { headers: cryptoApiHeaders });
	try {
		const data = await response.json();
		return data;
	} catch (err) {
		console.error(err);
	}
}