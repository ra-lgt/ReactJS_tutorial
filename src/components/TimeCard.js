import React from 'react'
import '../static/timeCard.css'
class TimeCard extends React.Component{

	constructor(props){
		super(props);
		this.state={
			time:0
		}
		this.intervalID=undefined;
		this.startTimer=this.startTimer.bind(this);
		this.setTimer=this.setTimer.bind(this);
		this.stopTimer=this.stopTimer.bind(this);
	}
	setTimer(){
		this.setState({
				time:this.state.time+1
			})
	}
	startTimer(){
		
		// setInterval(this.setTimer,10)

		this.intervalID=setInterval(()=>{
			this.setState({
				time:this.state.time+1
			})
		},10)

	}

	stopTimer(){
		clearInterval(this.intervalID)
	}

	render(){
		return(
			<div className='cardContainer'>
				<div className='card'>
					<h3>Move the lawn</h3>
					<h4>House chores</h4>

					<p className='timer'>Timer is {this.state.time}</p>

					<button className='startButton' onClick={this.startTimer}> start</button>
					<button className='stopButton' onClick={this.stopTimer}> stop</button>
				</div>


			
			</div>

		)
	}
}
export default TimeCard