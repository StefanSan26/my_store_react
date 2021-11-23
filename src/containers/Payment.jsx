import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import '../styles/components/Payment.css';
// import { handleSumTotal } from '../utils/sumTotal';

const Payment = ({history}) => {
	const {state} = useContext(AppContext)
	const {cart, buyer} =  state

 const handleSumTotal = () =>{

			const reducer = (accumulator , currentValue) => accumulator + currentValue.price
			const sum = cart.reduce(reducer,0)
			return sum
		}
	
	const options ={
		// clientId:'ATN4MgsCVKSXinkSTL1YqlANTikW5fXyo5C7TkyVUG7JB0DTr1G2aabkWFF9Uz6kKo61tL48cfWpomc4',
		clientId:'sb',
		intent:'capture',
		currency: 'USD'
	}

	const style= {
    layout:'vertical',
    color:'blue',
    shape:'rect',
    label:'paypal'
  }
	const handlePaymentSuccess = data =>{
		if(data.status==='COMPLETED'){
			const newOrder = {
				buyer,
				product:cart,
				payment:data
			}
			addNewOrder(newOrder)
			history('/checkout/success')
		}
	}
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
				{cart.map((item)=>(
					<div className="Payment-item" key={item.title}>
						<div className="Payment-element">
							<h4>{item.title}</h4>
							<span>${item.price}</span>
						</div>
					</div>

				))}
        <div className="Payment-button">
					<PayPalButton 
					 createOrder={(data, actions) => {
						return actions.order.create({
							purchase_units: [{
								amount: {
									currency_code: "USD",
									value: handleSumTotal()
								}
							}],
						});
					}}
					options={options}
					buttonStyles={style}
					amount={handleSumTotal}
					onPaymentStart={()=>console.log('Start Payment')}
					onSuccess={data=>handlePaymentSuccess(data)}
					onError={error=>console.error(error)}
					onCancel={data=>console.log(data)}
					/>
				</div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;