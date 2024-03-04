import React from 'react'
import "./ReportCard.css"
const ReportCard = ({icon,variable,amount}) => {
  return (
    <div className='ReportCard'>
    {icon}
    <p>{amount} <br />{variable}</p>
    {/* <p>{variable}</p> */}
</div>
  )
}

export default ReportCard