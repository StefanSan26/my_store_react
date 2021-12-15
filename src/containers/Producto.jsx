import React from 'react';
import {useParams} from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Producto.css'

const Producto = () => {
	const {products,addToCart} = React.useContext(AppContext)

	let { id } = useParams();
	const handleAddToCart = product => () =>{
		addToCart(product)
	}

	return (
		<div className='Producto-item'>
			{products[id-1].image ? <img src={products[id-1].image} alt={products[id-1].title} />: <p>Loading</p>}
			<div className="Producto-item-info">
					<span>
						$ {products[id-1].price}
					</span>
				<h2>
					{products[id-1].title}
				</h2>
				<p>
					{products[id-1].description}
				</p>
			</div>
			<button type="button" onClick={handleAddToCart(products[id-1])}>Comprar</button>
		</div>
	);
};

export default Producto;