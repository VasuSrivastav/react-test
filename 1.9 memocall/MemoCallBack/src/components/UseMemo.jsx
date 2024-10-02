import React, { useEffect, useMemo, useState } from 'react'
import MemoFile from './MemoFile'

const UseMemo = () => {
    // react memo part 
    // const [value , setValue] = useState(0);
    // function handleClick(){
    //     setValue(value + 1)
        
    // }
    // useEffect( ()=>{
    //     console.log('render')}
    // )
    

    //usememo cache current value and return the same value if the value is not changed
    const [value , setValue] = useState(0);
    function handleClick(){
        setValue(value + 1)
    }
    function expensiveFunction(num){
        console.log('expensive function')
        let i = 0;
        while(i < 1000000000) i++
        return num * 2
    }
    const doubleValue = useMemo(() => expensiveFunction(value), [value]);

  return (
    // <div>Value :{value}
    //     <button onClick={handleClick}>Increment</button>
    //     <MemoFile name="vasu" />
    // </div>
    <>
    value : {value}
    <button onClick={handleClick} >Increment</button>
    <input type="number" value={value} onChange={(e)=>{setValue(e.target.value)}} />
    doubleValue : {doubleValue}
    </>
  )
}

export default UseMemo