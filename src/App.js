import React, { useState } from 'react';
import './App.css'
//import components

import PortafolioItems from './Components/PortafolioItems';


const App = (props) => {
//JavaScript code
const experience1 = "WordPress";
const experience2= "React.js";
const experience3= "R";


  return (

    <div className='home'>

    <div className='user'>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#091cc5" fill-opacity="1" d="M0,96L13.3,96C26.7,96,53,96,80,106.7C106.7,117,133,139,160,160C186.7,181,213,203,240,181.3C266.7,160,293,96,320,69.3C346.7,43,373,53,400,74.7C426.7,96,453,128,480,149.3C506.7,171,533,181,560,181.3C586.7,181,613,171,640,176C666.7,181,693,203,720,197.3C746.7,192,773,160,800,138.7C826.7,117,853,107,880,106.7C906.7,107,933,117,960,144C986.7,171,1013,213,1040,234.7C1066.7,256,1093,256,1120,245.3C1146.7,235,1173,213,1200,213.3C1226.7,213,1253,235,1280,218.7C1306.7,203,1333,149,1360,138.7C1386.7,128,1413,160,1427,176L1440,192L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path></svg>
                
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4ac4e2" fill-opacity="1" d="M0,256L0,160L1440,160L1440,0L0,0L0,0Z"></path></svg>
      <p> Web developer |React.js| HTML | CSS | Water Specialist</p>

        <img src="https://media-exp1.licdn.com/dms/image/C5603AQFlsFcPH_uzSA/profile-displayphoto-shrink_800_800/0/1534187932605?e=1645660800&v=beta&t=1JPDrvwaeLqUO6AQrCD3EnkERxIV0wdpS2FuuIOP1BY" alt="user name" />
        <h2>Natalia García</h2>
        <p>I have knowledge in web development (React.js, HTML5, CSS, Javascript). During my master's studies I used meteorological data
          to evaluate a hydrological model using R.  </p>
        
          <h2>Portafolio Items</h2>
        <PortafolioItems me1={experience1}/>
        <PortafolioItems me2={experience2}/>
        <PortafolioItems me3={experience3}/>
     

      <div>
        <div class='row'>
          <div class='column'>
            <a href='https://github.com/natagr23'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
          </div>
          <div class='column'>
            <a href='https://www.linkedin.com/in/nataliagarciarosas/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
          </div>
          <div class='column'>

            <a href='https://twitter.com/natagr'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg></a>
            {/* <div className='researchgate'>
              <a href='https://www.researchgate.net/profile/Natalia-Garcia-18'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ResearchGate_icon_SVG.svg/800px-ResearchGate_icon_SVG.svg.png' alt='researchgate name' ></img></a>
            </div> */}
          </div>


        </div>

      </div>

    </div>

    </div>

  )

};



export default App;

