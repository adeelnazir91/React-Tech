import react from "react";

function ChildComponent(props){
    return(
     
      <button type="button" onClick={props.greetHandler}>Greet Parent</button>


    )
}

export default ChildComponent