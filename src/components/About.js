import { Component} from 'react'
import { User } from './User';
import UserClass from './UserClass';

export class About extends Component{

  constructor(props){
    super(props)
    console.log("Parent constructor")
  }

  componentDidMount(){
    console.log("Parent component did Mount")
   }
  render(){
    console.log(" Parent render")
    return (
      <>
        <h2>hello</h2>
    
        <UserClass name = {"Mukul class"} location = {"Delhi class"}/>
      </>
      )
  }
}

