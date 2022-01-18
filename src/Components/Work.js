import { CustomContainer } from './Profile/ProfileElements';

const Work = (props) => {
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
    </div>
  );
};
export default Work;
