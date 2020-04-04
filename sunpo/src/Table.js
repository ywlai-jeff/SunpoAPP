import React from 'react';

import Menu from './Menu';
import Bills from './Bills';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";

import $ from 'jquery';
import { timingSafeEqual } from 'crypto';


class TableList extends React.Component{
    constructor(props) {
      super(props);
    
      this.state = {

      };

      this.OrderTableClick = this.OrderTableClick.bind(this);
    }

    componentDidMount(){
       
    }

    TableClick(data, e){
        let which_function;
        if(this.props.payBills === '結賬'){
            which_function = "2" + data;
        }
        else{
            which_function = "1" + data;
        }

        if(!this.props.tableinfo[parseInt(data)-1].isFull){
            this.props.TableClick(e.target.value, which_function);
        }
           
    }     

    OrderTableClick(data, e){
        if(this.props.payBills === '結賬'){
            // this.setState({
            //     bills: <Bills transinfo={this.state.transinfo}/>
            // })
            // alert(data);
            this.props.OrderTableClick(e.target.value, data);
        }
        if(this.props.payBills === '點餐'){
            // alert("Delete?");
        }
    }     

    // TClick = (e, data) => {
    //     alert('Clicked Table ' + e);
    // } 


    render(){
        let current, functions;
    functions = <h3 className="table_title" >{this.props.payBills}</h3>
    // if(this.state.bills !== '')
    //     current = '';
    //   else{  
          current = 
        <div class="table_page">
                <div class="tables_background">
            <div class="table_column">
                <div style={{backgroundColor: this.props.tableinfo[9].tableColor}} id="table_10" class="rectangle tables" onClick={this.TableClick.bind(this, "10")}>
                    <ul>
                        <li>10 號枱</li>
                        <li>使用率: {this.props.tableinfo[9].seatTaken}/{this.props.tableinfo[9].maxCap}</li>
                        {this.props.tableinfo[9].transaction.map((item, index) => (
                            <li class="hover_background" onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1}</li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[8].tableColor}} id="table_9" class="rectangle tables" onClick={this.TableClick.bind(this, "9")}>
                    <ul>
                        <li>9 號枱</li>
                        <li>使用率: {this.props.tableinfo[8].seatTaken}/{this.props.tableinfo[8].maxCap}</li>
                        {this.props.tableinfo[8].transaction.map((item, index) => (
                            <li class="hover_background" onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1}</li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[7].tableColor}} id="table_8" class="rectangle tables" onClick={this.TableClick.bind(this, "8")}>
                    <ul>
                        <li>8 號枱</li>
                        <li>使用率: {this.props.tableinfo[7].seatTaken}/{this.props.tableinfo[7].maxCap}</li>
                        {this.props.tableinfo[7].transaction.map((item, index) => (
                            <li class="hover_background" onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1}</li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[6].tableColor}} id="table_7" class="rectangle tables" onClick={this.TableClick.bind(this, "7")}>
                    <ul>
                        <li>7 號枱</li>
                        <li>使用率: {this.props.tableinfo[6].seatTaken}/{this.props.tableinfo[6].maxCap}</li>
                        {this.props.tableinfo[6].transaction.map((item, index) => (
                            <li class="hover_background" onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1}</li>
                        ))}
                    </ul>
                </div>
            </div>
               
            <div class="table_column table_col2">
                <div class="rectangle2" ></div>
                <div style={{backgroundColor: this.props.tableinfo[5].tableColor}} id="table_6" class="circle tables" onClick={this.TableClick.bind(this, "6")}>
                    <ul>
                        <li>6 號枱</li>
                        <li>使用率: {this.props.tableinfo[5].seatTaken}/{this.props.tableinfo[5].maxCap}</li>
                        {this.props.tableinfo[5].transaction.map((item, index) => (
                            <li class="hover_background" onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1}</li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[4].tableColor}} id="table_5" class="circle tables" onClick={this.TableClick.bind(this, "5")}>
                    <ul>
                        <li>5 號枱</li>
                        <li>使用率: {this.props.tableinfo[4].seatTaken}/{this.props.tableinfo[4].maxCap}</li>
                        {this.props.tableinfo[4].transaction.map((item, index) => (
                            <li class="hover_background" onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1}</li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[3].tableColor}} id="table_4" class="circle tables" onClick={this.TableClick.bind(this, "4")}>
                    <ul>
                        <li>4 號枱</li>
                        <li>使用率: {this.props.tableinfo[3].seatTaken}/{this.props.tableinfo[3].maxCap}</li>
                        {this.props.tableinfo[3].transaction.map((item, index) => (
                            <li class="hover_background" onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1}</li>
                        ))}
                    </ul>
                </div>
            </div>
               
            <div class="table_column">
                <div style={{backgroundColor: this.props.tableinfo[2].tableColor}} id="table_3" class="rectangle tables" onClick={this.TableClick.bind(this, "3")}>
                    <ul>
                        <li>3 號枱</li>
                        <li>使用率: {this.props.tableinfo[2].seatTaken}/{this.props.tableinfo[2].maxCap}</li>
                        {this.props.tableinfo[2].transaction.map((item, index) => (
                            <li class="hover_background" onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1}</li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[1].tableColor}} id="table_2" class="rectangle tables" onClick={this.TableClick.bind(this, "2")}>
                    <ul>
                        <li>2 號枱</li>
                        <li>使用率: {this.props.tableinfo[1].seatTaken}/{this.props.tableinfo[1].maxCap}</li>
                        {this.props.tableinfo[1].transaction.map((item, index) => (
                            <li class="hover_background" onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1}</li>
                        ))}
                    </ul>
                    </div>
                <div style={{backgroundColor: this.props.tableinfo[0].tableColor}} id="table_1" class="rectangle tables" onClick={this.TableClick.bind(this, "1")}>
                    <ul>
                        <li>1 號枱</li>
                        <li>使用率: {this.props.tableinfo[0].seatTaken}/{this.props.tableinfo[0].maxCap}</li>
                        {this.props.tableinfo[0].transaction.map((item, index) => (
                            <li class="hover_background" onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1}</li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[10].tableColor}} id="table_11" class="rectangle tables" onClick={this.TableClick.bind(this, "11")}>
                    <ul>
                        <li>外賣</li>
                        {/* <li>使用率: {this.props.tableinfo[2].seatTaken}/{this.props.tableinfo[2].maxCap}</li> */}
                        {this.props.tableinfo[10].transaction.map((item, index) => (
                            <li class="hover_background" onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1}</li>
                        ))}
                    </ul>
                </div>
                
                {/* <div style={{backgroundColor: 'palegreen'}} id="table_1" class="rectangle" onClick={(e) => this.TClick("1", e)}>Table 1</div> */}
            </div>
        </div>
            </div>
    //   }
        return(
            <Router>
            <div>
                {/* <Redirect path="/menu">
                    <Menu BackTableClick = {this.BackTableClick}
                              PlaceOrderClick = {this.PlaceOrderClick}
                              // tableNumber = {tableNumber}
                              userId={this.state.userId}
        />,
                    </Redirect> */}
                {functions}
                {current}
                {/* {this.state.bills} */}
            </div>
            </Router>

        );
    }
}

export default TableList;