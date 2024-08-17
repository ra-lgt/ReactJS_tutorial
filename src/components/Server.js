import React,{useState} from 'react'
import TableList from './TableList.js'

function Server(){
	const [toLoad,setLoad]=useState(false)
	const [userData,setUserData]=useState({})

	const loadUserData=()=>{
		fetch('https://fake-json-api.mock.beeceptor.com/users',{
			method:'GET'
		})
		.then(response=>response.json())
		.then(data=>{
			setUserData(data)
			setLoad(true)
		})
		
	}

	const loadUserDataAysnc=async()=>{
		const user_data_api= await fetch('https://fake-json-api.mock.beeceptor.com/users')
		const user_data_json= await user_data_api.json()

		setUserData(user_data_json)
		setLoad(true)
	}


	return (
		<div>
		<button onClick={loadUserData}>Load Data</button>

		{toLoad==true?(
			<TableList userData={userData}/>

		):
		<></>

		}

		</div>
	)

}

export default Server