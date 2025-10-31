import { useState } from 'react'
import TaskForm from './components/TaskForm.jsx' 
import TaskCounter from './components/TaskCounter.jsx'
import TaskList from './components/TaskList.jsx'
import TaskItem from './components/TaskItem.jsx'
import calendar_icon from '../../assets/calendar_icon.png'
import check_icon from '../../assets/check_icon.png'
import menu_icon from '../../assets/menu_icon.png'
import search_icon from '../../assets/search_icon.png'
import inbox_icon from '../../assets/inbox_icon.png'
import upcoming_icon from '../../assets/upcoming_icon.png'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const filteredTasks = getFilteredTasks()

  function getFilteredTasks() {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed)
    } else if (filter === "completed") {
      return tasks.filter((task) => task.completed)
    } else {
      return tasks
    }
  }

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    }
    setTasks([...tasks, newTask])
  }
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }



  return (
<div className="App">
  <header className="site-header">
    <button className="menu"> 
      <img className="menu-icon" src={menu_icon} alt="Menu" />
    </button>
    <form className="search"> 
      <label className="search-container">
        <img className="search-icon" src={search_icon} alt="Search" />
        <input className="search-input" type="search" placeholder="Quick Find" />
      </label>
    </form>

    <div className="header-right">
      <img src={check_icon} alt="Check" className="check-icon" />
      <span className="task-counter">
      <TaskCounter tasks = {tasks}/>
      </span>
    </div>
  </header>

  <div className="site-main">
    <aside className="nav" aria-label="Main navigation">
      <ul className="nav-menu">
        <li>
          <a href="#inbox" className="nav-inbox">
            <img src={inbox_icon} alt="inbox-icon" className="nav-icon" />Inbox
            <span className="nav-count">5</span>
          </a>
        </li>
        <li>
          <a href="#today" className="nav-today">
            <img src={calendar_icon} alt="calendar-icon" className="nav-icon" />Today
            <span className="nav-count">5</span>
          </a>
        </li>
        <li>
          <a href="#upcoming" className="nav-upcoming">
            <img src={upcoming_icon} alt="upcoming-icon" className="nav-icon" />Upcoming
          </a>
        </li>
      </ul>
    </aside>

    <section className="article">
      <section className="inbox">
      <h1>Tasks</h1>
      <div>
      <span onClick = {() => setFilter("all")}>All</span>
        <span className = "filter-separator"> | </span>
        <span onClick = {() => setFilter("active")}>Active</span>
        <span className = "filter-separator"> | </span>
        <span onClick = {() => setFilter("completed")}>Completed</span>
      </div>
      <TaskForm onAddTask = {addTask}/>
      <p>To-Do List</p>
      <TaskList 
        tasks = {filteredTasks}
        onToggle = {toggleTask}
        onDelete = {deleteTask}
        onClick = {getFilteredTasks}/>
      </section>
    </section>
  </div>
</div>

  )
}

export default App
