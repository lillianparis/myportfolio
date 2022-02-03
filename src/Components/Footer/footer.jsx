import React from "react";
import "materialize-css";
import "../Footer/footer.css";
// import ParticlesBg from 'particles-bg';
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function footer() {
    return (
      <>
        <footer class="page-footer transparent">
            
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="text">Lillian Paris</h5>
                <p class="text">Full Stack Web Developer</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="text">Check Out More</h5>
                <ul>
                  {/* <li><a class="grey-text text-lighten-3" href="#!"><FontAwesomeIcon icon="fa-brands fa-github" /></a></li> */}
                  <li><a class="text" id="1" href="https://www.linkedin.com/in/lillian-paris-7340401b4/">Linkedin</a></li>
                  <li><a class="text" href="#!">Resume</a></li>
                  <li><a class="text" href="#!">Portfolio</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container" className="center text">
            © 2021 Created By Lillian Paris
            </div>
          </div>
    
        </footer>
      
</>
    )
}

export default footer;