// Code Keypad Component Here
import React from 'react';

function Keypad(){
    function onHandleChange(){
        console.log("Entering password...")
    }
    return(
        <div>
            <input
                 type="password"
                 name="password"
                 onChange={onHandleChange}
                 placeholder="Enter search term..."
            />
        </div>
    )
}

export default Keypad;