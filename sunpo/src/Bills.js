import React from 'react';
// import Menu from './Menu';
// import TableList from './Table';

import $ from 'jquery';

class Bills extends React.Component{
    constructor(props) {
      super(props);

    //   this.OrderClick = this.OrderClick.bind(this);
    //   this.PaybillsClick = this.PaybillsClick.bind(this);
    // //   this.ForecastClick = this.ForecastClick.bind(this);
    }

    // OrderClick(e){
    //     e.preventDefault(e);
    //     this.props.OrderClick(e.target.value);
    // }

    // PaybillsClick(e){
    //     e.preventDefault(e);
    //     this.props.PaybillsClick(e.target.value);
    // }

    // ForecastClick(e){
    //     e.preventDefault(e);
    //     this.props.ForecastClick(e.target.value);
    // }

    render(){


        return(
            <div>
                {/* <button onClick={this.OrderClick}>點餐</button>
                <button onClick={this.PaybillsClick}>查閱/結賬</button>
                <button onClick={this.ForecastClick}>Forecast</button> */}
            </div>
        );
    }
}

export default Bills;