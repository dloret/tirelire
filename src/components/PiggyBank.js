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

  substractFromBalance = (value) => {
    if (this.state.currentBalance - value > 0) {
      this.setState({
        currentBalance: this.state.currentBalance - value
      });
    } else {
      this.setState({
        currentBalance: 0
      });
    }
  }

  render() {
    return (
      <div className="App">
        <p>Ta tirelire contient actuellement {this.state.currentBalance.toFixed(2)} € !</p>
        {
          money.map(currency => <Currency
            key={currency.id}
            value={currency.value}
            type={currency.type}
            unit={currency.unit}
            image={currency.image}
            addToBalance={this.addToBalance}
            substractFromBalance={this.substractFromBalance}
            />)
        }
      </div>
    );
  }
}