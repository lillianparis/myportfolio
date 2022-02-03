import React from "react";
import Typed from 'react-typed';
import { Grid } from "@material-ui/core";
import "../Landing/style.css";
import Caro from "../../Components/Carousel/carousel"

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
              strings={['Hello My Name is Lilli']}
              typeSpeed={40}
            />
            <br />
          </Grid>
  
          <Grid
            container
            justify="center"
            alignItems="center"
          >
            <Typed
              strings={[
                'Full Stack Web Developer',
                'Current Web Development Instructor',
                'U of A Coding Bootcamp Graduate']}
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop >
              <input type="text" />
            </Typed>
          </Grid>
  
        </div>

        <Caro />

        </>

);
};

export default Landing;