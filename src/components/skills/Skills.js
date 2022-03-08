import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createSkills, updateSkills, deleteSkills } from "./skillsSlice";


export default function Skills() {
    const [data, setData] = useState({ name: "", age: "" });
    const [inputFields, setInputFields] = useState(useSelector((state) => state.skills.value));
    const dispatch = useDispatch();
    const handleFormChange = (index, event) => {

        let data = inputFields.map((row, rowIndex) => {

            if (index == rowIndex) {
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
    const saveField = (e) => {
        e.preventDefault();
        dispatch(createSkills(data));
        setInputFields([...inputFields, data]);
        setData({});
    }
    const updateField = (index, newValue, e) => {
        e.preventDefault();
        console.log(newValue);
        dispatch(updateSkills({ index, newValue }));
    }
    const deleteField = (index, e) => {
        e.preventDefault();
        dispatch(deleteSkills(index));
        let cp_inputs = [...inputFields];
        cp_inputs.splice(index, 1);
        setInputFields(cp_inputs);
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

                            <button onClick={(event) => updateField(index, input, event)}>Update</button>
                            <button onClick={(event) => deleteField(index, event)}>Delete</button>
                        </div>
                    )
                })}
            </form>
            <form>
                <label>
                    Skill
                    <input
                        name="name"
                        value={data.name || ""}
                        onChange={(e) => {
                            let updatedName = e.target.value;
                            let newData = { ...data, name: updatedName };
                            setData(newData);
                        }}
                    />
                </label>
                <br />
                <label>
                    Level:
                    <input
                        name="age"
                        value={data.age || ""}
                        type="number"
                        onChange={(e) => {
                            let updatedAge = e.target.value;
                            let newData = { ...data, age: updatedAge };
                            setData(newData);
                        }}
                    />
                </label>
                <button onClick={saveField}>Save Skill</button>
            </form>
            <div>
                <Link to="/exp">Experience</Link>
                <Link to="/summary">Summary</Link>
            </div>

        </div>
    );
}