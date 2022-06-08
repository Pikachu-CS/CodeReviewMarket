import React from 'react'
import matrixVideo from '/assets/alb_matx002_again1080p.mp4'

const Video = () => {
  return (
    <div className = 'flex bg-cover w-100% h-100%'>
        <video autoPlay loop muted id='video'>
            <source src={matrixVideo} type='video/mp4'/>
        </video>
        </div>
  )
}

export default Video