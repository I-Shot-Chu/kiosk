import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function useInterval(callback, delay) 
{
	const savedCallback = useRef();
    
    useEffect(() =>
    {
    	savedCallback.current = callback;
    }, [callback]);
    
    useEffect(() =>
    {
    	function tick()
        {
        	savedCallback.current();
        }
        if (delay !== null) 
        {
        	let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const Timer = () =>
{
    const [timeLeft, setTimeLeft] = useState(120);

    const [timeFlag, setTimeFlag] = useState(false);

    const navigate = useNavigate();

    useInterval(() => 
    {
        setTimeLeft((TimeLeft) => TimeLeft - 1);
        if(timeFlag === true)
        {
            setTimeLeft(120);
            setTimeFlag(false);
        }
        if(timeLeft === 0)
        {
            alert("제한 시간이 지나 초기 화면으로 돌아갑니다.");
            navigate("/idle");
        }
    }, 1000);

    return (
        <>
            <h3>남은 시간</h3>
            <h2>{timeLeft} 초</h2>
            <br></br>
        </>
    )
};

export default Timer;