import react from "react";

function FunctionClick(){
 
    function clickHandler(){
        console.log("click button");
    }


  return(
    <div>
        <button type="button" onClick={clickHandler}>Click me</button>   

    </div>
  

  )
}

export default FunctionClick