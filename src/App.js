import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, settasks] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2.30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting',
        day: 'Feb 6th at 1.30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2.30pm',
        reminder: false
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = uuidv4()
    const newTask = {id, ...task}
    settasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    settasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle reminder 
  const toggleReminder = (id) => {
    settasks(tasks.map((task) => task.id === id ? 
    {...task, reminder: !task.reminder} : task 
      )
    )
  }

  return (
    <div className="container">
      <Header />

      {showAddTask && <AddTask onAdd={addTask}/> }

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}
        /> 
      ) : (
          'No Tasks To Show')}

    </div>
  );
}

export default App; 
