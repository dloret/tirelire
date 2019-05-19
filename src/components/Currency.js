import React from "react";

export default class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
    };
  }

  handleFocus = e => this.setState({inputValue: ''})

  handleChange = e => {
    let userValue = e.target.value;
    if (userValue < 0) {
      userValue = 0;
    } else if (userValue > 100) {
      userValue = 100;
    }
    this.setState({ inputValue: userValue });
  };

  handleAddClick = e => {
    if (this.props.unit === "centime") {
      this.props.addToBalance((this.state.inputValue * this.props.value) / 100);
    } else {
      this.props.addToBalance(this.state.inputValue * this.props.value);
    }
    this.setState({inputValue: 0});
  };

  handleSubstractClick = e => {
    if (this.props.unit === "centime") {
      this.props.substractFromBalance(
        (this.state.inputValue * this.props.value) / 100
      );
    } else {
      this.props.substractFromBalance(this.state.inputValue * this.props.value);
    }
    this.setState({inputValue: 0});
  };

  render() {
    const { type, image, value, unit } = this.props;
    const faceValueRegex = new RegExp(`(${value})`);
    return (
      <article className={"currency " + type + ' ' + unit + value}>
        <img
          src={process.env.PUBLIC_URL + image}
          alt={value + " " + unit}
        />
        <input
          type="number"
          min="0"
          max="100"
          name={value + "-" + unit}
          value={this.state.inputValue}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
        />
        <button onClick={this.handleAddClick} className="add">+</button>
        <button onClick={this.handleSubstractClick} className="sub">-</button>
        <p>{unit === 'centime' ?
          `${this.state.inputValue} x ${value} ${unit}(s) = ${this.state.inputValue * value / 100} euro(s)` :
          `${this.state.inputValue} x ${value} ${unit}(s) = ${this.state.inputValue * value} euro(s)`
        }</p>
        <p>{this.state.inputValue < 2 ?
          '' :
          `${String(value)
              .repeat(this.state.inputValue)
              .split(faceValueRegex)
              .filter(num => num !== '')
              .join(' + ')} = ${this.state.inputValue * value} ${unit}(s)
          `
        }</p>
      </article>
    );
  }
}
