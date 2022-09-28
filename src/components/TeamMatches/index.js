// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {
    iplDetails: {},
  }

  componentDidMount() {
    this.getDetailsIpl()
  }

  getDetailsIpl = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updateData = {
      name: data.name,
      id: data.id,
      teamImageUrl: data.team_image_url,
    }
    this.setState({iplDetails: updateData})
  }

  render() {
    const {teamImageUrl, iplDetails} = this.state
    return (
      <div className="TeamMatches-container">
        <div>
          <img src={teamImageUrl} />
        </div>
        {iplDetails.map(eachItem => (
          <LatestMatch details={eachItem} />
        ))}
      </div>
    )
  }
}
export default TeamMatches
