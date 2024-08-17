import React from 'react'
import Header from './components/Header.js'
import TimeCard from './components/TimeCard.js'
import React_hooks from './components/React_hooks.js'
import Server from './components/Server.js'
function Main(){
	const tempFunction=()=>{
		console.log("child called")
	}

	return (
		<div>
			<Header/>
			
			<React_hooks functionx={tempFunction}/>
			<Server/>
		</div>

	);
}

export default Main