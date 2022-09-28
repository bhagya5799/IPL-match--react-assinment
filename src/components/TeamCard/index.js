// Write your code here
import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, id, teamImageUrl} = details
  return (
    <div className="TeamCard-container">
      <img src={teamImageUrl} className="teamUrl" />
      <h1 className="name">{name}</h1>
    </div>
  )
}
export default TeamCard
