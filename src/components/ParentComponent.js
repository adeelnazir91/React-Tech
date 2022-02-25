import React, {Component} from "react";
import ChildComponent from './ChildComponent'

class parentComponet extends Component{
  constructor(){
   super()
   this.state = {
    ParentName: "parent"

   }
   this.greentparent = this.greentparent.bind(this)

  }

  greentparent(){
   alert(`Hello ${this.state.ParentName}`);

  }

  render(){
   return(
     <div>
     
     <ChildComponent greetHandler ={this.greentparent}/>
     

     </div>

   )
  }

}

export default parentComponet