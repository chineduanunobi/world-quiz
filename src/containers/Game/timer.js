import React, { useContext } from "react";

function startTimer(counter) {
    let d = Number(counter);

    // maths logic that returns minutes and seconds
    if (d <= 0) {
        return "00:00:00";
    } else {
        let m = Math.floor((d % 3600) / 60);
        let s = Math.floor((d % 3600) % 60);

        let mDisplay = m <= 9 ? "0" + m + ":" : m + ":";
        let sDisplay = s <= 9 ? "0" + s : s;

        return mDisplay + sDisplay;
    }
}

const { counter, setCounter } = useContext(PlayerContext);

// define a function to handle the timer tick
const handleTimerTick = () => {
    // update the remaining time
    setCounter((time) => time - 1);
};

// start the timer when the component mounts
React.useEffect(() => {
    const timer = setInterval(handleTimerTick, 1000);

    // clean up the timer when the component unmounts
    return () => clearInterval(timer);
}, []);

React.useEffect(() => {
    if (counter === 0) {
        handleEndQuiz();
    }
}, [counter]);

export { startTimer };
