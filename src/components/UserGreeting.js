import React, {Component} from "react";

class UserGreeting extends Component{
   constructor(props){
      super(props)

      this.state = {
        isLoggedIn:false
      }
   }


 render(){
    return(
        this.state.isLoggedIn?
        <div>Welcome Adeel</div>:
        <div>Welcome Guest</div>
    )

    // let messsage;

    // if(this.state.isLoggedIn){
    //     messsage = <div>Welcome Adeel</div>
    // }else{

    //     messsage = <div>Welcome Guest</div>
    // }

    // return <div>{messsage}</div>

      

//  if (this.state.isLoggedIn){
//      return <div>Welcome Adeel</div>   
//  }
// else{
// return <div>Welcome Guest</div>
// }

 

 }
}

export default UserGreeting