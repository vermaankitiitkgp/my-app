import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createSkills, updateSkills, deleteSkills } from "./skillsSlice";


export default function Skills() {
    const [data, setData] = useState({ name: "", age: "" });
    const inputFields = useSelector((state) => state.skills.value);
    const dispatch = useDispatch();
    console.log(inputFields);
    let [dirty, setDirty] = useState({});
    const handleFormChange = (index, e) => {

        // let data = inputFields.map((row, rowIndex) => {

        //     if (index == rowIndex) {
        //         return {
        //             ...row,
        //             [event.target.name]: event.target.value
        //         }
        //     }
        //     return row;
        // })
        if (!dirty[index]) {
            setDirty({
                [index]: {
                    [e.target.name]: e.target.value
                }
            })
        }
        else {
            let k = { ...dirty, ...{ [index]: { ...dirty[index], ...{ [e.target.name]: e.target.value } } } };
            setDirty(k);
        }

        console.log(dirty);
        //setInputFields(data);
    }
    const saveField = (e) => {
        e.preventDefault();
        dispatch(createSkills(data));
        //setInputFields([...inputFields, data]);
        setData({});
    }
    const updateField = (index, newValue, e) => {
        e.preventDefault();
        console.log(newValue);
        dispatch(updateSkills({ index, newValue }));
        setDirty({});
    }
    const deleteField = (index, e) => {
        e.preventDefault();
        dispatch(deleteSkills(index));
        //let cp_inputs = [...inputFields];
        //cp_inputs.splice(index, 1);
        //setInputFields(cp_inputs);
    }

    return (
        <div>
            <h1>Skills</h1>
            <form>
                {inputFields.map((input, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='name'
                                placeholder='Skill'
                                value={(dirty[index] && dirty[index].name) || input.name}
                                onChange={event => handleFormChange(index, event)}
                            />
                            <input
                                name='age'
                                placeholder='Expertise Level'
                                value={(dirty[index] && dirty[index].age) || input.age}
                                onChange={event => handleFormChange(index, event)}
                            />

                            <button type="button" onClick={(e) => updateField(index, dirty[index], e)}>Update</button>
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