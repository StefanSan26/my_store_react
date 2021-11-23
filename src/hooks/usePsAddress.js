import { useState,useEffect } from "react";
import axios from "axios"

const usePsAddress = address =>{
	const [map, setMap] = useState({})
	// const API = `http://api.positionstack.com/v1/forward?access_key=33de57f7b5dd748d96503ebd84e11113&query=$1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC`
	const API = `http://api.positionstack.com/v1/forward?access_key=33de57f7b5dd748d96503ebd84e11113&query=${address}`
	
	useEffect(async () => {
		const response =await axios(API);

		setMap(response.data.data[0]);
		// console.log(response.data.data[0])
	}, []);
	return map;
}

export default usePsAddress