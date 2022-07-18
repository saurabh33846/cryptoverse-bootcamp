import { fetchCoins } from "../Services/fetchCoins"

describe('#getCoins() using Promises', () => {
	it('should load coins data', async () => {

		let coinsData = await fetchCoins()
		expect(coinsData.data.coins).toBeDefined()
		expect(coinsData.data.stats).toBeDefined()
		expect(coinsData.data.coins[0].name).toEqual("Bitcoin")
	})
})


describe('#getNews() using Promises', () => {
	it('should load newss data', async () => {
		const data = await fetch("https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=12", {
			headers: {
				"X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
				"X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com"
			}
		})
		console.log(data)
		expect(data).toBeDefined()
		expect(data.name).toEqual('Hochul administration moves to shut gas powered cryptocurrency plant')
	})
})