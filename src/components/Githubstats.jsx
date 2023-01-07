import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'
const Githubstats = () => {
    const style={
        margin:"3rem 0 2rem 0",
        padding:"2rem"
    }
  return (
    <div style={style}>
        <GitHubCalendar
        style={{margin:"auto"}}
        username="geraltyen"
        blockSize={20}
        fontSize={20}
         >
        <ReactTooltip delayShow={20}/>
        </GitHubCalendar>
        

        <img src="https://github-readme-streak-stats.herokuapp.com?user=geraltyen&theme=radical&date_format=j%20M%5B%20Y%5D&fire=FF9C9C&ring=FFA7A1&border=FFA7A1&background=FFFBF3&dates=000000" alt="streak stats" style={{margin:"2rem auto 1rem auto"}} />

        <br />
       
            <img src="https://github-readme-stats.vercel.app/api?username=geraltyen&count_private=true&show_icons=true&theme=radical&fire=FF9C9C&ring=FFA7A1&border=FFA7A1&background=FFFBF3" alt="stat" style={{margin:"auto"}} />
        
        
    </div>
  )
}

export default Githubstats