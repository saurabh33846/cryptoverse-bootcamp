# Exercise 2 -  Introduction to State and and List rendering in react
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

 - Go to file **Exercise2/Container.js** and add create a variable with value  
	 - `const  newsDescription = "Archit Gupta, Founder & CEO Clear says the price of Bitcoin, the first and most prominent crypto, rose to $68,000 in November 2021. Shortly after, it nearly halved in price to $35,000 and continued to decline. Today it stands at around $21,000.";`
 - Paas this variable as prop named **description** to NewsCard Component in the following way.
	 - `<NewsCard  heading={newsHeading}  provider={newsProvider}  description = {newsDescription}  />`
 - Go to file **Exercise2/NewsCard.js**, and add the description to it on the description block
	 - `<div className={styles.cardContent}> <p> {description} </p></div>`
 - Test if news Description is showing on screen.
 - Go to file **Exercise2/NewsCard.js**,  and apply container class to top level div.
	 - `<div classname = {styles.container}  role="button"> ....`
	 - This should bring up the **red** border around news card.
 - Go to file **Exercise2/NewsCard.module.css**, and change the font-size for class **cardFooter**  to **16px**
 - `.cardFooter{ font-size:16px; }`

## input 
![enter image description here](../images/exercise2_input.png)
## Expected Output
At the end of this exercise your output on browser should look like this 
![enter image description here](../images/exercise2_output.png)
   


## Running Test cases

To verify your output run the following command in the root folder of your directory `npm run test`
