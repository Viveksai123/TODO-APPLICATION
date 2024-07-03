import Task from './task';

const Tasks = ({ array, onDelete, onToggleRemainder, onToggleCompleted }) => {
  return (
    <>
      {array.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggleRemainder={onToggleRemainder} onToggleCompleted={onToggleCompleted} />
      ))}
    </>
  );
};

export default Tasks;
