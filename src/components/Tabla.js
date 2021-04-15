import React from 'react'

export default function Tabla({ image, name, symbol, price, volume, priceChange }) {
    return (
        <div className="crypto-table">
            <div className="crypto-row">
                <div className="crypto">
                    <img src={`https://messari.io/asset-images/${image}/32.png?v=2`} alt="cryptocurrency" />
                    <h1>{name}</h1>
                    <p className="crypto-symbol">{symbol}</p>
                </div>
                <div className="crypto-data">
                    <p className="crypto-price">{(price*0.85).toLocaleString()}€</p>
                    <p className="crypto-volume">{(volume*0.85).toLocaleString()}€</p>
                    {
                    priceChange < 0 ? (<p className="crypto-percent red">{priceChange.toFixed(2)}%</p>) :
                    (<p className="crypto-percent green">+{priceChange.toFixed(2)}%</p>)
                    }
                </div>
            </div>
        </div>
    )
}
