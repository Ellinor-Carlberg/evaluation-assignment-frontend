import React, { Component } from "react";
import "./MyForm.css";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardname: "",
      cardnumber: null,
      CVV: null,
      Year: null,
      Month: null,
      errormessage1: "",
      errormessage2: "",
      errormessage3: "",
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err1 = "";
    let err2 = "";
    let err3 = "";
    if (nam === "cardnumber") {
      if (val != "" && !Number(val)) {
        err1 = <h5>Please fill in a valid cardnumber</h5>;
      }
    }
    if (nam === "CVV") {
      if (val != "" && !Number(val)) {
        err2 = <h5>Please fill a valid CVV number(3 digits)</h5>;
      }
    }
    if (nam === "Year") {
      if (val != "" && !Number(val)) {
        err3 = <h5>Please fill in the Year(4 digits)</h5>;
      }
    }
    this.setState({ errormessage1: err1 });
    this.setState({ errormessage2: err2 });
    this.setState({ errormessage3: err3 });
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <form>
        <h4>ENTER PAYMENT INFO</h4>
        <p>Owner:</p>
        <input type="text" name="cardname" onChange={this.myChangeHandler} />
        <p>Card Number:</p>
        <input type="text" name="cardnumber" onChange={this.myChangeHandler} />
        {this.state.errormessage1}
        <p>CVV:</p>
        <input type="text" name="CVV" onChange={this.myChangeHandler} />
        {this.state.errormessage2}
        <p>Month:</p>
        <select onChange={this.myChangeHandler} name="Month">
          <option value="Jan">Januari</option>
          <option value="Feb">Februari</option>
          <option value="Mar">March</option>
          <option value="Apr">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="Aug">August</option>
          <option value="Sep">September</option>
          <option value="Oct">October</option>
          <option value="Nov">November</option>
          <option value="Dec">December</option>
        </select>
        <p>Year:</p>
        <input type="text" name="Year" onChange={this.myChangeHandler} />
        {this.state.errormessage3}
      </form>
    );
  }
}
export default MyForm;

/* 
  ReactDOM.render(<MyForm />, document.getElementById('root')); */
