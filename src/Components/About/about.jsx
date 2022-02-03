import React from "react";
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from "react-bootstrap";
import "../About/style.css";
import Picture from "../../Components/About/port.jpg"

function About() {
    return (

        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image id="picture" src={Picture} rounded />
                </Col>

                <div class="row">
                    <div class="col s12 m6">
                        <div class="card #212121 grey darken-4">
                            <div class="card-content white-text">
                                <span class="card-title">About Me</span>
                                <p> Full Stack Web Developer with 3+ years of experience debugging, designing and constructing mobile friendly applications. Currently educating 30+ junior developers; making them marketable assets to the Web Development community. Developed more than 12 responsive & cross-browser compatible websites, using React & Javascript. Enthusiastic about crafting the ideal websites for businesses, startups and companies to create both a positive and energetic experience.</p>
                            </div>
                        </div>
                    </div>
                </div>



            </Row>
        </Container >

    )
}

export default About;