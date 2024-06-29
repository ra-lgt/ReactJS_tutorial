import React from 'react'

function User(props) {
	const {name,admin,age}=props

	return (
		<div>
		{admin=="admin"?(
			<button>Delete User</button>

			):(
			<h1>HI,{name}</h1>
			)

	}


		
		</div>
	)
}
export default User



// public void add(a,b){

// }

// add(10,20)
//props as a OBJECT
