import React from 'react'
import '../css/order.css';
import moment from 'moment'
import CurrencyFormat from'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
function Order({order}) {
    return (
        <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY ,h:mma')}</p>
        
        <p className='.order__id'>
        <small>{order.id}</small>
        </p>
            {order.data.basket?.map(item=>(
             <CheckoutProduct 
             item={order.id}
             title={order.title}
             image={order.image}
             price={order.price}
             rating={order.rating}
            //   hideButton={}
             />   ))}
             <CurrencyFormat renderText={(value)=>(
                 <>
                 <h3 className="order__total">Order Total:{value}</h3>
                 </>
             )}
             decimalScale={2}
             value={order.data.amount/100}
             displayType={'text'}
             thousandSeparator={true}
             prefix={"$"}
             
             />
 
         
            
        </div>
    )
}

export default Order
