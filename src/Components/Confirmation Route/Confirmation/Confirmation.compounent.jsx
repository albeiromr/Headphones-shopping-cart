import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import Steps from '../Steps/Steps.compounent';


const Confirmation = () => {

    

    return (
        <section className='confirmation'>
          <Steps 
          />
        </section>
    )
};

// component documentation

Confirmation.propTypes = {
    
  };

export default Confirmation;