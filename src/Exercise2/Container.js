import React from "react";
import Card from "./Card";

import NewsCard from "./NewsCard";

function Container(){
    let coinName = "Bitcoin";
    let price = "24USD"


    const newsHeading = "This is news heading";
    const newsDescription = "This is news Description";
    const newsProvider = "The times of india";

    return (
        <div id="exercise2">
            <Card name={coinName} price={price}/>
            <NewsCard heading={newsHeading} provider={newsProvider} description = {newsDescription} />
        </div>
    )
}
export default Container;