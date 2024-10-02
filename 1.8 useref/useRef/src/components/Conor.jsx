import React from 'react'
import { useRef, useEffect } from 'react';
import { useState } from 'react'
import Button from './Button';
import Change from './Change';

const Conor = () => {
    
    
    let [value , setValue]=useState(0);
    let num = useRef(0);
    function handleBtn (){
        setValue(value+=1)
    }
    function handleNum (){
        (num.current+=1)
    }
    useEffect( ()=>{
        console.log('useEffect')}
    , [num.current , value])
  return (
    <div>Conor 
        <Button  fun={handleBtn} fun1={handleNum} zxc={num.current}/>
        <Change qwerty={value} asd={num.current} />
    </div>
  )
}

export default Conor