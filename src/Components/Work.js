import React from 'react';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import { CustomContainer, CustomImg, CustomP } from './Profile/ProfileElements';

import ImgReact from '../Components/Data/react.PNG';
import ImgWordpress from '../Components/Data/wordpress.jpg';
import ImgRstudio from '../Components/Data/RStudio.png';

//testing slider
const MyCollection = [
  {
    label: 'React Js',
    imgPath: ImgReact,
  },
  {
    label: 'Second Picture',
    imgPath: ImgWordpress,
  },
  {
    label: 'Third Picture',
    imgPath: ImgRstudio,
  },
];

const Work = (props) => {
  const CollectionSize = MyCollection.length;
  const theme = useTheme();
  const [index, setActiveStep] = React.useState(0);

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const goToPreviousPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  //JavaScript code
  const onClickWordpress = (c) => {
    c.preventDefault();
    console.log('this link was clicked');
    window.location.href = 'https://wordpress.garcia-dev.es/';
  };

  const onClickReact = (c) => {
    c.preventDefault();
    console.log('this link was clicked');
    window.location.href =
      'https://github.com/natagr23/my-portafolio-with-react';
  };

  const onClickR = (c) => {
    c.preventDefault();
    console.log('this link was clicked');
    window.location.href =
      'https://github.com/natagr23/Rainfall-runnoff-modelling-with-BROOK90-in-R-in-catchment-area-in-Colombia';
  };

  return (
    <div>
      <div className="container mt-2">
        <CustomContainer>
          <hr />
          <div className="d-flex justify-content-center">
            <h2 style={{ color: props.theme.text }}>Portafolio</h2>
          </div>
          <hr />
          <button className="button">
            <a
              href="https://wordpress.garcia-dev.es/"
              onClick={onClickWordpress}
            >
              WordPress
            </a>
          </button>
          <button className="button">
            <a
              href="https://github.com/natagr23/my-portafolio-with-react"
              onClick={onClickReact}
            >
              React JS
            </a>
          </button>
          <button className="button">
            <a
              href="https://github.com/natagr23/Rainfall-runnoff-modelling-with-BROOK90-in-R-in-catchment-area-in-Colombia"
              onClick={onClickR}
            >
              R
            </a>
          </button>
          <div>
            {/* <CustomP>How to Create Image Slider in ReactJS?</CustomP> */}
            <div
              style={{
                maxWidth: 1000,
                flexGrow: 2,
              }}
            >
              <Paper
                square
                elevation={0}
                style={{
                  height: 50,
                  display: 'flex',
                  paddingLeft: theme.spacing(4),
                  backgroundColor: theme.palette.background.default,
                  alignItems: 'center',
                }}
              >
                <Typography>{MyCollection[index].label}</Typography>
              </Paper>

              <img
                src={MyCollection[index].imgPath}
                style={{
                  height: 255,
                  width: '100%',
                  maxWidth: 400,
                  display: 'block',
                  overflow: 'hidden',
                }}
                alt={MyCollection[index].label}
              />

              <MobileStepper
                variant="text"
                position="static"
                index={index}
                steps={CollectionSize}
                nextButton={
                  <Button
                    size="small"
                    onClick={goToNextPicture}
                    disabled={index === CollectionSize - 1}
                  >
                    Next
                    {theme.direction !== 'rtl' ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                  </Button>
                }
              />

              <MobileStepper
                variant="text"
                position="left"
                index={index}
                steps={CollectionSize}
                nextButton={
                  <Button
                    size="small"
                    onClick={goToPreviousPicture}
                    disabled={index === 0}
                  >
                    Previous
                    {theme.direction !== 'rtl' ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
              />
            </div>
          </div>
        </CustomContainer>
      </div>
    </div>
  );
};
export default Work;
