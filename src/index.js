import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quiz from "./Quiz";
// eslint-disable-next-line
import Book from "./Book.jsx";
import _ from "lodash";
import routie from "./libs/routie.js";
import AddGameForm from "./AddGameForm.jsx";
import About from "./About.jsx";

var data = [
  {
    name: "J.K. Rowling",
    imageUrl: "./images/jkrowling.jpg",
    imageAttribution: "Wikimedia Commons",
    books: ["Harry Potter and the Sorcerer's Stone", "Fantastic Beasts and Where to Find Them", "The Casual Vacancy"]
  }, {
    name: "Shakespeare",
    imageUrl: "./images/shakespeare.jpg",
    imageAttribution: "Wikimedia Commons",
    books: ["A Midsummer Night's Dream", "Hamlet", "Macbeth"]
  }, {
    name: "Dr. Seuss",
    imageUrl: "./images/drseuss.jpg",
    imageAttribution: "Wikimedia Commons",
    books: ["The Cat in the Hat", "Green Eggs and Ham", "Oh, The Places You'll Go!"]
  }, {
    name: "Dan Brown",
    imageUrl: "./images/danbrown.jpg",
    imageAttribution: "Wikimedia Commons",
    books: ["Angels and Demons", "The Da Vinci Code", "The Solomon Key"]
  }
];

data.selectGame = function () {
  var books = _.shuffle(this.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, [])).slice(0, 4);

  var answer = books[_.random(books.length - 1)];

  return {
    books: books,
    author: _.find(this, function (author) {
      return author
        .books
        .some(function (title) {
          return title === answer;
        });
    }),
    checkAnswer: function (title) {
      return this
        .author
        .books
        .some(function (t) {
          return t === title;
        })
    }
  };
};

data.checkAnswer = function (title) {
  return this
    .author
    .books
    .some(function (t) {
      return t === title;
    })
};

routie({
  '': function () {
    ReactDOM.render(
      <div>
        <Quiz data={data} />{" "}
        <br />
      </div>, document.getElementById("root"));
  },
  'add': function () {
    ReactDOM.render(
      <AddGameForm onGameFormSubmitted={this.handleAddFormSubmitted} />, document.getElementById("root"));
  }
});

function handleAddFormSubmitted(data) {
  var quizData = [
    {
      imageUrl: data.imageUrl,
      books: [...data.books]
    }
  ];
  quizData.selectGame = data.selectGame;
  ReactDOM.render(
    <Quiz data={quizData} onGameFormSubmitted={this.handleAddFormSubmitted} />, document.getElementById('root'))
}

export default function getRefs(component) {
  var result = {};
  Object
    .keys(component.refs)
    .forEach(function (refName) {
      result[refName] = component.refs[refName].value
    });
  return result;
}