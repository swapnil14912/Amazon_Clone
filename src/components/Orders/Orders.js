import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import './Orders.css'
import { useStateValue } from '../../StateProvider';
import Order from './Order/Order';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders