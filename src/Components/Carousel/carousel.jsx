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
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems);
        instances()
      });
    

    }
        
//   componentDidMount() {
//     document.addEventListener("DOMContentLoaded", function () {
//       var elems = document.querySelectorAll(".carousel");
//       M.Carousel.init(elems, {
//         indicators: true,
//         duration: 300,
//         autoPlay: true
//       });
//       let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
//         slideTime = 1000,
//         activeClass = "active";

//       setInterval(() => {
//         indicatorItems.forEach(el => {
//           if (el.classList.contains(activeClass)) {
//             M = el.nextElementSibling;
//             if (M == null) {
//               indicatorItems[0].click();
//             } else {
//               M.click()
//             }
//           }
//         });
//       }, slideTime);
//     });
//   }

  render() {
    return (

      <Container>
        <Row>
          <h1 class="text">Languages
          </h1>
          <div>

            <div class="carousel">
              <a href="16" class="carousel-item">
                <img alt="chai Img" src={Chai} />
              </a>
              <a href="15" class="carousel-item">
                <img alt="css Img" src={css} />
              </a>
              <a href="14" class="carousel-item">
                <img alt="express Img" src={express} />
              </a>
              <a href="13" class="carousel-item">
                <img alt="firebase Img" src={firebase} />
              </a>
              <a href="12" class="carousel-item">
                <img alt="javascript Img" src={javascript} />
              </a>
              <a href="11" class="carousel-item">
                <img alt="materialize Img" src={materialize} />
              </a>
              <a href="10" class="carousel-item">
                <img alt="m Img" src={mongo} />
              </a>
              <a href="9" class="carousel-item">
                <img alt="se Img" src={mysql} />
              </a>
              <a href="8" class="carousel-item">
                <img alt="n Img" src={node} />
              </a>
              <a href="7" class="carousel-item">
                <img alt="r Img" src={react} />
              </a>
              <a href="6" class="carousel-item">
                <img alt="s Img "src={sass} />
              </a>
              <a href="5" class="carousel-item">
                <img alt="s Img" src={sequelize} />
              </a>
              <a href="4" class="carousel-item">
                <img alt="html Img" src={html} />
              </a>
              <a href="3" class="carousel-item">
                <img alt="storybook Img"  src={storybook} />
              </a>
              <a href="2" class="carousel-item">
                <img alt="Bootstrap Img" src={bootstrap} />
              </a>
              <a href="1" class="carousel-item">
                <img alt="Carousel Img" src={chakira} />
              </a>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Caro;