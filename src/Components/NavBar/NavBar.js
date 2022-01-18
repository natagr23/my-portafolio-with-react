import React from 'react';
import { Link } from 'react-router-dom';
import Switch from '../Switch/Switch';
import { SwitchContainer, SwitchWrapper } from '../Switch/SwitchElements';
import { CustomButton } from './NavBarElements';

import { BsFillMoonFill, BsSun } from 'react-icons/bs';

const NavBar = (props) => {
  let icon =
    props.theme === 'light' ? (
      <BsSun size="30" />
    ) : (
      <BsFillMoonFill size="30" color="white" />
    );

  let legend =
    props.theme === 'light' ? (
      <h5>Light Mode</h5>
    ) : (
      <h5 style={{ color: '#fff' }}>Dark Mode</h5>
    );

  return (
    <>
      <div className="container mt-2">
        <div className="d-flex justify-content-center">
          <SwitchContainer>
            <SwitchWrapper>
              <table>
                <tbody>
                  <tr>
                    <td>{legend}</td>
                    <td>
                      <Switch theme={props.theme} setTheme={props.setTheme} />
                    </td>
                    <td>{icon}</td>
                  </tr>
                </tbody>
              </table>
            </SwitchWrapper>
          </SwitchContainer>
        </div>

        <div className="d-flex justify-content-center">
          <Link to="/">
            <CustomButton>Natalia García Rosas</CustomButton>
          </Link>
          <Link to="/work">
            <CustomButton>Work</CustomButton>
          </Link>
          <Link to="/contact">
            <CustomButton>Get in Touch</CustomButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
