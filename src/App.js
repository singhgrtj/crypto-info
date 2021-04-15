import './css/App.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Subheader from './components/Subheader';
import Tabla from './components/Tabla';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 2000);
  }, []);

  const fetchData = () => {
    axios.get('https://data.messari.io/api/v1/assets')
      .then(res => {
        setData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="container">
      <Header />
      <Subheader />
      {data.map(d => {
        return <Tabla key={d.id}
                      name={d.name}
                      image={d.id}
                      symbol={d.symbol}
                      volume={d.metrics.marketcap.current_marketcap_usd}
                      price={d.metrics.market_data.price_usd} 
                      priceChange={d.metrics.market_data.percent_change_usd_last_1_hour}
                />
      })}
    </div>
  );
}

export default App;
