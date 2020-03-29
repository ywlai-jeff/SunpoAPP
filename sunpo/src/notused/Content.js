import React from 'react';
import Menu from './Menu';
// import TableList from './Table';

import $ from 'jquery';

class Content extends React.Component{
    constructor(props) {
      super(props);

      this.OrderClick = this.OrderClick.bind(this);
      this.PaybillsClick = this.PaybillsClick.bind(this);
      this.ForecastClick = this.ForecastClick.bind(this);
    }

    OrderClick(e){
        e.preventDefault(e);
        this.props.OrderClick(e.target.value);
    }

    PaybillsClick(e){
        e.preventDefault(e);
        this.props.PaybillsClick(e.target.value);
    }

    ForecastClick(e){
        e.preventDefault(e);
        this.props.ForecastClick(e.target.value);
    }

    render(){


        return(
            <div class="content_bar">
                <a class="function_btn" onClick={this.OrderClick}>點餐</a>
                <a class="function_btn" onClick={this.PaybillsClick}>查閱/結賬</a>
                <a class="function_btn"  onClick={this.ForecastClick}>Forecast</a>
            </div>
        );
    }
}

export default Content;