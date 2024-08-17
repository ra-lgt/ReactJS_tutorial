import React from 'react'
import '../static/tableList.css'
function TableList(props){
	const {userData}=props
	console.log(userData,"ajau")


	return (
		<div>
		<table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Company</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        {userData && userData.map((object,index)=>{
        	return(
        	<tr>
                <td>{object?.id}</td>
                <td>{object?.name}</td>
                <td>{object?.company}</td>
                <td>{object?.username}</td>
                <td>{object?.email}</td>
            </tr>

        	)

        })

        }
 
        </tbody>
    </table>
		</div>
	)

}

export default TableList