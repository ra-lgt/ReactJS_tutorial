import React from 'react';
import './index.css'
import ProductList from './ProductList.js'
import product_1 from './assets/product_1.jpg'
import product_2 from './assets/product_2.jpg'
import product_3 from './assets/product_3.jpg'

const products = [
		{
			id: 2,
			title: 'Yellow Pail',
			description: 'On-demand sand castle construction expertise.',
			url: '#',
			product_image:product_1
		},
		
]
function Loop(){
	return(
		<ProductList
		id={products[0]?.id}
		title={products[0]?.title}
		description={products[0]?.description}
		url={products[0]?.url}
		product_image={products[0]?.product_image}

		/>
		
	)

}

export default Loop


