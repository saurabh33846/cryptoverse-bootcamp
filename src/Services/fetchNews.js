import { newsApiHeaders } from "./utils";


export const fetchNews = async () => {
	const response = await fetch(process.env.REACT_APP_HOST_NEWS + `?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=12`, { headers: newsApiHeaders });
	try {
		const data = await response.json();
		return data;
	} catch (err) {
		console.error(err);
	}
}