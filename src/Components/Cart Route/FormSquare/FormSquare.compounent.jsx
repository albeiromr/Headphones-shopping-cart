import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';

const FormSquare = ({changeTranslate}) => {

  const handleClick = () => {
    changeTranslate('0vw')
  }

    return (
      <div className="form-square">
        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
          className="form-square__back"
          onClick={handleClick}
        />
        <Link to="/confirmation">
          <div className="form-square__forward">
            <p className="form-square__text">Checkout</p>

            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              className="form-square__arrow"
              onClick={handleClick}
            />
          </div>
        </Link>
        <Link to="/confirmation">
          <div className="form-square__next">
            <p className="form-square__text2">Checkout</p>

            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              className="form-square__arrow2"
            />
          </div>
        </Link>
      </div>
    );
};

// component documentation

FormSquare.propTypes = {
  changeTranslate: Proptypes.func.isRequired
  };

export default FormSquare;