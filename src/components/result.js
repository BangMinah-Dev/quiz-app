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

    return (
        <div>
            <h1 className="text-center mt-5">Kết quả</h1>
            <div className="container">
                <div className="d-flex justify-content-center flex-column mt-5">
                    <p className="text-center">Bạn đã trả lời đúng {result} / {totalQuestion} </p>
                    <Button onClick={replay}>Chơi Lại</Button>
                </div>
            </div>
        </div>
    );
}
