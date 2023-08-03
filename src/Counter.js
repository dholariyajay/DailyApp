import React, { useState } from 'react'

function Counter() {

    let [count, setCount] = useState(0);

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



  return (
    <>
    <div>
        <h1>Counter App</h1>
    </div>
    <div className='div'>

        <button type="button" class="btn btn-outline-primary" onClick={handleDecreament}>-</button>
        <h3> {count}  </h3>
        <button type="button" class="btn btn-outline-primary" onClick={handleIncrement}>+</button>



    </div>
    </>
  )
}

export default Counter