// Write your code here
import React from 'react'
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {updateData} = details
  const res = details.match_status
  console.log(res, 'liu')
  const styleRes = res === 'Won' ? 'green' : 'red'

  return (
    <li className="matchCard-container">
      <img
        src={details.competing_team_logo}
        className="c-team-logo"
        alt={`competing team ${details.competing_team}`}
      />
      <p>{details.competing_team}</p>
      <p className="result-details">{details.result}</p>
      <p className={styleRes}>{res}</p>
    </li>
  )
}

export default MatchCard
