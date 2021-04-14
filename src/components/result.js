import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateResult } from "../features/resultSlice";
import { useSelector } from "react-redux";
import {selectResult} from "../features/resultSlice"
import {selectTotalQuestion} from "../features/totalQuestionSlice"


export default function Result() {
    const history = useHistory();
    const dispatch = useDispatch()
    const result = useSelector(selectResult)
    const totalQuestion = useSelector(selectTotalQuestion)
    function replay() {
        dispatch(updateResult(0))
        history.push("/home");
    }

    console.log(typeof(result))
    console.log(typeof(totalQuestion))

    return (
        <div>
            <h1 className="text-center mt-5">Kết quả</h1>
            <div className="container">
                <div className="d-flex justify-content-center flex-column mt-5">
                    <h4 className="text-center">Bạn đã trả lời đúng {result} / {totalQuestion} </h4>
                    <h5 className="text-center"> Tỉ lệ đúng ( { Number(result) / Number(totalQuestion) * 100} )%</h5>
                    <Button className="mt-4" onClick={replay}>Chơi Lại</Button>
                </div>
            </div>
        </div>
    );
}
