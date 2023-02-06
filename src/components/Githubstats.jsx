import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'
import "../css/github.css"
const Githubstats = ({gitStats}) => {
    const style={
        margin:"3rem 0 2rem 0",
        padding:"2rem"
    }
  return (
    <div className='g-main' ref={gitStats}>
    <h1 className='g-text'>Github Streaks `N` Stats</h1>
        <div className='g-cal'>
        <GitHubCalendar
        username="geraltyen"
        fontSize={10}
        blockSize={10} 
        
        className="g-calsub"
         >
        <ReactTooltip delayShow={20}/>
        </GitHubCalendar>
        </div>

        <img src="https://github-readme-streak-stats.herokuapp.com?user=geraltyen&theme=radical&date_format=j%20M%5B%20Y%5D&fire=FF9C9C&ring=FFA7A1&border=FFA7A1&background=FFFBF3&dates=000000" alt="streak stats" />

        <br />
       
            <img src="https://github-readme-stats.vercel.app/api?username=geraltyen&count_private=true&show_icons=true&theme=radical&fire=FF9C9C&ring=FFA7A1&border=FFA7A1&background=FFFBF3" alt="stat" />
        
        
    </div>
  )
}

export default Githubstats