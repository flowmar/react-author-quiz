import React, {Component} from "react";
import Book from "./Book.jsx";
import "./App.css";
import _ from "lodash";
import routie from "./libs/routie.js";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.handleBookSelected = this
      .handleBookSelected
      .bind(this);
    this.handleContinue = this
      .handleContinue
      .bind(this);
    this.state = _.extend({
      bgClass: "neutral",
      showContinue: false
    }, this.props.data.selectGame());
  }
  handleBookSelected(title) {
    var isCorrect = this
      .state
      .checkAnswer(title);
    this.setState({
      bgClass: isCorrect
        ? "pass"
        : "fail",
      showContinue: isCorrect
    });
  }
  handleContinue() {
    this.setState({bgClass: "neutral", showContinue: false});
    this.setState(this.props.data.selectGame());
  }
  handleAddGame() {
    routie('add');
  }
  render() {
    return (
      <div className="container-fluid bg-unique p-2 z-depth-3">
        <div className="row">
          <div className="col-4 text-center">
            <img
              src={this.state.author.imageUrl}
              alt={this.state.name}
              className="authorimage img-fluid z-depth-1-half"/>
          </div>
          <div className="col-7 text-center">
            {this
              .state
              .books
              .map(function (b) {
                return (<Book onBookSelected={this.handleBookSelected} key={b} title={b}/>);
              }, this)}
          </div>
          <div className={"col-1 " + this.state.bgClass}/>
        </div>
        <br/>
        <br/> {this.state.showContinue
          ? (
            <div className="row text-center">
              <div className="col ml-3">
                <input
                  onClick={this.handleContinue}
                  type="button"
                  className="btn btn-success"
                  value="Continue"/>
              </div>
            </div>
          )
          : <span></span>}
        <div className="row">
          <div className="col">
            <input
              onClick={this.handleAddGame}
              id="addGameButton"
              type="button"
              value="Add Game"
              className="btn btn-warning"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;