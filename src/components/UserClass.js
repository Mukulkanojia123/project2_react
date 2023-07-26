import React, { Component } from 'react'

export default class UserClass extends Component {
     
   constructor(props){
    super(props)
    
      this.state = {
        count : 0,
      }
        console.log("Child Constructor")
   }
   componentDidMount(){
    console.log("Child component did Mount")
   }
   
  render() {
    console.log("Child render")
    const {name , location} = this.props;
    const {count} = this.state
    return (
      <div className='user-card'>
        <h1>count = {count}</h1>
        <button onClick={() =>{
          this.setState({
            count : this.state.count + 1
          })
        }}>
          increase count</button>
          <h1>Name : {name}</h1>
          <h2>Location : {location}</h2>
          <h4>Contact : @mukulKanojia</h4>
      </div>

    )
  }
}
