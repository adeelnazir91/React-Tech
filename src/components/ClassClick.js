import React, {Component} from "react"

class ClassClick extends Component{
    clickHandler(){
         console.log("click me");
    }
  render(){
   return(
     <div>
      <button type="button" onClick={this.clickHandler}>Click button</button>
         
     </div>


   )

  }
}

export default ClassClick