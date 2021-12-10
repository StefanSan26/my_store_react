import { useState,useEffect } from "react";
import initialState from '../initialState'
import axios from 'axios'

const API = 'https://fakestoreapi.com/products'
// const API2 = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api'
// const API3 = 'https://young-island-80155.herokuapp.com/products'

const useInitialState = () =>{
	const [state , setState] = useState(initialState)
	const [products, setProducts] = useState([])

	// const MyFunctionnalComponent = props => {
	// 	useEffect(() => {
	// 		// Create an scoped async function in the hook
	// 		async function anyNameFunction() {
	// 			await loadContent();
	// 		}
	// 		// Execute the created function directly
	// 		anyNameFunction();
	// 	}, []);

		useEffect(() => {
			const getData = async () => {
				const response = await axios(API);
				setProducts(response.data);
			};
	
			getData();
		}, []);

	const addToCart = payload =>{
		setState({
			...state,
			cart:[...state.cart,payload]
		})
	}
	const removeFromCart = payload =>{
		setState({
			...state,
			cart:state.cart.filter(item => item.id !== payload.id)
		})
	}
	const addToBuyer=(payload)=>{
		setState({
			...state,
			buyer:[...state.buyer,payload]
		})
	}
	const addNewOrder=(payload)=>{
		setState({
			...state,
			order:[...state.orders,payload]
		})
	}

	return {
		addToCart,
		removeFromCart,
		state,
		addToBuyer,
		addNewOrder,
		products
	}

}


export default useInitialState