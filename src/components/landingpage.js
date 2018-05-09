import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              src="https://openclipart.org/image/2400px/svg_to_png/277084/Male-Avatar-3.png"
              alt="avatar"
              className="avatar-img"
            />
            
            <div className="banner-text">
              <h1>Junior Web Developer</h1>
              
            <hr/>
            
              <p>HTML/CSS | Bootstrap | Javascript | React | Ruby | Rails</p>
              
            <div className="social-links">
            
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/rondaledavis/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              
              {/* GitHub */}
              <a href="https://github.com/RDavis2005" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              
              {/* BitBucket */}
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-bitbucket-square" aria-hidden="true" />
              </a>
              
            </div>
              </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;