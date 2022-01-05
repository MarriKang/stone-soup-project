import React, { useState, useEffect } from 'react';
import { RewardData, CheckoutProps } from '../types';
import RewardContainer from './RewardContainer';
import Button from '@mui/material/Button';

const Checkout = ({
    projectId,
    rewards,
    submitCheckout
}: CheckoutProps) => {
    const [prices, setPrices] = useState<Array<number>>([]);

      const selectPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currPrice = parseInt(event.target.value);

        if (prices.includes(currPrice)) {
            const newPrices = prices.filter(price => price !== currPrice);
            setPrices(newPrices);
        } else {
            const newPrices = [...prices];
            newPrices.push(currPrice);
            setPrices(newPrices);
        }
    }

    const currPrice = prices.reduce((currTotal, nextNum) => currTotal + nextNum, 0).toLocaleString();

    return(
        <div className="Checkout">
          <h1>Checkout</h1>
          <div className="checkout-info">
                <h3>Total price:</h3>
                <h2>${currPrice}</h2>
                {currPrice === '0' ? <Button variant="contained" disabled className="checkout-button" onClick={(e) => submitCheckout(e, projectId, currPrice)}>Select at least one reward</Button>
                : <Button variant="contained" className="checkout-button" onClick={(e) => submitCheckout(e, projectId, currPrice)}>Submit Payment</Button>}
              </div>
          <form className="reward-form">
              {rewards.map(reward => {
                  return (
                      <div key={`div_${reward.id}`}>
                        <input key={`input_${reward.id}`} type="checkbox" value={reward.price} onChange={selectPrice}/>
                        <RewardContainer key={reward.id} id={reward.id} price={reward.price} description={reward.description}/>
                      </div>
                  )
              })}
          </form>
      </div>
    )
}

export default Checkout;