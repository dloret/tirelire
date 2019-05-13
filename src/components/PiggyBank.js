import React from 'react';

import Currency from './Currency';
import money from '../money_euro';
import '../styles/App.css';

export default class PiggyBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBalance: 0,
    }
  }

  addToBalance = (value) => {
    this.setState({
      currentBalance: this.state.currentBalance + value,
    });
  }

  render() {
    return (
      <div className="App">
        <p>Ta tirelire contient actuellement {this.state.currentBalance} € !</p>
        {
          money.map(currency => <Currency
            key={currency.id}
            value={currency.value}
            type={currency.type}
            unit={currency.unit}
            image={currency.image}
            addToBalance={this.addToBalance}
            />)
        }
      </div>
    );
  }
}