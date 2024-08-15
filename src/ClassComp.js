import React from 'react'




class ClassComp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      vote:0
    }
    this.handleUpVote=this.handleUpVote.bind(this)
    this.handleDownVote=this.handleDownVote.bind(this)
  }

  handleUpVote(){
    let curr_vote=this.state.vote
    this.setState({
      vote:curr_vote+1
    })

  }
  handleDownVote(){
    let curr_vote=this.state.vote
    this.setState({
      vote:curr_vote-1
    })
  }




  render() {
    console.log("i'm re rendering")
    return (<div>
    <h1>Vote is {this.state.vote}</h1>
    <button onClick={this.handleUpVote}>upVote</button>
    <button onClick={this.handleDownVote}>downVote</button>

    </div>
    )
  }
}
export default ClassComp

