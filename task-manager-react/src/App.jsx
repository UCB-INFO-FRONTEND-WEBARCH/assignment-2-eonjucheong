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
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
<div className="App">
  <header className="site-header">
    <button className="menu"> 
      <img className="menu-icon" src={menu_icon} alt="Menu" />
    </button>
    <p>This is the header</p>
    <form className="search"> 
      <label className="search-container">
        <img className="search-icon" src={search_icon} alt="Search" />
        <input className="search-input" type="search" placeholder="Quick Find" />
      </label>
    </form>

    <div className="header-right">
      <img src={check_icon} alt="Check" className="check-icon" />
      <span className="task-counter">30/5</span>
    </div>
  </header>

  <h1>Task Manager</h1>
  <p>Task Form</p>
  <TaskForm />
  <p>Task Counter</p>
  <TaskCounter />
  <p>Task List</p>
  <TaskList />
  <p>Task Item</p>
  <TaskItem />

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
        <h1>Inbox</h1>
        <ul className="task-list">
          <li><label><input type="checkbox" className="circular-button" /> Call Mom</label></li>
          <hr />
          <li><label><input type="checkbox" className="circular-button" /> Buy the new issue of Scientific American</label></li>
          <hr />
          <li><label><input type="checkbox" className="circular-button" /> Return the textbook to Josie</label></li>
          <hr />
          <li><label><input type="checkbox" className="circular-button" /> Buy the new album by Rake</label></li>
          <hr />
          <li><label><input type="checkbox" className="circular-button" /> Buy a gift card for Dad</label></li>
        </ul>
      </section>
    </section>
  </div>
</div>

  )
}

export default App
