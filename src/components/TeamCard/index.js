// Write your code here
import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, id, teamImageUrl} = details
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="TeamCard-container">
        <img src={teamImageUrl} className="teamUrl" alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
