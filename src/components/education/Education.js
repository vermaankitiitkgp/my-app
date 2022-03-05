import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createEducation } from "./educationSlice";

export default function Education() {
    const [inputs, setInputs] = useState(useSelector((state) => state.education.value));
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createEducation(inputs));
    }

    return (
        <div>
            <h1>Education</h1>
            <form>
                <label>Enter your College:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>Enter your Year:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>

                <button onClick={handleSubmit}>
                    <Link to="/exp">Experience
                    </Link>
                </button>
            </form>
        </div>

    )
}