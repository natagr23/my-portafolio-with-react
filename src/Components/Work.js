import { CustomContainer } from './Profile/ProfileElements';
import React from 'react';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

//testing slider
const MyCollection = [
  {
    label: 'First Picture',
    imgPath:
      'https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png',
  },
  {
    label: 'Second Picture',
    imgPath:
      'https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png',
  },
  {
    label: 'Third Picture',
    imgPath:
      'https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png',
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
        </CustomContainer>
      </div>
      <div
        style={{
          marginLeft: '40%',
        }}
      >
        <h2>How to Create Image Slider in ReactJS?</h2>
        <div
          style={{
            maxWidth: 400,
            flexGrow: 1,
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
                disabled={index === CollectionSize + 1}
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
    </div>
  );
};
export default Work;
