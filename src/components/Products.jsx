import React from 'react';
import Product from './Product';
import '../styles/components/Products.css'
import AppContext from '../context/AppContext'
import Loading from './Loading';

const Products = () => {
	const {products,addToCart} = React.useContext(AppContext)

	const handleAddToCart = product => () =>{
		addToCart(product)
	}

	return (
		<div className="Products">
			<div className="Products-items">
				{products.length>0 ? products.map(product=>(
					<Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
				)): <Loading type="bars" color="#468ccf"/>}
			</div>
		</div>
	);
};

export default Products;