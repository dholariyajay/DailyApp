import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import Chips from './Assets/Images/chips1.jpg'
import {IoIosCart} from 'react-icons/io';


function Counter() {

    const [count, setCount] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    let [showCart, setShowCart] = useState(0);
    const [showAddedPopup, setShowAddedPopup] = useState(false);

    


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
      if(count===0){return null}
        else{setCount(0);
        setShowCart(0);
        setShowPopup(true);
        setTimeout(()=>{
            setShowPopup(false);

        },1000);}
    }
    function AddToCart(){
      if(count===0){return null}
      else{setShowCart(count);
      setShowAddedPopup(true);

      setTimeout(() => {
        setShowAddedPopup(false);
      }, 1000);}
    }
    

  return (
    <>
        {/* Popup */}
      {showPopup && (<div className="popup"><p className='font'> All items removed.</p></div>)}
      {showAddedPopup && (<div className="popup"><p className="font">Success!! Added to the cart</p>  </div>)}
        <div>
          <h1 className='font'>Grocery Store 
            <Badge className='font' badgeContent={showCart} color="primary">
              <IoIosCart className='text-right'/>
            </Badge>
          </h1>
        </div>
        
          
      
   
        <div className='div'>

            <button type="button" class="btn btn-outline-primary" onClick={handleDecreament}>-</button>
            <Badge className='font' badgeContent={count} color="success"><img className='chips1' src={Chips} alt='Chips'/></Badge>
            <button type="button" class="btn btn-outline-primary" onClick={handleIncrement}>+</button>
            <br/><br/>
            <button type="button" className="btn btn-info font" onClick={AddToCart}>Add Items to Cart</button>          
            <br/><br/>
            <button type="button" className="btn btn-info font" onClick={RemoveItems}>Remove All items from the Cart</button>          
       
        </div>
    </>
  )
}

export default Counter