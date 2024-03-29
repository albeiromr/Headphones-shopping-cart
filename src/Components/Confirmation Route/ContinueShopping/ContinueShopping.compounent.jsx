import React from "react";
import "./1000-1920px.style.scss";
import "./500-1000px.style.scss";
import "./0-500px.style.scss";
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const ContinueShopping = () => {
  return (
    <Link to='/'>
      <div className="continue-shopping">
        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
          className="continue-shopping__back"
        />
        <p className="continue-shopping__text">Continue Shopping</p>
      </div>
    </Link>
  );
};


export default ContinueShopping;
