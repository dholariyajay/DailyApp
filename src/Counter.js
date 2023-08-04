import React, { useState } from 'react'


function Counter() {

    let [count, setCount] = useState(0);
    const [showPopup, setShowPopup] = useState(false);


    function handleDecreament (){
        if(count<=0){
            return 0;
        }else{
            setCount(count-1);
        }
    }

    function handleIncrement (){
        setCount(count+1);

    }
    function RemoveItems(){
        setCount(0);
        setShowPopup(true);
        setTimeout(()=>{
            setShowPopup(false);

        },1500);
    }



  return (
    <>
        {/* Popup */}
      {showPopup && (
        <div className="popup">
          <p>Success!! All items removed.</p>
        </div>
      )}
        <div>
            <h1>Counter App</h1>
        </div>

        <div className='div'>

            <button type="button" class="btn btn-outline-primary" onClick={handleDecreament}>-</button>
            <h3> {count}  </h3>
            <button type="button" class="btn btn-outline-primary" onClick={handleIncrement}>+</button>
            <br/>
            <br/>
            <button type="button" class="btn btn-info" onClick={RemoveItems}>Remove All items</button>

            
        </div>
    </>
  )
}

export default Counter