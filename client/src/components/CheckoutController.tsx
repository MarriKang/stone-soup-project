import React, { useState, useEffect } from 'react';
import { RewardData } from '../types';
import { useParams, useNavigate } from 'react-router-dom';
import Service from '../services';
import Checkout from './Checkout';


const CheckoutController = () => {
    const [rewards, setRewards] = useState<Array<RewardData>>([]);
    const { id } = useParams<{id: string}>();
    const projectId = Number(id);
    const navigate = useNavigate();

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

      const buyRewards = (e: React.FormEvent<HTMLInputElement>, projectId: number, data: number) => {
        e.preventDefault();
          Service.updateProject(projectId, data)
          .then((response:any) => {
              console.log(response.data);
          })
          .catch((err: Error) => {
              console.log(err);
          })
          navigate('/');

      }


    return (
      // <div className="Checkout">
      //     <h1>Checkout</h1>
      //     <h4>Total price:</h4>
      //     <h4>{prices.reduce((currTotal, nextNum) => currTotal + nextNum, 0)}</h4>
      //     <form>
      //         {rewards.map(reward => {
      //             return (
      //                 <div key={`div_${reward.id}`}>
      //                   <RewardContainer key={reward.id} id={reward.id} price={reward.price} description={reward.description}/>
      //                   <input key={`input_${reward.id}`} type="checkbox" value={reward.price} onChange={selectPrice}/>
      //                 </div>
      //             )
      //         })}
      //         <input type="submit" onClick={() => buyRewards(projectId)}/>
      //     </form>
      // </div>
      <Checkout projectId={projectId} rewards={rewards} submitCheckout={buyRewards}/>
    );
}

export default CheckoutController;