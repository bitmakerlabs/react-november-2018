import React, { Component } from 'react'

class YouTuber extends Component {

  videoPlayer = React.createRef()

  video_src = "https://www.youtube.com/embed/ZxMl1SDJ7po?autoplay=1"

  componentDidMount() {
    this.videoPlayer.current.src = this.video_src
  }

  playVideo = () => {
    this.videoPlayer.current.src = this.video_src
  }

  stopVideo = () => {
    this.videoPlayer.current.src = ""
  }

  render() {
    return (
      <div>
        <iframe ref={ this.videoPlayer }></iframe>
        <button onClick={ this.playVideo }>Play</button>
        <button onClick={ this.stopVideo }>Stop</button>
      </div>
    )
  }
}

export default YouTuber
