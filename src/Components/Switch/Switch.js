import React, { useState } from 'react';
import {
  SwitchContainer,
  SwitchWrapper,
  SwitchBGC,
  ButtonSwitch,
} from './SwitchElements';

const Switch = (props) => {
  const [position, setPosition] = useState(false);

  const changeMode = () => {
    if (props.theme === 'light') {
      props.setTheme('dark');
      changePosition();
    } else {
      props.setTheme('light');
      changePosition();
    }
  };

  const changePosition = () => {
    setPosition(!position);
  };

  return (
    <>
      <SwitchContainer>
        <SwitchWrapper>
          <SwitchBGC onClick={() => changeMode()}>
            <ButtonSwitch
              onClick={() => changeMode()}
              position={position}
            ></ButtonSwitch>
          </SwitchBGC>
        </SwitchWrapper>
      </SwitchContainer>
    </>
  );
};

export default Switch;
