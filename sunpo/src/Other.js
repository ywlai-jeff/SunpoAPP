import React from 'react';
import images from './images/food1.jpg'
import chilioilsmall from './images/productpic/19chilioilsmall.jpg'
import chilioilbig from './images/productpic/20chilioilbig.jpg'

class Other extends React.Component {
    constructor(props) {
        super(props);
      
        // this.state = {
          // tableinfo: [{table_number: '1'},]
          // active_function: '',
        // };
  
        this.AddFoodClick = this.AddFoodClick.bind(this);
      }

    AddFoodClick(data, e){
        e.preventDefault(e);
        this.props.AddFoodClick(e.target.value, data);
    }

    render(){

    return (
        <div class="menu_item">
        <div class="items_name"><p>其他</p></div>
        <div id="o1" class="items" onClick={this.AddFoodClick.bind(this, ["自製辣椒油(小)", 40, 1])}>
            <img src={chilioilsmall} width="100" height="100"></img>
            <div>自製辣椒油(小)</div>
            <div>$40</div>
        </div>
        <div id="o2" class="items" onClick={this.AddFoodClick.bind(this, ["自製辣椒油(大)", 80, 1])}>
            <img src={chilioilbig} width="100" height="100"></img>
            <div>自製辣椒油(大)</div>
            <div>$80</div>
        </div>
    </div>
    );
  }
}

export default Other;