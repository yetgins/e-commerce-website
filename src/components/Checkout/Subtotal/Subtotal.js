import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../../../contexts/StateProvider';
import { getBasketTotal } from '../../../actions/reducer';
import {useHistory} from 'react-router-dom';
import Button from '../../Button/Button';

const Subtotal = () => {
  const history =useHistory();
    const [{ basket },dispatch] = useStateValue();
    console.log(getBasketTotal(basket));
    return (
        <div className='subtotal'>
            
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                      <p>
                        {/* Part of the homework */}
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                      </p>
                      <small className="subtotal_gift">
                        <input type="checkbox" /> This order contains a gift
                      </small>
                    </>
                  )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <Button text='Proceed to Checkout' width='100%' height='30px' onClick={e=> history.push('/payment')} />
            
        </div>
    )
}

export default Subtotal
