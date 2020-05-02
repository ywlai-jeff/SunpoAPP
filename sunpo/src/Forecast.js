import React from 'react';
import images from './images/food1.jpg'
// import forecast from './forecast';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Forecast extends React.Component{
    constructor(props) {
        super(props);
  
        // this.state = {
         
        // }

      }

      render(){
          return(
            <Router>
              <div>
                <Link to="https://i.cs.hku.hk/~ywlai/sunpo/index.php"/>
                <a href="https://i.cs.hku.hk/~ywlai/sunpo/index.php" target="blank">Forecast's Link</a>
              </div>
            </Router>
          )
      }
}

export default Forecast;