import React from 'react';
import Header from './Components/Header.js'
import SideBar from './Components/SideBar.js'
import './index.css'
function Main(props){
	return(
		<div>
		<div className='mainContainer'>
		<Header language={['Angular','React']}/>
		
			
		</div>
		<SideBar/>
		</div>

	)

}

export default Main

