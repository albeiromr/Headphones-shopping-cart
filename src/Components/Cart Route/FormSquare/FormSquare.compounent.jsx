import React from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import {faCcVisa, faCcMastercard, faCcDiscover, faCcAmex } from '@fortawesome/free-brands-svg-icons';

const FormSquare = ({changeTranslate, total, taxes, shipping, purchase, setWrite, write,}) => {

  const handleClick = () => {
    changeTranslate('0vw')
  }
  const handleClick2 = () => {
    setWrite(true)
  }

    return (
      <div className="form-square">

        <div className="form-square__cards">
          
          <FontAwesomeIcon
            icon={faCcVisa}
            className="form-square__card"
          />

          <FontAwesomeIcon
            icon={faCcMastercard}
            className="form-square__card"
          />

          <FontAwesomeIcon
            icon={faCcDiscover}
            className="form-square__card"
          />

          <FontAwesomeIcon
            icon={faCcAmex}
            className="form-square__card"
          />

        </div>

        {write === true ?
         <form className='form-square__form'>

         <input
           type="text"
           name='name'
           disabled
           className='form-square__name'
           placeholder='Mike Daniels'

           />

           <input
           type="text"
           name='number'
           disabled
           className='form-square__number'
           placeholder='4578 3421 8910 3456'
           
           />

           <div className='form-square__security'>

               <input
               type="text"
               name='date'
               disabled
               className='form-square__date'
               placeholder='04/25'
               
               />

               <input
               type="text"
               name='security'
               disabled
               className='form-square__code'
               placeholder='837'
               
               />

           </div>
       </form> :
         <form className='form-square__form'>

        <input
          type="text"
          name='name'
          className='form-square__name'
          placeholder='Name on card'
          onClick={handleClick2}

          />

          <input
          type="text"
          name='number'
          className='form-square__number'
          placeholder='Card number'
          onClick={handleClick2}
          
          />

          <div className='form-square__security'>

              <input
              type="text"
              name='date'
              className='form-square__date'
              placeholder='MM/yy'
              onClick={handleClick2}
              
              />

              <input
              type="text"
              name='security'
              className='form-square__code'
              placeholder='CVV'
              onClick={handleClick2}
              
              />

          </div>
       </form>
        }

        <div className='form-square__line'></div>

        <div className='form-square__cont-summary'>

              <div className='form-square__text3'>
                <p className='form-square__paragraphs'>Products</p>
                <p className='form-square__paragraphs'>Taxes</p>
                <p className='form-square__paragraphs'>Shipping</p>
                <p className='form-square__paragraphs form-square__black'>Total</p>
              </div>
              <div className='form-square__quantity'>
                <p className='form-square__numbers'>${total}</p>
                <p className='form-square__numbers'>${taxes}</p>
                <p className='form-square__numbers'>${shipping}</p>
                <p className='form-square__numbers form-square__black'>${purchase}</p>
              </div>

        </div>

        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
          className="form-square__back"
          onClick={handleClick}
        />
        <Link to="/confirmation">
          <div className="form-square__forward">
            <p className="form-square__text">Checkout</p>
          </div>
        </Link>
        <Link to="/confirmation">
          <div className="form-square__next">
            <p className="form-square__text2">Checkout</p>
          </div>
        </Link>
      </div>
    );
};

// component documentation

FormSquare.propTypes = {
  changeTranslate: Proptypes.func.isRequired,
  total: Proptypes.number.isRequired,
  taxes: Proptypes.number.isRequired,
  shipping: Proptypes.number.isRequired,
  purchase: Proptypes.number.isRequired,
  write: Proptypes.bool.isRequired,
  setWrite: Proptypes.func.isRequired,
  };

export default FormSquare;