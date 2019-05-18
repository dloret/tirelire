import React from 'react';

import Currency from './Currency';
import money from '../money_euro';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <p>Ta tirelire contient actuellement _ € !</p>
      {
        money.map(currency => <Currency
          id={currency.id}
          value={currency.value}
          type={currency.type}
          unit={currency.unit}
          image={currency.image}
          />)
      }
    </div>
  );
}

export default App;
