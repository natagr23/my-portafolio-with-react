import { render } from '@testing-library/react';
import React, { useState } from 'react';

//import components

const PortafolioItems = (props) => {
    //JavaScript code
    const onLinkClick = (c)=>{
        c.preventDefault();
      console.log('this link was clicked');
      window.location.href='https://wordpress.garcia-dev.es/';
    };

    

    return (
        <div>
          
            <button><a href='https://wordpress.garcia-dev.es/' onClick={onLinkClick}>{props.me1}</a></button>
            
           
                <button>{props.me2}</button>
                <button>{props.me3}</button>
           
        </div>
    )

};

export default PortafolioItems;