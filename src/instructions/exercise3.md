# Exercise 3 -  Introduction to State and and List rendering in react
## Objective 
Till Now we are rendering Coin Card components as a list. 
Complete rendering of News Card Component, same way as we have rendered Coin Card.
There are 2 Objective you have to achieve to complete this exercise

 - Adding News State in NewsCard component using useState and useEffect hooks.
 - Rendering News List in Top News Section

After completion of this exercise you will be able to :
	 - Add state using useState hook in your component.
	 - Rendering List from array in react.

## Steps

 - Go to file **App.js** and import **Exercise3/Container**
    -`import Container from "./Exercise3/Container";` 

 - Go to file **Exercise3/Container.js**, on the top you will find commented code to import **NewsCard** Component and **news* (newsData). Uncomment that.
	- ```import NewsCard from "./NewsCard"; import news from "../MockData/News.json";```

 - Initialise news List in a State, as the following way.
     - `const [newsList, setNewsList] = useState([]);`
 - Attach a onClick listner on **Show News** button, and set the news state on click of Show News Button
	 - `setNewsList(news)`
 - In the second div, you will find commented code to loop over **newsList** to render newsCard list, uncomment that code.
     - ```newsList.map((newsData)=>{
                         return <NewsCard heading={newsData.name} 
                         providerName = {newsData.providerName}
                          datePublished={newsData.datePublished} 
                          />
                    })```
 - There are some props missing in **NewsCard**, add props **imageUrl** **description** **thumbnailURL** in the following way.
 - ```newsList.map((newsData)=>{
                         return <NewsCard heading={newsData.name} 
                         imageUrl ={newsData.imageUrl}
                         description = {newsData.description}
                         thumbnailURL = {newsData.thumbnailURL}
                         providerName = {newsData.providerName}
                          datePublished={newsData.datePublished} 
                          />
                    })```

## Expected Output
At the end of this exercise your output on browser should look like this 
![enter image description here](../images/exercise3_output.png)
   
## Stretch Goals of Part1

### Challenge 1.
If you have completed this exercise, you can try to implement Searching Functionality in the bitcoin list.
- We have given you a file at location `MockData/fullCoin.json`, which contains 50 bitcoin data. Do the following steps to complete the functionality:
-   Import `MockData/fullCoin.json` in your `Exercise3/Container` file to render coin data.
- Implement a search functionality which should have a following feature:
    - A Search Box where user can type the Search Keyword.
    - A Button to trigger search.
    - Search Should be based on substring search on the coin name (all the coins name which contain search keyword as substring should be present in the result).

### Challenge 2.
Implement a Sorting functionality based on Market-cap, Price, in both ascending and descending order, having following specifications:
- Should have 2 dropdown, 1st one to select sort criterion (Price, Market Cap). 
- 2nd one should decied the sorting order( ascending or descending).


## Running Test cases

To verify your output run the following command in the root folder of your directory `npm run verify-3`
