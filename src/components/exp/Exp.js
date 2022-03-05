import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createExp } from "./expSlice";


export default function Exp() {
    const [inputs, setInputs] = useState(useSelector((state) => state.exp.value));
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createExp(inputs));
    }

    return (
        <div>
            <h1>Experience</h1>
            <form>
                <label>Enter your Company Name:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>No of years worked:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleSubmit}>
                    <Link to="/">Education
                    </Link>
                </button>
                <button onClick={handleSubmit}>
                    <Link to="/skills">Skills
                    </Link>
                </button>
            </form>
        </div>
    )
}