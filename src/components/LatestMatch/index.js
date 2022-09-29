// Write your code here
import React from 'react'
import './index.css'

const LatestMatch = props => {
  const {details} = props
  console.log('props', props)
  const updateLatestDetails = {
    umpires: details?.umpires,
    result: details?.result,
    manOfTheMatch: details?.man_of_the_match,
    id: details?.id,
    date: details?.date,
    venue: details?.venue,
    competingTeam: details?.competing_team,
    competingTeamLogo: details?.competing_team_logo,
    firstInnings: details?.first_innings,
    secondInnings: details?.second_innings,
    matchStatus: details?.match_status,
  }

  const {
    umpires,
    result,
    id,
    venue,
    date,
    matchStatus,
    secondInnings,
    firstInnings,
    competingTeamLogo,
    competingTeam,
    manOfTheMatch,
  } = updateLatestDetails

  return (
    <div className="latestMatch-container">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{result}</p>
        <p>{venue}</p>
      </div>
      <div>
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      </div>
      <div>
        <p>{umpires}</p>
        <p>{matchStatus}</p>
        <p>{secondInnings}</p>
        <p>{firstInnings}</p>
        <p>{manOfTheMatch}</p>
      </div>
    </div>
  )
}
export default LatestMatch
