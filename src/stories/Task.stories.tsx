import React from 'react';
import Task from '../components/Task/Task';

export default {
    title: 'Task',
    component: Task,
}
// const Template=(args:any)=><Task {...args}/>;

const task = {
    id: '1',
    title: 'Task Test',
    state: 'Task_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
}
export const Default = () => {
    return (
        <Task task={task} />
    )
};
export const Pinned = () => {
    return (
        <Task task={{ ...task, state: "TASK PINNED" }} />
    )
}
export const Archieved = () => {
    return (
        <Task task={{ ...task, state: 'TASK ARCHIVED' }} />
    )
}