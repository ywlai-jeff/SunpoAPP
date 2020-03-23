import React from 'react';
// import Try from './Try';
// import Menu from './Menu';

import $ from 'jquery';
import { timingSafeEqual } from 'crypto';


class TableList extends React.Component{
    constructor(props) {
      super(props);
    
      this.state = {
        // tableinfo: [{table_number: '1'},]
        // active_function: '',
      };

    //   this.TableClick = this.TableClick.bind(this);
    }

    TableClick(data, e){
        alert('Clicked ' + data);
        // e.preventDefault(e);
        this.props.TableClick(e.target.value, data);
        // if()
        // this.setState({
        //     active_function: <Menu/>
        //   });

    }     

    // TClick = (e, data) => {
    //     alert('Clicked Table ' + e);
    // } 


    render(){
        let current;
        current = 
        <div class="table_page">
            <div class="table_column">
                <div id="table_10" class="rectangle" onClick={this.TableClick.bind(this, "10")}>Table 10</div>
                <div id="table_9" class="rectangle" onClick={this.TableClick.bind(this, "9")}>Table 9</div>
                <div id="table_8" class="rectangle" onClick={this.TableClick.bind(this, "8")}>Table 8</div>
                <div id="table_7" class="rectangle" onClick={this.TableClick.bind(this, "7")}>Table 7</div>
            </div>
               
            <div class="table_column">
                <div id="table_6" class="circle" onClick={this.TableClick.bind(this, "6")}>Table 6</div>
                <div id="table_5" class="circle" onClick={this.TableClick.bind(this, "5")}>Table 5</div>
                <div id="table_4" class="circle" onClick={this.TableClick.bind(this, "4")}>Table 4</div>
                <div class="rectangle2" >Current orders waiting:</div>
            </div>
               
            <div class="table_column">
                <div id="table_3" class="rectangle" onClick={this.TableClick.bind(this, "3")}>Table 3</div>
                <div id="table_2" class="rectangle" onClick={this.TableClick.bind(this, "2")}>Table 2</div>
                <div id="table_1" class="rectangle" onClick={this.TableClick.bind(this, "1")}>Table 1</div>
                <div class="rectangle2" >Current Time:</div>
                {/* <div id="table_1" class="rectangle" onClick={(e) => this.TClick("1", e)}>Table 1</div> */}
            </div>
        </div>
        
        return(
            <div>
                {current}
            </div>
        );
    }
}

export default TableList;