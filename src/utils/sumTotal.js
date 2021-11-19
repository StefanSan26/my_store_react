// import AppContext from "../context/AppContext"
// import { useContext } from "react"



export const handleSumTotal = () =>{
	// const {state} = useContext(AppContext)
	// 	const {cart} = state
		const reducer = (accumulator , currentValue) => accumulator + currentValue.price
		const sum = cart.reduce(reducer,0)
		return sum
	}

