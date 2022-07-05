# Exercise 2 -  Props and Style addition to News Card Component
## Objective 
There are 2 Objective you have to achieve to complete this exercise

 - Adding a description prop in NewsCard Component, to show the news description in NewsCard.
 - Adding missing classes and styling in NewsCard.
After completion of this exercise you will be able to :
	 - Add props to React component.
	 - Apply Styling to your custom component.

## Steps

 - Go to file **Container.js** and add create a variable with value `"This is news Description";` 
	 - `const  newsDescription = "This is news Description";`
 - Paas this variable as prop named **description** to NewsCard Component.
	 - `<NewsCard  heading={newsHeading}  provider={newsProvider}  description = {newsDescription}  />`
 - Test if news Description is showing on screen.
 - Go to file **NewsCard.js**,  and apply class container to top level div.
	 - `<div classname = {styles.container}  role="button"> ....`
	 - This should bring up the **red** border around news card.
 - Go to file **NewsCard.module.css**, and change the font-size for class **cardFooter**  to **16px**
 - `.cardFooter{ font-size:16px; }`

## Expected Output
At the end of this exercise your output on browser should look like this 
![enter image description here](https://github.com/saurabh33846/cryptoverse-bootcamp/blob/part1/src/images/exercise2_output.png)
   


## Running Test cases

To verify your output run the following command in the root folder of your directory `npm run test`