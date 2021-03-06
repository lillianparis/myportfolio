import React from "react";
import Typed from 'react-typed';
import { Grid } from "@material-ui/core";
import { Row, Container } from "react-bootstrap";
import "../Landing/style.css";
import Caro from "../../Components/Carousel/carousel";
import About from "../../Components/About/about";
import DevCard from "../../Components/Cards/cards";
import Footer from "../../Components/Footer/footer";

const Landing = () => {

  return (
    <>
      <div class="page">
        <Grid
          container
          justify="center"
          alignItems="center"
        >

          <Typed
            strings={['Hello My Name is Lillian']}
            typeSpeed={40}
          />
          <br />
        </Grid>

        {/* <Grid
            container
            justify="center"
            alignItems="center"
          >
            <Typed
           
              strings={[
                'Full Stack Web Developer',
                'Web Development Instructor',
                'U of A Graduate']}
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop >
              <input type="text"  class="hello" />
            </Typed>
          </Grid> */}

      </div>
      <Container>
        <Row>
          <Caro />
        </Row>
      </Container>

      <Container>
        <Row>
          <About />
        </Row>
      </Container>

      <Container>
        <Row>
          <DevCard />
        </Row>
      </Container>

      <Footer />
    </>

  );
};

export default Landing;