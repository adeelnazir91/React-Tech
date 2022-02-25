import React, {Component} from "react";

class Message extends Component{
  constructor(){
    super()
     this.state = {
        name: "Adeel",
        age :  20
     }
  }

changeMessage(){
         this.setState({
           name: "Adeel Nazir",
           age: 30
         })
}


 render(){
  return(
  <div>
   
   <h1>My name is {this.state.name}</h1>
   <h1>Age: {this.state.age}</h1>
   <button type="button" onClick={() => this.changeMessage()}>Click me</button>

  </div>


  )
 }

}

export default Message
