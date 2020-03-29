import React from 'react';
// import Try from './Try';
// import Menu from './Menu';
// import logic from './logic';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

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
        // alert('Clicked ' + data);
        // e.preventDefault(e);
        let which_function;
        if(this.props.payBills)
            which_function = "2" + data;
        else
            which_function = "1" + data;
        this.props.TableClick(e.target.value, which_function);
        // alert(which_function);
    }     

    // TClick = (e, data) => {
    //     alert('Clicked Table ' + e);
    // } 


    render(){
        let current;
        current = 
        <div class="table_page">
            <div class="table_column">
                <div style={{backgroundColor: this.props.tableinfo[9].tableColor}} id="table_10" class="rectangle" onClick={this.TableClick.bind(this, "10")}>Table 10</div>
                <div style={{backgroundColor: this.props.tableinfo[8].tableColor}} id="table_9" class="rectangle" onClick={this.TableClick.bind(this, "9")}>Table 9</div>
                <div style={{backgroundColor: this.props.tableinfo[7].tableColor}} id="table_8" class="rectangle" onClick={this.TableClick.bind(this, "8")}>Table 8</div>
                <div style={{backgroundColor: this.props.tableinfo[6].tableColor}} id="table_7" class="rectangle" onClick={this.TableClick.bind(this, "7")}>Table 7</div>
            </div>
               
            <div class="table_column table_col2">
                <div class="rectangle2" ></div>
                <div style={{backgroundColor: this.props.tableinfo[5].tableColor}} id="table_6" class="circle" onClick={this.TableClick.bind(this, "6")}>Table 6</div>
                <div style={{backgroundColor: this.props.tableinfo[4].tableColor}} id="table_5" class="circle" onClick={this.TableClick.bind(this, "5")}>Table 5</div>
                <div style={{backgroundColor: this.props.tableinfo[3].tableColor}} id="table_4" class="circle" onClick={this.TableClick.bind(this, "4")}>Table 4</div>
            </div>
               
            <div class="table_column">
                <div class="rectangle2" ></div>
                <div style={{backgroundColor: this.props.tableinfo[2].tableColor}} id="table_3" class="rectangle" onClick={this.TableClick.bind(this, "3")}>Table 3</div>
                <div style={{backgroundColor: this.props.tableinfo[1].tableColor}} id="table_2" class="rectangle" onClick={this.TableClick.bind(this, "2")}>Table 2</div>
                <div style={{backgroundColor: this.props.tableinfo[0].tableColor}} id="table_1" class="rectangle" onClick={this.TableClick.bind(this, "1")}>Table 1</div>
                {/* <div style={{backgroundColor: 'palegreen'}} id="table_1" class="rectangle" onClick={(e) => this.TClick("1", e)}>Table 1</div> */}
            </div>
        </div>
        return(
            // <Router>
            //     <Link to="/login">login</Link>
            //     <Link to="/logout">logout</Link>
            //     <Link to="/order">order</Link>
            //     <Link to="/paybills">paybills</Link>
            //     <Link to="/forecast">forecast</Link>
            //     <Link exact to="/">Home</Link>
            <div>
                {current}
            </div>
            /* </Router> */
        );
    }
}

export default TableList;