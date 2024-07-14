import React from 'react';
import './Header.css'

function Header(props){
	const {language}=props
	console.log(language)

	return(
		<div className='headerContainer'>
		
		{language.map((value,index)=>(
			<h1>{value}</h1>
			))

		}
		
			
		</div>
	)

}

export default Header