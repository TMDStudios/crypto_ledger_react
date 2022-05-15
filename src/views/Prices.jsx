import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Prices(){
    const url = "https://api.nomics.com/v1/currencies/ticker?key=eb3a7d733a1719cd0a2731a28b6c9bedcb052751&per-page=100";
    const [ coinData, setCoinData ] = useState([]);
    const starOutline = "https://tmdstudios.files.wordpress.com/2022/03/goldstaroutline-1.png";
    const starFull = "https://tmdstudios.files.wordpress.com/2022/03/goldstar.png";
    const upArrow = "https://tmdstudios.files.wordpress.com/2022/03/uparrow-1.png";
    const downArrow = "https://tmdstudios.files.wordpress.com/2022/03/downarrow-1.png";

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
                    const star = i%3===0 ? starFull : starOutline;  //Fix once watchlis it implemented
                    return (
                        <div className='container' key={i}>
                            <div className='flex-1'>
                                <div><img src={star}/></div>
                            </div>
                            <div className='flex-1'>{coin.rank}</div>
                            <div className='flex-1'><object data={coin.logo_url} width="32" height="32"></object></div>
                            <div className='flex-3'>{coin.name} - {coin.symbol}</div>
                            <div className='flex-2'>${coin.price}</div>
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