import { ProgressBar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectQuest } from "../features/currentQuestSlice";
import { updateCurrentQuest } from "../features/currentQuestSlice";
import { useHistory } from "react-router-dom"

export default function CountDown() {
  const [time, setTime] = useState(60);

  const history = useHistory()
  const dispatch = useDispatch();
  const currentQuest = useSelector(selectQuest);

  function decrement() {
    if (time === 0) {
      clearInterval(decrement);
      dispatch(updateCurrentQuest(currentQuest + 1));
      history.push("/result")
    }
    setTime(time - 5);
  }

  useEffect(() => {
    const timeOut = setInterval(decrement, 1000);
    return () => clearInterval(timeOut);
  }, [time]);

  // const timeOut = setInterval(decrement, 1000);

  console.log(time);
  return (
    <>
      <ProgressBar className="mt-3" min={0} max={60} animated now={time} />
    </>
  );
}
