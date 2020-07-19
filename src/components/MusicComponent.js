import React from 'react';


class Music extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      play: true,
      pause: false,
    }
    this.url = "http://streaming.tdiradio.com:8000/house.mp3";
    this.audio = new Audio(this.url);
  }

 componentDidMount(){
  
  this.audio.play()
 
 
 }

play = () => {
  this.setState({ play: true, pause: false })
  this.audio.play();
}
  
  pause = () => {
  this.setState({ play: false, pause: true })
    this.audio.pause();
  }
  
  render() {
   
  return (
    <div>
      <button className="btn-sm btn btn-warning" onClick={this.play}><span className="fa fa-play"> Play</span></button>
      <button className="btn-sm btn btn-warning" onClick={this.pause}><span className="fa fa-pause"> Pause</span></button>
    </div>
    );
  }
}

export  default Music