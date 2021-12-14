import React from 'react';
import {useParams} from 'react-router-dom';
import AppContext from '../context/AppContext';

const Producto = () => {
	const {products,addToCart} = React.useContext(AppContext)

	let { id } = useParams();
	const handleAddToCart = product => () =>{
		addToCart(product)
	}

	return (
		<div className='Producto'>
			<h1>Id: {id}</h1>
			{products[id].image ? <img src={products[id].image} alt={products[id].title} />: <p>Loading</p>}
			<div className="Products-item-info">
				<h2>
					{products[id].title}
					<span>
						$ {products[id].price}
					</span>
				</h2>
				<p>
					{products[id].description}
				</p>
			</div>
			<button type="button" onClick={handleAddToCart(products[id])}>Comprar</button>
		</div>
	);
};

export default Producto;