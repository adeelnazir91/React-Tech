import react from "react";

const Greet = Props =>{
     const {name, heroName,children} = Props
    return(
        <div>
            <p>I am a {name}</p>
            <p> {heroName}</p>
            <p>{children}</p>
         
       </div>
    )}


export default Greet