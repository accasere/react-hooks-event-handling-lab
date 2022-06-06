// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe(){

    function handleClick(event){
        if(event._reactName === "onBlur"){
            console.log("Hey! Eyes on me!")
        } else {
            console.log("Good!")
        }
    }
  
   return (
    <button onFocus={handleClick} onBlur={handleClick}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe