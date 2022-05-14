import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Prices(){
    const url = "https://api.nomics.com/v1/currencies/ticker?key=eb3a7d733a1719cd0a2731a28b6c9bedcb052751&per-page=100";
    const [ coinData, setCoinData ] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setCoinData(response.data);
            })
            .catch(err => console.log(err));
    }, [url]);

    if(coinData.length>0){
        return(
            <div>
                <br></br>
                {coinData.map((coin, i) => {
                    return (
                        <div key={i}>
                            <span>{coin.rank}, {coin.symbol}, {coin.price}<hr/></span>
                        </div>
                    )
                })}
            </div>
        )
    }

    return(
        <div>
            <p>Fetching prices...</p>
        </div>
    )
}

export default Prices;