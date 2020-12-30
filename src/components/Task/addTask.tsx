import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {addTask} from '../../redux';
const AddTask=()=> {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>("");
    const handleSubmit = () => {
        if (title !== "") {
          dispatch(addTask({ title }));
          setTitle("");
        } else {
          alert("Title is required");
        }
      };
    return (
        <div>
            <h1>Add Task</h1>
            <p>Title</p>
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} style={{width:'200px',height:'20px'}}/>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default AddTask;