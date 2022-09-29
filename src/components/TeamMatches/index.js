// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'

import './index.css'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    iplDetails: {},
  }

  componentDidMount() {
    this.getDetailsIpl()
  }

  getDetailsIpl = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({iplDetails: updateData})
    console.log('data', data)
  }

  render() {
    const {iplDetails} = this.state
    console.log('kk', iplDetails)
    const {recentMatches, teamBannerUrl, latestMatchDetails} = iplDetails
    return (
      <ul className="TeamMatches-container">
        <div>
          <img src={teamBannerUrl} className="teambanner" alt="team banner" />
        </div>
        <p className="latest-match-title">LatestMatch</p>
        <ul className="latest-match-details">
          <LatestMatch details={latestMatchDetails} />
        </ul>
        <ul className="match-card-item-list">
          {recentMatches &&
            recentMatches.map(match => (
              <MatchCard details={match} key={recentMatches.result} />
            ))}
        </ul>
      </ul>
    )
  }
}
export default TeamMatches
