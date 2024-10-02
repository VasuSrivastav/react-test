import React from 'react'

const StopWatch = () => {
    const [time, setTime] = React.useState(0);
    let timeRef = React.useRef(null);
    function startTimer() {
        timeRef.current = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);
    }
    function startStop() {
        clearInterval(timeRef.current);
    }
    function startReset() {
        clearInterval(timeRef.current);
        setTime(0);
    }   
    React.useEffect( ()=>{
        console.log('render')}
    , [time])
  return (
    <>
    <div>StopWatch</div>
    {time} : sec
    <br />
    <button onClick={startTimer}>Timer</button>
    <button onClick={startStop}>Stop</button>
    <button onClick={startReset}>Reset</button>

    </>
  )
}

export default StopWatch