import React, { useCallback } from 'react'
import  { useEffect, useMemo, useState } from 'react'
const UseCallback = () => {
    const [value , setValue] = useState(0);
    const [value1 , setValue1] = useState(1);
    function handleClick(){
        setValue(value + 1)
    }
    // function expensiveFunction(){
        // console.log('expensive function')
        // let i = 0;
        // while(i < 1000000000) i++
        // return setValue1(value1*2)
    // }
    //usecallback freez the function and return the same function if the value is not changed when value1 is taken by user
    let expensiveFunction =useCallback(()=>{console.log('expensive function')
        let i = 0;
        while(i < 1000000000) i++
        return setValue1(value1*2)},[value1])
    
  return (
    <>
    value : {value}
    <button onClick={handleClick} >Increment</button>
    <br />
    <button onClick={expensiveFunction} >double</button>

    doubleValue : {value1}
    </>
  )
}

export default UseCallback

