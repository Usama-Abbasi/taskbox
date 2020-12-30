import React from 'react';
import { TaskInterface } from '../components/Task/Task';
import TaskList from '../components/TaskList/Tasklist';
import * as TaskStories from './Task.stories';
export default{
    name:'TaskList',
    component:TaskList,
    decorators:[(story:any)=><div style={{padding:'3rem'}}>{story()}</div>],
}
const tasks:TaskInterface[]=[
    {...TaskStories.Default.arguments.task,id:'1',title:'Task 1'},
    {...TaskStories.Default.arguments.task,id:'2',title:'Task 2'},
    {...TaskStories.Default.arguments.task,id:'3',title:'Task 3'},
    {...TaskStories.Default.arguments.task,id:'4',title:'Task 4'},
    {...TaskStories.Default.arguments.task,id:'5',title:'Task 5'},
    {...TaskStories.Default.arguments.task,id:'6',title:'Task 6'},
]
export const Default = ()=>{
    return(
    <TaskList tasks={tasks} loading={false}/>
    );
};

export const WithPinnedTasks = ()=>{
    return(
        <TaskList tasks={[...Default.arguments.tasks.slice(0,5),
            { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
        ]} loading={false}/>
    )
}


export const Loading = ()=>{
    return(
        <TaskList tasks={[]} loading={true} />
    )
}

export const Empty = ()=>{
    return(
        <TaskList tasks={[]} loading={false} />
    )
};


