import React from 'react'
import { GoogleMap, LoadScript, Marker  } from '@react-google-maps/api'

const Map= ()=>{
	const mapStyles = {
		heigh:'50vh',
		width:'100%'
	}

	const defaultCenter ={
		lat: 19.4267261, lng: -99.1718706
	}

	return (
		<LoadScript googleMapsApiKey='AIzaSyCf0cHESwyTSwRyVRDzJDKTOPn5TmdA2ps'>
			<GoogleMap
				mapContainerStyle={mapStyles}
				zoom={9}
				center={defaultCenter}

			>
				<Marker 
				position={defaultCenter}
				/>
			</GoogleMap>
		</LoadScript>
	)
}

export default Map