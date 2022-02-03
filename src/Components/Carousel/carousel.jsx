import React, { Component } from "react";
import "../Carousel/style.css"
import 'materialize-css';
import M from "materialize-css";
import Chai from "../Images/chailogo.png";
import css from "../Images/csslogo.png";
import express from "../Images/expresslogo.png";
import firebase from "../Images/firebaselogo.png";
import javascript from "../Images/javascriptlogo.png";
import materialize from "../Images/materializelogo.png";
import mongo from "../Images/mongologo.png";
import mysql from "../Images/mysqllogo.png";
import node from "../Images/nodelogo.png";
import react from "../Images/reactlogo.png";
import sass from "../Images/sasslogo.png";
import sequelize from "../Images/sequelizelogo.png";
import html from "../Images/htmllogo.png";
import storybook from "../Images/storybooklogo.png"
import bootstrap from "../Images/bootstraplogo.png";
import chakira from "../Images/chakiralogo.png";
import { Row, Container } from "react-bootstrap";



export class Caro extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      M.Carousel.init(elems, {
        indicators: true,
        duration: 300,
        autoPlay: true
      });
      let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
        slideTime = 1000,
        activeClass = "active";

      setInterval(() => {
        indicatorItems.forEach(el => {
          if (el.classList.contains(activeClass)) {
            M = el.nextElementSibling;
            if (M == null) {
              indicatorItems[0].click();
            } else {
              M.click()
            }
          }
        });
      }, slideTime);
    });
  }

  render() {
    return (

      <Container>
        <Row>
          <h1 class="text">Languages
          </h1>
          <div>

            <div class="carousel">
              <a class="carousel-item">
                <img src={Chai} />
              </a>
              <a class="carousel-item">
                <img src={css} />
              </a>
              <a class="carousel-item">
                <img src={express} />
              </a>
              <a class="carousel-item">
                <img src={firebase} />
              </a>
              <a class="carousel-item">
                <img src={javascript} />
              </a>
              <a class="carousel-item">
                <img src={materialize} />
              </a>
              <a class="carousel-item">
                <img src={mongo} />
              </a>
              <a class="carousel-item">
                <img src={mysql} />
              </a>
              <a class="carousel-item">
                <img src={node} />
              </a>
              <a class="carousel-item">
                <img src={react} />
              </a>
              <a class="carousel-item">
                <img src={sass} />
              </a>
              <a class="carousel-item">
                <img src={sequelize} />
              </a>
              <a class="carousel-item">
                <img src={html} />
              </a>
              <a class="carousel-item">
                <img src={storybook} />
              </a>
              <a class="carousel-item">
                <img src={bootstrap} />
              </a>
              <a class="carousel-item">
                <img src={chakira} />
              </a>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Caro;