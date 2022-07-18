import React from "react";
import Card from "./Card";

import NewsCard from "./NewsCard";

function Container(){
    let coinName = "Bitcoin";
    let price = "24USD"


    const newsHeading = "As Bitcoin price falls, is cryptocurrency still worth buying?";
    const newsDescription = "Archit Gupta, Founder & CEO Clear says the price of Bitcoin, the first and most prominent crypto, rose to $68,000 in November 2021. Shortly after, it nearly halved in price to $35,000 and continued to decline. Today it stands at around $21,000.";
    const newsProvider = "The times of india";

    return (
        <div id="exercise2">
            <Card name={coinName} price={price}/>
            <hr></hr>
            <NewsCard heading={newsHeading} provider={newsProvider} />
        </div>
    )
}
export default Container;