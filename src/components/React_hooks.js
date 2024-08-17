import React,{useState} from 'react'
import '../static/timeCard.css'

function React_hooks(props){
	const [time,setTime]=useState(0)
	let timeIntervalID=undefined
	const {functionx}=props

	functionx()
	const startTimer=()=>{
		timeIntervalID=setInterval(()=>{
			// setTime(time+1)
			setTime(prevTime=> prevTime +1)

		},10)

	}
	const stopTimer=()=>{
		console.log("hello")
		clearInterval(timeIntervalID)

	}

	return(
		<div className='cardContainer'>
				<div className='card'>
					<h3>Move the lawn</h3>
					<h4>House chores</h4>

					<p className='timer'>Timer is {time}</p>

					<button className='startButton' onClick={startTimer}> start</button>
					<button className='stopButton' onClick={stopTimer}> stop</button>
				</div>


			
			</div>

	)
}
export default React_hooks