import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import createReactClass from 'create-react-class';
import './App.css';
import axios from 'axios';



var Screen = createReactClass({
    render: function() {
      return (
        <div id="display">
          <span className="clean" onClick={this.props.onClickClean}>x</span>
          {this.props.displayText}
        </div>
      );
    }
  });
  
  var Inputs = createReactClass({
    render: function() {
      return (
        <div id="inputs">
          <Numbers
            onClick={this.props.onClickOperando}
            onClickTotal={this.props.onClickOperador}
          />
          <Operations onClick={this.props.onClickOperador} />
        </div>
      );
    }
  });
  
  var Numbers = createReactClass({
    getInitialState: function() {
      return {
        buttons: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]
      };
    },
    render: function() {
      var buttonElements = [];
      for (var i = 0; i < this.state.buttons.length; i++) {
        buttonElements.push(
          <Button label={this.state.buttons[i]} onClick={this.props.onClick} />
        );
      }
      return (
        <div id="numbers">
          {buttonElements}
          <Button
            label="="
            onClick={this.props.onClickTotal}
            className="greenBtn"
          />
        </div>
      );
    }
  });

  var Operations = createReactClass({
    getInitialState: function() {
      return {
        buttons: ["+", "-", "/", "x", "exp", "raiz"]
      };
    },
    render: function() {
      var buttonElements = [];
      for (var i = 0; i < this.state.buttons.length; i++) {
        buttonElements.push(
          <Button label={this.state.buttons[i]} onClick={this.props.onClick} />
        );
      }
      return <div id="operations">{buttonElements}</div>;
    }
  });
  
  var Button = createReactClass({
    render: function() {
      var classes = ["defaultButton"];
      classes.push(this.props.className);
      return (
        <button
          type="button"
          className={classes.join(" ")}
          onClick={e => this.props.onClick(e, this.props.label)}
        >
          {this.props.label}
        </button>
      );
    }
  });
  
const expo=(x, n)=>{
  var result=x;
        if(n===0)
    {
        result =0;
    }
    else
    {
         for (let i=1; i<n; i++)
     {
     result *=x;
     }
 return result;
 }
}



  var Container = createReactClass({
    getInitialState: function() {
      return {
        operando: "",
        operador: "",
        display: "0",
        resultDisplayed: false
      };
    },
    onClickOperando: function(e, label) {
      if (
        this.state.display == "0" ||
        isNaN(this.state.display) ||
        this.state.resultDisplayed
      ) {
        var display = label;
        this.setState({ resultDisplayed: false });
      } else {
        var display = this.state.display + label;
      }
  
      this.setState({ display: display });
    },
    onClickOperador: function(e, label) {
      if (this.state.operador.length > 0) {
        this.calculate();
        if (label == "=") {
          this.setState({
            resultDisplayed: true,
            operador: ""
          });
        } else {
          this.setState({
            resultDisplayed: true,
            operador: label
          });
        }
      } else {
        this.setState({
          operando: this.state.display,
          operador: label,
          display: label
        });
      }
    },
    onClickClean: function() {
      this.setState(this.getInitialState);
    },
    calculate: function() {
      var displayResult;
      switch (this.state.operador) {
        case "+":
          displayResult =
            parseFloat(this.state.operando) + parseFloat(this.state.display);

            axios.post('http://localhost:3000/api/suma', {
              numero1: this.state.operando,
              numero2: this.state.display,
              resul: displayResult
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

          break;
        case "-":
          displayResult =
            parseFloat(this.state.operando) - parseFloat(this.state.display);

            axios.post('http://localhost:3000/api/resta', {
              numero1: this.state.operando,
              numero2: this.state.display,
              resul: displayResult
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

          break;
        case "/":
          displayResult =
            parseFloat(this.state.operando) / parseFloat(this.state.display);

            axios.post('http://localhost:3000/api/division', {
              numero1: this.state.operando,
              numero2: this.state.display,
              resul: displayResult
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

          break;
        case "x":
          displayResult =
            parseFloat(this.state.operando) * parseFloat(this.state.display);

            axios.post('http://localhost:3000/api/multiplicacion', {
              numero1: this.state.operando,
              numero2: this.state.display,
              resul: displayResult
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

          break;
        case "exp":
          displayResult = expo(this.state.operando, this.state.display);

          axios.post('http://localhost:3000/api/expo', {
            numero1: this.state.operando,
            numero2: this.state.display,
            resul: displayResult
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          break;
        case "raiz":
          displayResult = Math.sqrt(this.state.operando);

          axios.post('http://localhost:3000/api/raizc', {
            numero1: this.state.operando,
            numero2: this.state.display,
            resul: displayResult
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


          break;
          
      }
      this.setState({
        operando: displayResult,
        display: displayResult
      });
    },
    render: function() {
      return (
        <div id="container">
          <Screen
            displayText={this.state.display}
            onClickClean={this.onClickClean}
          />
          <Inputs
            onClickOperando={this.onClickOperando}
            onClickOperador={this.onClickOperador}
          />
        </div>
      );
    }
  });

ReactDOM.render(<Container />, document.getElementById("calculadora"));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
