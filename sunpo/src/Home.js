import React from 'react';
import images from './images/food1.jpg'

class Home extends React.Component{
    constructor(props) {
        super(props);
  
        // this.state = {
         
        // }

      }

      render(){
          return(
              <div>
                  <img src={images}></img>
              </div>
          )
      }
}

export default Home;