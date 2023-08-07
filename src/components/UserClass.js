import React, { Component } from 'react'

export default class UserClass extends Component {
     
   constructor(props){
    super(props)
    
      this.state = {
        userInfo :{
          name : "Dummy",
          location : "Default"
        }
      }
        // console.log("Child Constructor")
   }
   async componentDidMount(){
    // console.log("Child component did Mount")
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    // console.log(json)
    this.setState({
      userInfo: json,
    });
   }
   
  render() {
    // console.log("Child render")
    const {name , location} = this.state.userInfo;
   
    return (
      <div className='user-card'>
        <h1>count</h1>
        
          <h1>Name : {name}</h1>
          <h2>Location : {location}</h2>
          <h4>Contact : @mukulKanojia</h4>
      </div>

    )
  }
}
