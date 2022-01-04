import React, { useState, useEffect } from 'react';
import { RewardData, CheckoutProps } from '../types';
import RewardContainer from './RewardContainer';

const Checkout = ({
    projectId,
    rewards,
    submitCheckout
}: CheckoutProps) => {
    const [prices, setPrices] = useState<Array<number>>([]);
    const [purchased, setPurchase] = useState(false);

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

    const currPrice = prices.reduce((currTotal, nextNum) => currTotal + nextNum, 0);

    return(
        <div className="Checkout">
          <h1>Checkout</h1>
          <h4>Total price:</h4>
          <h4>{currPrice}</h4>
          <form onSubmit={() => setPurchase(true)}>
              {rewards.map(reward => {
                  return (
                      <div key={`div_${reward.id}`}>
                        <RewardContainer key={reward.id} id={reward.id} price={reward.price} description={reward.description}/>
                        <input key={`input_${reward.id}`} type="checkbox" value={reward.price} onChange={selectPrice}/>
                      </div>
                  )
              })}
              {purchased ? <h1>Purchase successful!</h1> : <input type="submit" onClick={(e) => submitCheckout(e, projectId, currPrice)}/>}
          </form>
      </div>
    )
}

export default Checkout;