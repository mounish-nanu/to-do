import React  from "react";
import {Task} from '../types';

interface Props{
    task: Task;
    onToggle : (id: number) => void
    onDelete : (id: number) => void

}

const TaskItem: React.FC<Props> = ({task, onToggle, onDelete}) => {
    return (
        <li>
            <span
                onClick = {() => onToggle(task.id)}
                style = {{textDecoration: task.completed ? 'line-through' : 'none', cursor : 'pointer'}}
                >
                    {task.text}
                </span>
                <button onClick = {() => onDelete(task.id)}> X </button>
        </li>
    );
};

export default TaskItem;