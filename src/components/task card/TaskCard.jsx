import React from 'react'
import "./TaskCard.style.scss"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
const TaskCard = (props) => {
  return (
    <div className='forallcard'>
        <h2>Portfolio Landing Page</h2>
        <div className='badge'>@{props.idbadge}</div>
        <div className='calendar'><div><CalendarTodayIcon/> {props.todaydate}</div><div><AccessTimeIcon/> {props.hours}</div></div>
        <div className='feature'>{props.input}</div>
    </div>
  )
}

export default TaskCard