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
        // edit_or_delete: true,
      };

      this.OrderTableClick = this.OrderTableClick.bind(this);
    }

    componentDidMount(){
        // this.setState({
        //     edit_or_delete: false
        // })
    }

    AddNewOrder(data, e){
        let which_function;
        if(this.props.payBills === '結賬'){
            which_function = "2" + data;
        }
        else{
            which_function = "1" + data;
        }
        // if(this.props.edit_or_delete === false)
        if(!this.props.tableinfo[parseInt(data)-1].isFull){
            this.props.AddNewOrder(e.target.value, which_function);
            // alert("a");
        }
           
    }     

    OrderTableClick(data, e){
        if(this.props.payBills === '結賬'){
            // this.setState({
            //     bills: <Bills transinfo={this.state.transinfo}/>
            // })
            // alert(data);
            this.props.OrderTableClick(e.target.value, "2" + data);
        }
        if(this.props.payBills === '點餐'){
            // alert("Delete?");
            this.props.OrderTableClick(e.target.value, "1" + data);
        }
    }     

    EditCurrOrder(data, e){
        if(window.confirm("你要修改此訂單？") == true){
            this.props.EditCurrOrder(e.target.value, data);
            // this.setState({
            //     edit_or_delete: true
            // })
        }
    }   

    DeleteCurrOrder(data, e){
        var tranId = data;
        if(window.confirm("你要移除這訂單嗎？") == true){
            var url = "http://localhost:3001/deletetran/" + tranId;
            $.ajax({
              url: url,
              method: "DELETE",
              xhrFields: {
                withCredentials: true
              },
              success:function(data){
                alert("成功移除此訂單！");
              }.bind(this),
              error:function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
              }
            });
        }
    }   

    // TClick = (e, data) => {
    //     alert('Clicked Table ' + e);
    // } 


    render(){
        let delete_curr_order, edit_curr_order, add_new_order, view_order, functions;
    functions = <div className="tables_name"><h4 className="table_title" ><span>{this.props.payBills}</span></h4></div>
    // functions = <h4 className="table_title" ><span>{this.props.payBills}</span></h4>
    if(this.props.payBills == '結賬'){
        delete_curr_order = '';
        edit_curr_order = '';
        add_new_order = '';
        view_order = 'hover_background';
    }
      else{  
        delete_curr_order = "fas fa-times-circle close_btn blacks";
        edit_curr_order = 'fas fa-edit view_btn';
        add_new_order = 'fas fa-plus-square add_btn';
        view_order = '';
      }
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
                <div className="table_page">
                <div className="tables_background">
            <div className="table_column">
                <div style={{backgroundColor: this.props.tableinfo[9].tableColor}} id="table_10" className="rectangle tables">
                    <ul>
                        <li>10 號枱 <div className={add_new_order} onClick={this.AddNewOrder.bind(this, "10")}></div></li>
                        <li>使用率: {this.props.tableinfo[9].seatTaken}/{this.props.tableinfo[9].maxCap}</li>
                        {this.props.tableinfo[9].transaction.map((item, index) => (
                            <li className={view_order} onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1}
                                <div className={edit_curr_order} onClick={this.EditCurrOrder.bind(this,item)}></div>
                                <div className={delete_curr_order} onClick={this.DeleteCurrOrder.bind(this,item)}></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[8].tableColor}} id="table_9" className="rectangle tables">
                    <ul>
                        <li>9 號枱 <div className={add_new_order} onClick={this.AddNewOrder.bind(this, "9")}></div></li>
                        <li>使用率: {this.props.tableinfo[8].seatTaken}/{this.props.tableinfo[8].maxCap}</li>
                        {this.props.tableinfo[8].transaction.map((item, index) => (
                            <li className={view_order} onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1} 
                                <div className={edit_curr_order} onClick={this.EditCurrOrder.bind(this,item)}></div>
                                <div className={delete_curr_order} onClick={this.DeleteCurrOrder.bind(this,item)}></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[7].tableColor}} id="table_8" className="rectangle tables">
                    <ul>
                        <li>8 號枱 <div className={add_new_order} onClick={this.AddNewOrder.bind(this, "8")}></div></li>
                        <li>使用率: {this.props.tableinfo[7].seatTaken}/{this.props.tableinfo[7].maxCap}</li>
                        {this.props.tableinfo[7].transaction.map((item, index) => (
                            <li className={view_order} onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1} 
                                <div className={edit_curr_order} onClick={this.EditCurrOrder.bind(this,item)}></div>
                                <div className={delete_curr_order} onClick={this.DeleteCurrOrder.bind(this,item)}></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[6].tableColor}} id="table_7" className="rectangle tables">
                    <ul>
                        <li>7 號枱 <div className={add_new_order} onClick={this.AddNewOrder.bind(this, "7")}></div></li>
                        <li>使用率: {this.props.tableinfo[6].seatTaken}/{this.props.tableinfo[6].maxCap}</li>
                        {this.props.tableinfo[6].transaction.map((item, index) => (
                            <li className={view_order} onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1} 
                                <div className={edit_curr_order} onClick={this.EditCurrOrder.bind(this,item)}></div>
                                <div className={delete_curr_order} onClick={this.DeleteCurrOrder.bind(this,item)}></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
               
            <div className="table_column table_col2">
                <div className="rectangle2" ></div>
                <div style={{backgroundColor: this.props.tableinfo[5].tableColor}} id="table_6" className="circle tables">
                    <ul>
                        <li>6 號枱 <div className={add_new_order} onClick={this.AddNewOrder.bind(this, "6")}></div></li>
                        <li>使用率: {this.props.tableinfo[5].seatTaken}/{this.props.tableinfo[5].maxCap}</li>
                        {this.props.tableinfo[5].transaction.map((item, index) => (
                            <li className={view_order} onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1} 
                                <div className={edit_curr_order} onClick={this.EditCurrOrder.bind(this,item)}></div>
                                <div className={delete_curr_order} onClick={this.DeleteCurrOrder.bind(this,item)}></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[4].tableColor}} id="table_5" className="circle tables">
                    <ul>
                        <li>5 號枱 <div className={add_new_order} onClick={this.AddNewOrder.bind(this, "5")}></div></li>
                        <li>使用率: {this.props.tableinfo[4].seatTaken}/{this.props.tableinfo[4].maxCap}</li>
                        {this.props.tableinfo[4].transaction.map((item, index) => (
                            <li className={view_order} onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1} 
                                <div className={edit_curr_order} onClick={this.EditCurrOrder.bind(this,item)}></div>
                                <div className={delete_curr_order} onClick={this.DeleteCurrOrder.bind(this,item)}></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[3].tableColor}} id="table_4" className="circle tables">
                    <ul>
                        <li>4 號枱 <div className={add_new_order} onClick={this.AddNewOrder.bind(this, "4")}></div></li>
                        <li>使用率: {this.props.tableinfo[3].seatTaken}/{this.props.tableinfo[3].maxCap}</li>
                        {this.props.tableinfo[3].transaction.map((item, index) => (
                            <li className={view_order} onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1} 
                                <div className={edit_curr_order} onClick={this.EditCurrOrder.bind(this,item)}></div>
                                <div className={delete_curr_order} onClick={this.DeleteCurrOrder.bind(this,item)}></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
               
            <div className="table_column">
                <div style={{backgroundColor: this.props.tableinfo[2].tableColor}} id="table_3" className="rectangle tables">
                    <ul>
                        <li>3 號枱 <div className={add_new_order} onClick={this.AddNewOrder.bind(this, "3")}></div></li>
                        <li>使用率: {this.props.tableinfo[2].seatTaken}/{this.props.tableinfo[2].maxCap}</li>
                        {this.props.tableinfo[2].transaction.map((item, index) => (
                            <li className={view_order} onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1} 
                                <div className={edit_curr_order} onClick={this.EditCurrOrder.bind(this,item)}></div>
                                <div className={delete_curr_order} onClick={this.DeleteCurrOrder.bind(this,item)}></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[1].tableColor}} id="table_2" className="rectangle tables">
                    <ul>
                        <li>2 號枱 <div className={add_new_order} onClick={this.AddNewOrder.bind(this, "2")}></div></li>
                        <li>使用率: {this.props.tableinfo[1].seatTaken}/{this.props.tableinfo[1].maxCap}</li>
                        {this.props.tableinfo[1].transaction.map((item, index) => (
                            <li className={view_order} onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1} 
                                <div className={edit_curr_order} onClick={this.EditCurrOrder.bind(this,item)}></div>
                                <div className={delete_curr_order} onClick={this.DeleteCurrOrder.bind(this,item)}></div>
                            </li>
                        ))}
                    </ul>
                    </div>
                <div style={{backgroundColor: this.props.tableinfo[0].tableColor}} id="table_1" className="rectangle tables">
                    <ul>
                        <li>1 號枱 <div className={add_new_order} onClick={this.AddNewOrder.bind(this, "1")}></div></li>
                        <li>使用率: {this.props.tableinfo[0].seatTaken}/{this.props.tableinfo[0].maxCap}</li>
                        {this.props.tableinfo[0].transaction.map((item, index) => (
                            <li className={view_order} onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1} 
                                <div className={edit_curr_order} onClick={this.EditCurrOrder.bind(this,item)}></div>
                                <div className={delete_curr_order} onClick={this.DeleteCurrOrder.bind(this,item)}></div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: this.props.tableinfo[10].tableColor}} id="table_11" className="rectangle tables">
                    <ul>
                        <li>外賣表 <div className={add_new_order} onClick={this.AddNewOrder.bind(this, "11")}></div></li>
                        {this.props.tableinfo[10].transaction.map((item, index) => (
                            <li className={view_order} onClick={this.OrderTableClick.bind(this,item)}>訂單 {index+1} 
                                <div className={edit_curr_order} onClick={this.EditCurrOrder.bind(this,item)}></div>
                                <div className={delete_curr_order} onClick={this.DeleteCurrOrder.bind(this,item)}></div>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* <div style={{backgroundColor: 'palegreen'}} id="table_1" class="rectangle" onClick={(e) => this.TClick("1", e)}>Table 1</div> */}
            </div>
        </div>
            </div>
                {/* {this.state.bills} */}
            </div>
            </Router>
      
        );
    }
}

export default TableList;