import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Summary() {
    const [inputs, setInputs] = useState(useSelector((state) => state));
    console.log(inputs);
    const dispatch = useDispatch();



    return (
        <div>
            <h1>Summary</h1>
            <h2>Education</h2>
            <p>Your college name is:{inputs.education.value.username}</p>
            <p>Your year is:{inputs.education.value.age}</p>
            <h2>Experience</h2>
            <p>Your comapany name is:{inputs.exp.value.username}</p>
            <p>No of years worked is:{inputs.exp.value.age}</p>
            <h2>Skills</h2>
            {inputs.skills.value.map((input, index) => {
                return (
                    <div key={index}>
                        <p>Your skill name is:{input.name}</p>
                        <p>Your rating is:{input.age}</p>
                    </div>
                )
            })}

            <button>
                <Link to="/skills">Skills
                </Link>
            </button>
        </div>
    )
}