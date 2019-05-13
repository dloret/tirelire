import React from "react";

export default class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0
    };
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleAddClick = e => {
    if (this.props.unit === "centime") {
      this.props.addToBalance((this.state.inputValue * this.props.value) / 100);
    } else {
      this.props.addToBalance(this.state.inputValue * this.props.value);
    }
  };

  handleSubstractClick = e => {
    if (this.props.unit === "centime") {
      this.props.substractFromBalance(
        (this.state.inputValue * this.props.value) / 100
      );
    } else {
      this.props.substractFromBalance(this.state.inputValue * this.props.value);
    }
  };

  render() {
    const { type, image, value, unit } = this.props;
    return (
      <article className={"currency " + type}>
        <img
          src={process.env.PUBLIC_URL + image}
          alt={value + " " + unit}
          style={{ maxHeight: "70px" }}
        />
        <input
          type="number"
          min="0"
          name={value + "-" + unit}
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddClick}>+ : Ajouter</button>
        <button onClick={this.handleSubstractClick}>- : Soustraire</button>
      </article>
    );
  }
}
