// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    handleClick = () => {
        this.setState(previousState => {
           return { settings: {
                ...this.state.settings,
                bitrate: previousState.settings.bitrate + 4
           }
            }
        })
    }

    upRes = () => {
        this.setState({
                settings: {
                    ...this.state.settings,
                    video: {
                        resolution: "720p"
                    }
                }
            }
        )}
    
    
    
    
    render() {
        console.log(this.state)
        return (
            <div>
              <button className="bitrate" onClick={this.handleClick}>Adjust bitrate</button> 
              <button className="resolution" onClick={this.upRes}> Decrease resolution</button> 
            </div>
        );
    }
}

export default YouTubeDebugger;
