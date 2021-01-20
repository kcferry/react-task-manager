import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

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

  // Delete Task

  const deleteTask = (id) => {
    settasks(tasks.filter((task) => task.id !== id ))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks To Show'}
    </div>
  );
}



export default App; 
