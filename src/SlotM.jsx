import React from 'react';


const SlotM = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;

    if((x===y) && (x===z)){
        return(
           <>
                <div className = "Slot-content">
                    <h3>{x} {y} {z} </h3>

                    <h2>Wow.. This is Matching 😃</h2>
                </div>
                <hr/>
           </>
        );
    }else{
        return(
            <>
  <div className = "Slot-content">
                    <h3>{x} {y} {z} </h3>

                    <h2>Alas.. This is Not Matching 😢</h2>
                </div>
                <hr/>
            </>
         );
    }


}


export default SlotM;