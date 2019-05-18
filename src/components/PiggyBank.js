import React from 'react';

import Currency from './Currency';
import money from '../money_euro';
import piggyBank from '../images/piggy_bank.jpg';

// localStorage.clear();

let initialState = JSON.parse(localStorage.getItem('tirelire'));

if (!initialState) {
  initialState = '0';
  localStorage.setItem('tirelire', initialState);
}

export default class PiggyBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBalance: Number(initialState),
    }
  }

  addToBalance = (value) => {
    const newValue = this.state.currentBalance + value;
    localStorage.setItem('tirelire', String(newValue));

    this.setState({
      currentBalance: newValue,
    });
  }

  substractFromBalance = (value) => {
    let newValue = 0;
    if (this.state.currentBalance - value > 0) {
      newValue = this.state.currentBalance - value;
      localStorage.setItem('tirelire', String(newValue));

      this.setState({
        currentBalance: this.state.currentBalance - value
      });
    } else {
      localStorage.setItem('tirelire', '0');
      this.setState({
        currentBalance: newValue,
      });
    }
  }

  deleteState = () => {
    localStorage.removeItem('tirelire');
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Ma tirelire</h1>
          <img src={piggyBank} alt="piggy bank"/>
          {console.log(this.state.currentBalance, typeof this.state.currentBalance)}
          <p>Ta tirelire contient actuellement <strong>{this.state.currentBalance.toFixed(2)} €</strong> !</p>
          <button onClick={this.deleteState}>Effacer</button>
        </header>
        <main>
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
        </main>
      </div>
    );
  }
}