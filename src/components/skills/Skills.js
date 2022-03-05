import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createSkills } from "./skillsSlice";


export default function Skills() {
    const [inputFields, setInputFields] = useState(useSelector((state) => state.skills.value));
    const dispatch = useDispatch();
    const handleFormChange = (index, event) => {

        let data = inputFields.map((row, rowIndex) => {

            if (index == rowIndex) {
                //row[event.target.name] = event.target.value;
                return {
                    ...row,
                    [event.target.name]: event.target.value
                }
            }
            return row;
        })
        console.log(data);
        setInputFields(data);
    }
    const addFields = () => {
        let newfield = {}
        setInputFields([...inputFields, newfield])
    }
    const submit = (e) => {
        e.preventDefault();
        dispatch(createSkills(inputFields));
    }
    return (
        <div>
            <form>
                {inputFields.map((input, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='name'
                                placeholder='Skill'
                                value={input.name}
                                onChange={event => handleFormChange(index, event)}
                            />
                            <input
                                name='age'
                                placeholder='Expertise Level'
                                value={input.age}
                                onChange={event => handleFormChange(index, event)}
                            />
                        </div>
                    )
                })}

            </form>
            <button onClick={addFields}>Add More..</button>
            <button onClick={submit}>Submit</button>
            <Link to="/summary">Summary
            </Link>
        </div>
    );
}