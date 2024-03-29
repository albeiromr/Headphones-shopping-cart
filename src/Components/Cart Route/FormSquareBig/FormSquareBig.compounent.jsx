import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
//import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCcVisa, faCcMastercard, faCcDiscover, faCcAmex } from '@fortawesome/free-brands-svg-icons';

const FormSquareBig = ({total, taxes, shipping, purchase, write, setWrite, setCompounent, setOrders, orders, shoppingCart, sume, changeShoppingCart, setStepsCount}) => {

    const handleClick = () => {
      setWrite(true)
    }

    const handleClick2 = () => {
      setCompounent(2);
      setTimeout(() => {
        setCompounent(3);
      }, 3000);
      //////////////////////////
      let newOrder = {
        id: `OR${uuidv4().substr(1, 7)}`,
        productAmount: shoppingCart.length + sume,
        products: total,
        taxes: taxes,
        shipping: shipping,
        total: purchase,
        date:  new Date().toISOString().slice(0, 10)
      };

      setOrders([...orders, newOrder]);

      /////////////////////////
      setTimeout(() => {
        changeShoppingCart([]);
        setStepsCount(2);
      }, 1500);
    };
    

    

    return (

      <div className="form-square-big">

        <p className='form-square-big__type'>Card Details</p>

        
        <div className='form-square-big__cards'>

            <FontAwesomeIcon
                icon={faCcVisa}
                className="form-square-big__card"
              />

            <FontAwesomeIcon
              icon={faCcMastercard}
              className="form-square-big__card"
            />

            <FontAwesomeIcon
              icon={faCcDiscover}
              className="form-square-big__card"
            />

            <FontAwesomeIcon
              icon={faCcAmex}
              className="form-square-big__card"
            />
            
        </div>
        
        {write === true ?
          <form className='form-square-big__form'>

         <input
          type="text"
          name='name'
          disabled
          className='form-square-big__name'
          placeholder='Mike Daniels'

          />

         <input
          type="text"
          name='number'
          disabled
          className='form-square-big__number'
          placeholder='4578 3421 8910 3456'
          
          />

          <div className='form-square-big__security'>

             <input
             type="text"
             name='date'
             disabled
             className='form-square-big__date'
             placeholder='04/25'
             
             />

             <input
             type="text"
             name='security'
             disabled
             className='form-square-big__code'
             placeholder='837'
             
             />

          </div>

       </form> :
          <form className='form-square-big__form'>

        <input
         type="text"
         name='name'
         className='form-square-big__name'
         placeholder='Name on card'
         onClick={handleClick}

         />

        <input
         type="text"
         name='number'
         className='form-square-big__number'
         placeholder='Card number'
         onClick={handleClick}
         
         />

         <div className='form-square-big__security'>

            <input
            type="text"
            name='date'
            className='form-square-big__date'
            placeholder='MM/YY'
            onClick={handleClick}
            
            />

            <input
            type="text"
            name='security'
            className='form-square-big__code'
            placeholder='CVV'
            onClick={handleClick}
            
            />

         </div>

      </form>
        }

        
        

        <div className='form-square-big__line'></div>

        <div className='form-square-big__cont-summary'>

              <div className='form-square-big__text3'>
                <p className='form-square-big__paragraphs'>Products</p>
                <p className='form-square-big__paragraphs'>Taxes</p>
                <p className='form-square-big__paragraphs'>Shipping</p>
                <p className='form-square-big__paragraphs form-square-big__black'>Total</p>
              </div>
              <div className='form-square-big__quantity'>
                <p className='form-square-big__numbers'>${total}</p>
                <p className='form-square-big__numbers'>${taxes}</p>
                <p className='form-square-big__numbers'>${shipping}</p>
                <p className='form-square-big__numbers form-square-big__black'>${purchase}</p>
              </div>

        </div>

        {total > 0 && write === true?
         
            <div onClick={handleClick2} className="form-square-big__forward">
              <p className="form-square-big__text">Pay</p>
            </div>
          :
          null
        }
        
      </div>
    )
};

// component documentation

FormSquareBig.propTypes = {
  total: Proptypes.string.isRequired,
  taxes: Proptypes.number.isRequired,
  shipping: Proptypes.number.isRequired,
  purchase: Proptypes.number.isRequired,
  write: Proptypes.bool.isRequired,
  setWrite: Proptypes.func.isRequired,
  setCompounent: Proptypes.func.isRequired,
  setOrders: Proptypes.func.isRequired,
  shoppingCart: Proptypes.array.isRequired,
  sume: Proptypes.number.isRequired,
  orders: Proptypes.array.isRequired,
  changeShoppingCart: Proptypes.func.isRequired,
  setStepsCount: Proptypes.func.isRequired,
  };

export default FormSquareBig;