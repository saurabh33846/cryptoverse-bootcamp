import React from "react";
import Card from "./Card";

import NewsCard from "./NewsCard";

function Container(){
    let coinName = "Bitcoin";
    let price = "24USD"


    const newsHeading = "As Bitcoin price falls, is cryptocurrency still worth buying?";
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