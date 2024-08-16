import React,{useState} from 'react'
import '../static/timeCard.css'

function React_hooks(){
	const [time,setTime]=useState(0)

	const startTimer=()=>{
		setInterval(()=>{
			setTime(time+1)
			setTime(prevTime=> prevTime +1)

		},10)

	}

	return(
		<div className='cardContainer'>
				<div className='card'>
					<h3>Move the lawn</h3>
					<h4>House chores</h4>

					<p className='timer'>Timer is {time}</p>

					<button className='startButton' onClick={startTimer}> start</button>
					<button className='stopButton' > stop</button>
				</div>


			
			</div>

	)
}
export default React_hooks