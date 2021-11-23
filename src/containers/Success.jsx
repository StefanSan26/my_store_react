import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';
import Map from '../components/Map';
// import useGoogleAddress from '../hooks/useGoogleAddress.js';
import usePsAddress from '../hooks/usePsAddress.js';


const Success = () => {
	const {state} = useContext(AppContext)
	const {buyer} = state
	// const location = useGoogleAddress(buyer[0].address)
	const location = usePsAddress('Rubio tachira Venezuela')
	// const location ={
	// 	latitude: 19.4267261, 
	// 	longitude: -99.1718706
	// }
  
	return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
					{/* <Map data={location}/> */}
					{location && Object.keys(location).length!==0?<Map data={location} />:"Espere un momento..."}
				</div>
      </div>
    </div>
  );
};

export default Success;