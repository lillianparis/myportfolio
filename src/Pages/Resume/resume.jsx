import React from 'react';
import PDF from "../PDF/2022resume.pdf";
import "../Resume/style.css";



const Resume = () => {
    return (
        <>
            <div>
                
                <iframe title="Resume" src={PDF} height="1000" width="1300" ></iframe>
            </div>
        
              <div className = "App">
          <a class="hero" href = {PDF} target = "_blank">Download PDF</a>
        </div>
        </>
    );
};

export default Resume;