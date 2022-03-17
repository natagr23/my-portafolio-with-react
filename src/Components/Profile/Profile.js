import React from 'react';
import { CustomContainer, CustomImg, CustomP } from './ProfileElements';
import img_profile from '../assets/nata_photo.jpg';

const Profile = (props) => {
  return (
    <>
      <CustomContainer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#091cc5"
            fillOpacity="1"
            d="M0,96L13.3,96C26.7,96,53,96,80,106.7C106.7,117,133,139,160,160C186.7,181,213,203,240,181.3C266.7,160,293,96,320,69.3C346.7,43,373,53,400,74.7C426.7,96,453,128,480,149.3C506.7,171,533,181,560,181.3C586.7,181,613,171,640,176C666.7,181,693,203,720,197.3C746.7,192,773,160,800,138.7C826.7,117,853,107,880,106.7C906.7,107,933,117,960,144C986.7,171,1013,213,1040,234.7C1066.7,256,1093,256,1120,245.3C1146.7,235,1173,213,1200,213.3C1226.7,213,1253,235,1280,218.7C1306.7,203,1333,149,1360,138.7C1386.7,128,1413,160,1427,176L1440,192L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
          ></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path
            fill="#4ac4e2"
            fillOpacity="1"
            d="M0,256L0,160L1440,160L1440,0L0,0L0,0Z"
          ></path>
        </svg>
        <hr />

        <CustomP>
          {' '}
          Web developer |React.js| HTML | CSS | Water Specialist
        </CustomP>
        <hr />
        <div className="d-flex justify-content-center">
          <CustomImg src={img_profile} alt="user" />
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <h2 style={{ color: props.theme.text }}>Natalia García</h2>
        </div>
        <hr />

        <CustomP>
          I have knowledge in web development (React.js, HTML5, CSS,
          Javascript). During my master's studies I used meteorological data to
          evaluate a hydrological model using R.{' '}
        </CustomP>
        <hr />
      </CustomContainer>
    </>
  );
};

export default Profile;
