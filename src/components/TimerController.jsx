import { useState, useEffect, useRef } from "react";

const INIT_TIME = 1010;

// intervalID -> ref, time -> state, intervalID값을 바꿔도 화면 변화 없음, React는 state가 변경될 때만 리렌더링하기 때문
const TimerController = () => {
  const intervalId = useRef();
  const [time, setTime] = useState(INIT_TIME);
  const [isRunning, setIsrunning] = useState(false);

  // time이 바뀔때마다 실행됨
  useEffect(() => {
    if (time === 0) {
      console.log("타이머를 멈춰주세요!!");
      clearInterval(intervalId.current);
      setTime(INIT_TIME);
      setIsrunning(false);
    }
  }, [time]);

  return (
    <div>
      <div className="timerDisplay">
        <span className="value">{time}</span>
        <span className="unit">초</span>
      </div>
      <div className="timerButton">
        {isRunning ? (
          <button
            onClick={() => {
              setIsrunning(false);
              clearInterval(intervalId.current);
            }}
          >
            일시정지
          </button>
        ) : (
          <button
            className="startButton"
            onClick={() => {
              intervalId.current = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
              }, 1000);
              setIsrunning(true);
            }}
          >
            시작
          </button>
        )}
      </div>
    </div>
  );
};

export default TimerController;
