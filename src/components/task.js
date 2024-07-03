import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggleRemainder, onToggleCompleted }) => {
  return (
    <div className={`task ${task.remainder ? 'reminder' : ''} ${task.completed ? 'completed' : ''}`} onDoubleClick={() => onToggleRemainder(task.id)}>
      
      <div>
      <h3>
      
        {task.text}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompleted(task.id)}
          style={{ marginRight: '10px' }}
        />
        <FaTimes
          style={{ color: 'red', cursor: 'pointer', float: 'right' }}
          onClick={() => onDelete(task.id)}
        />

      </h3>
      </div>
      <p>{task.day}</p>
    </div>
   
  );
};

export default Task;


