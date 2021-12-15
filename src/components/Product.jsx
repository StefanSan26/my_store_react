import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({product,handleAddToCart}) => {
	// const [activeProduct, setactiveProduct] = useState(0)
	// const handleActiveProduct = (id)=>{ 
	// 	setactiveProduct(id)
	// }
	return (
		<div className="Products-item">
			{/* <img src={`http://localhost:1337${product.image[0].url}`} alt={product.title} /> */}
			{product.image ? <img src={product.image} alt={product.title} />: <p>Loading</p>}
			<div className="Products-item-info">
				<h2>
					{product.title}
					<span>
						$ {product.price}
					</span>
				</h2>
				<p>
					{product.description}
				</p>
			</div>
			<button type="button" onClick={handleAddToCart(product)}>Comprar</button>
			<Link to={`./${product.id}`}>
				<button type="button" className='Products-item-see'>Ver Producto</button>
			</Link>
			
		</div>
	);
};

export default Product;