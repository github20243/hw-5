import React, { useState } from 'react';
import Button from './UI/Button';

const AllCompleted = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
    { id: 4, title: 'Task 4', completed: true }
  ]);

  const showAll = () => setFilteredTasks(tasks);
  const showCompleted = () => setFilteredTasks(tasks.filter(task => task.completed));
  const showUncompleted = () => setFilteredTasks(tasks.filter(task => !task.completed));

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  return (
    <div>
      <Button onClick={showAll}>All</Button>
      <Button onClick={showCompleted}>Completed</Button>
      <Button onClick={showUncompleted}>Uncompleted</Button>
      <br />
      {filteredTasks.map(task => (
        <p key={task.id}>
          {task.title} {task.completed ? 'COMPLETED' : 'NOT COMPLETED'}
        </p>
      ))}
    </div>
  );
};

export default AllCompleted;
