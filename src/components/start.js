import { Button } from "react-bootstrap";
import {Link} from "react-router-dom"
export default function Start() {
    return (
        <div className="container">
            <h1 className="mt-5 mb-5 text-center">Quiz</h1>
            <div className="d-flex justify-content-center">
                <Link to="/home">
                    <Button>Bắt đầu</Button>
                </Link>
            </div>
        </div>
    );
}
