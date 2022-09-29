// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    iplMatchList: [],
  }

  componentDidMount() {
    this.iplMatchFunction()
  }

  iplMatchFunction = async () => {
    const {iplMatchList} = this.state
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplMatchList: updatedData})
    console.log('IDS', data.teams)
  }

  render() {
    const {iplMatchList} = this.state
    return (
      <li className="home-container">
        <div className="ipl-logo-title-container">
          <img
            className="ipl-logo"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="ipl-dashBoard-title">IPL DashBoard</h1>
        </div>
        <div>
          <ul>
            {iplMatchList.length < 1 && (
              <div testid="loader">
                <Loader color="white" type="TailSpin" />
              </div>
            )}
            {iplMatchList.map(eachItem => (
              <TeamCard details={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </li>
    )
  }
}

export default Home
