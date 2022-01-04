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
      <Checkout projectId={projectId} rewards={rewards} submitCheckout={buyRewards}/>
    );
}

export default CheckoutController;