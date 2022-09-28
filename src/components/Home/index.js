// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    iplMatchList: [],
    isIplMatch: true,
  }

  componentDidMount() {
    this.iplMatchFunction()
  }

  iplMatchFunction = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplMatchList: updatedData, isIplMatch: false})
  }

  render() {
    const {iplMatchList, id} = this.state
    return (
      <Link to={`/MaTches/${id}`} className="router-link-items">
        <li className="home-container">
          <div className="ipl-logo-title-container">
            <img
              className="ipl-logo"
              alt="ipl logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            />
            <h1 className="ipl-dashBoard-title">IPL DashBoard</h1>
          </div>
          <ul>
            {iplMatchList.map(eachItem => (
              <TeamCard details={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </li>
      </Link>
    )
  }
}

export default Home
