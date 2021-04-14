import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateResult } from "../features/resultSlice";
import { updateTotalQuestion } from "../features/totalQuestionSlice";

export default function HomePage() {
    // Mảng câu hỏi ban đầu
    const [questions, setQuestions] = useState([{}]);
    // Câu hỏi hiện tại
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // Tính điểm
    const [score, setScore] = useState(0);
    // Chuyển trang
    const history = useHistory();
    // Cập nhật state ở redux
    const dispatch = useDispatch();

    // Hàm xáo trộn mảng đẻ random ra câu hỏi mỗi lần chơi 
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Lấy dữ liệu đổ vào giao diện
    useEffect(() => {
        async function getData() {
            const res = await fetch(
                "https://data-quiz.herokuapp.com/questions"
            );
            const data = await res.json();
            shuffle(data);
            setQuestions(data);
        }
        getData();

    }, []);

    dispatch(updateTotalQuestion(questions.length));

    // Check câu trả lời đúng sai để cộng điểm ở state và redux
    function checkAnswer(event) {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            history.push("/result");
        }
        if (event.target.outerText === questions[currentQuestion]?.answer) {
            setScore(score + 1);
            dispatch(updateResult(score + 1));
        }
    }

    const arrButton = ["option1", "option2", "option3", "option4"];
    shuffle(arrButton);
    const randomAnswer = arrButton.map((answer) => (
        <Button key={answer} className="m-3" onClick={(event) => checkAnswer(event)}>
            {questions[currentQuestion].[answer]}
        </Button>
    ));
    
    return (
        <div className="container">
            <h1 className="text-center mt-5">
                Câu hỏi {currentQuestion + 1} / {questions.length}
            </h1>
            <h3 className="text-center mt-5">
                {questions[currentQuestion]?.question}
            </h3>
            <div className="d-flex justify-content-center flex-column mt-5">
                {randomAnswer}
            </div>
        </div>
    );
}
