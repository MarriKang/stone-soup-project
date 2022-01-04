import React, { useState, useEffect } from 'react';
import { ProjectData, RewardData } from '../types';
import { useParams, Link } from 'react-router-dom';
import RewardContainer from './RewardContainer';
import Service from '../services';


const Checkout = () => {
    const initialCheckoutState = {
        priceArray: [],
        idArray: []
    }

    const [rewards, setRewards] = useState<Array<RewardData>>([]);
    const [prices, setPrices] = useState<Array<number>>([]);
    const { id } = useParams<{id: string}>();
    const projectId = Number(id);

    useEffect(() => {
        retrieveRewards();
      }, []);
    
      const retrieveRewards = () => {
        Service.getAllRewards(projectId)
        .then((response: any) => {
          setRewards(response.data);
          console.log(response.data);
        })
        .catch((err: Error) => {
          console.log(err);
        })
      }

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

      const buyRewards = () => {
          
      }

    return (
      <div className="Checkout">
          <h1>Checkout</h1>
          <h4>Total price:</h4>
          <h4>{prices.reduce((currTotal, nextNum) => currTotal + nextNum, 0)}</h4>
          <form>
              {rewards.map(reward => {
                  return (
                      <div key={`div_${reward.id}`}>
                        <RewardContainer key={reward.id} id={reward.id} price={reward.price} description={reward.description}/>
                        <input key={`input_${reward.id}`} type="checkbox" value={reward.price} onChange={selectPrice}/>
                      </div>
                  )
              })}
              <input type="submit" onClick={buyRewards}/>
          </form>
      </div>
    );
}

export default Checkout;