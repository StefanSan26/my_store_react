import React from 'react'
// import { GoogleMap, LoadScript, Marker  } from '@react-google-maps/api'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map= ()=>{
	// const mapStyles = {
	// 	heigh:'50vh',
	// 	width:'100%'
	// }

	// const defaultCenter ={
	// 	lat: 19.4267261, lng: -99.1718706
	// }

	return (
		// <LoadScript googleMapsApiKey='AIzaSyCf0cHESwyTSwRyVRDzJDKTOPn5TmdA2ps'>
		// 	<GoogleMap
		// 		mapContainerStyle={mapStyles}
		// 		zoom={9}
		// 		center={defaultCenter}

		// 	>
		// 		<Marker 
		// 		position={defaultCenter}
		// 		/>
		// 	</GoogleMap>
		// </LoadScript>

		<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	)
}

export default Map