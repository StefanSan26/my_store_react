import React from 'react';
// import initialState from '../initialState';
import Products from '../components/Products'
import Helmet from 'react-helmet'

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>
					MY Store | React
				</title>
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="twitter:site" content="@Ssteef26"/>
				<meta name="twitter:creator" content="@Ssteef26"/>
				<meta name="twitter:title" content="MY Store | React"/>
				<meta name="twitter:description" content="MY Store | React"/>
				<meta
					name="twitter:image"
					content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
				/>
				<meta property="og:title" content="MY Store | React"/>
				<meta property="og:description" content="MY Store | React"/>
				<meta
					property="og:image"
					content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
				/>
				<meta property="og:url" content="platzistore.xyz" />
				<meta property="og:site_name" content="MY Store | React" />
				<meta property="og:locale" content="es_ES" />
				<meta property="og:type" content="article" />
				<meta property="fb:app_id" content="ID_APP_FACEBOOK" />
			</Helmet>
      <Products 
			// products={initialState}
			/>
		</div>
	);
};

export default Home;