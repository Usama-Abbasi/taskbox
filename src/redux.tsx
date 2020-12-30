import {createSlice,PayloadAction,configureStore} from '@reduxjs/toolkit';
import { TaskInterface } from './components/Task/Task';

const initialState:TaskInterface[]=[
    { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
    { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
    { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
    { id: '4', title: 'Task4', state: 'TASK_INBOX' },
  ];
const taskSlice=createSlice({
    name:'Task',
    initialState,
    reducers:{
        archiveTask(state:any,action:PayloadAction<string>){
            return state.map((task:TaskInterface)=>task.id === action.payload ? { ...task, state: 'TASK_ARCHIVED' } : task)
        },
        pinTask(state:any,action:PayloadAction<string>){
            return state.map((task:any)=>task.id === action.payload ? { ...task, state: 'TASK_PINNED' } : task)
        },
        addTask(state:any,action){
            let id = "0";
            if (state.length !== undefined && state.length !== null) {
              id = (state.length + 1).toString();
            }
            // console.log(`State is ${state} and payload is:${action.payload.title}`);
            return [
              ...state,
              { id: id, title: action.payload.title, state: "TASK_INBOX" },
            ];
        }
    }
})


export const store=configureStore({reducer:taskSlice.reducer});

export const {archiveTask,pinTask,addTask} =taskSlice.actions;
export default taskSlice.reducer;