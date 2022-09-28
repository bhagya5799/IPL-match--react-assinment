// Write your code here
import React from 'react'

const LatestMatch = props => {
  const {details} = props
  const {name} = details
  return (
    <div className="latestMatch-container">
      <div>
        <h1>{name}</h1>
        <p>12-11</p>
        <p>jjjj</p>
        <p>gg</p>
      </div>
      <div>
        <p>jimg</p>
      </div>
      <div>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
      </div>
    </div>
  )
}
export default LatestMatch
