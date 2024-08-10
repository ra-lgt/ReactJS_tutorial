import React from 'react';
import './index.css'
import ProductList from './ProductList.js'
import product_1 from './assets/product_1.jpg'
import product_2 from './assets/product_2.jpg'
import product_3 from './assets/product_3.jpg'

// const products = [
// 		{
// 			id: 2,
// 			title: 'Yellow Pail',
// 			description: 'On-demand sand castle construction expertise.',
// 			url: '#',
// 			product_image:product_1
// 		},

// ]

const many_products=[
	{
			id: 1,
			title: 'Yellow Pail',
			description: 'On-demand sand castle construction expertise.',
			url: '#',
			product_image:product_1,
			vote:0
	},
	{
		id: 2,
		title: 'red Pail',
		description: 'loss demand',
		url: '#',
		product_image:product_2,
		vote:0
	}


]

const handleVoteParent=()=>{
	many_products[0]['vote']=many_products[0]['vote']+1
	console.log(many_products)

}

function Main(){
	return (
		// Make a call to another component with single props
		<div>

{/*			<ProductList
			id={products[0]?.id}
			title={products[0]?.title}
			description={products[0]?.description}
			url={products[0]?.url}
			product_image={products[0]?.product_image}

			/>*/}
			
			{/*//looping through the array and make use of same component*/}

			{many_products.map((object,index)=>{
				return(

					<ProductList
					id={object?.id}
					title={object?.title}
					description={object?.description}
					url={object?.url}
					product_image={object?.product_image}
					vote={object?.vote}
					handleVoteParent={handleVoteParent}

					/>
				)
			}) 

			}
		</div>
	)

}

export default Main




