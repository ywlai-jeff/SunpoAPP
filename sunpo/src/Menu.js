import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import images from './images/food1.jpg'
import TableList from './Table';
import Food from './Food';
import IndividualFood from './IndividualFood';
import Drink from './Drink';
import Hotpot from './Hotpot';
import Other from './Other';


import $ from 'jquery';

class Menu extends React.Component{
    constructor(props) {
      super(props);

      this.state = {
        heightSet: '',
        orderList: [],
        addedList: [],
        currentSelected: '',
        totalPrice: 0,
        currentTime: '',
      }
        this.updateDimensions = this.updateDimensions.bind(this);
      this.BackTableClick = this.BackTableClick.bind(this);
      this.AddFoodClick = this.AddFoodClick.bind(this);
      this.AddCustomClick = this.AddCustomClick.bind(this);
      this.MinusClick = this.MinusClick.bind(this);
      this.PlusClick = this.PlusClick.bind(this);
      this.DeleteClick = this.DeleteClick.bind(this);
      this.CustomClick = this.CustomClick.bind(this);
      this.DeleteCustomClick = this.DeleteCustomClick.bind(this);
      this.PlaceOrderClick = this.PlaceOrderClick.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('scroll', this.updateDimensions);
        setInterval( () => {
            this.setState({
              currentTime : new Date().toLocaleString()
            })
          },1000)
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateDimensions);
    }
    
    updateDimensions() {
        if(window.scrollY >83){
            this.setState({heightSet: window.scrollY - "85"});
        }
        else{
            this.setState({ heightSet: window.scrollY});
        }
    }

    BackTableClick(data, e){
        e.preventDefault(e);
        let which_function;
            which_function = "" + data;
        this.props.BackTableClick(e.target.value, which_function);
    }

    AddFoodClick(e, data){
        // alert(data[0] +' ' + data[1]);
        let check = 0;
        this.state.orderList.map(item => {
                if (item.name == data[0]){
                    var confirmation = window.confirm('Different Item?');
                    if(confirmation === true){
                        check = 0;
                    }else{
                        item.quantity = item.quantity + 1;
                        check = 1;
                        let additionalPrice = item.price/item.quantity-1 - item.originalPrice;
                        item.price = (item.originalPrice + additionalPrice) * item.quantity;
                    }
                }
        })
        if(check == 0){
            this.setState({
                orderList: this.state.orderList.concat({"name": data[0], "price": data[1], "originalPrice": data[1], 
                "quantity": data[2], "custom": [], "totalPrice": '', "tableNumber": this.props.tableNumber, "transTime": new Date().toLocaleString(),})
              })
        }
        setTimeout(function() { 
            this.setState({
                addedList: this.state.orderList,
                totalPrice: 0,
            })
            this.state.addedList.map(item => (
                this.setState({
                    totalPrice: this.state.totalPrice + item.price,
                })
            ))
        }.bind(this), 100)
    }

    AddCustomClick(e, data){
        this.state.orderList.map(item => {
            if (item.name == this.state.currentSelected ){
                item.custom = item.custom.concat(data[0]);
                if(data[1] != 0){
                    let additionalPrice = item.price/item.quantity - item.originalPrice + data[1];
                    item.price = (item.originalPrice + additionalPrice) * item.quantity;
                }
            }
    })
    setTimeout(function() { 
        this.setState({
            addedList: this.state.orderList,
            totalPrice: 0,
        })
        this.state.addedList.map(item => (
            this.setState({
                totalPrice: this.state.totalPrice + item.price,
            })
        ))
    }.bind(this), 100)
    }

    CustomClick(data, e){
        this.setState({
            currentSelected: data,
        })
     }
    
      MinusClick(data, e){
        this.state.orderList.map(item => {
            if (item.name == data){
                item.quantity = item.quantity - 1;
                let additionalPrice = item.price/(item.quantity+1) - item.originalPrice;
                if(item.quantity < 1){
                    item.quantity = 1;
                    additionalPrice = item.price/(item.quantity) - item.originalPrice;
                }
                item.price = (item.originalPrice + additionalPrice) * item.quantity;
            }
        })
        setTimeout(function() { 
            this.setState({
                addedList: this.state.orderList,
                totalPrice: 0,
            })
            this.state.addedList.map(item => (
                this.setState({
                    totalPrice: this.state.totalPrice + item.price,
                })
            ))
        }.bind(this), 100)
    }

    PlusClick(data, e){
        this.state.orderList.map(item => {
            if (item.name == data){
                item.quantity = item.quantity + 1;
                let additionalPrice = item.price/(item.quantity-1) - item.originalPrice;
                item.price = (item.originalPrice + additionalPrice) * item.quantity;
            }
        })
        setTimeout(function() { 
            this.setState({
                addedList: this.state.orderList,
                totalPrice: 0,
            })
            this.state.addedList.map(item => (
                this.setState({
                    totalPrice: this.state.totalPrice + item.price,
                })
            ))
        }.bind(this), 100)
  }
    DeleteClick(data, e){
    var confirmation = window.confirm('你要刪除此項目嗎?');
    if(confirmation === true){  
        this.setState({
            orderList: this.state.orderList.filter (todo => {  
                return todo.name !== data;
              })
        })
        setTimeout(function() { 
            this.setState({
                addedList: this.state.orderList,
                totalPrice: 0,
            })
            this.state.addedList.map(item => (
                this.setState({
                    totalPrice: this.state.totalPrice + item.price,
                })
            ))
        }.bind(this), 100)
    }
}

DeleteCustomClick(data, e){
    let additionalPrice = 0, deduct = 0;
    var confirmation = window.confirm('你要刪除此配料嗎?');
    if(confirmation === true){  
        this.state.orderList.map(item => {
            if (item.name == this.state.currentSelected ){
                item.custom = item.custom.filter(todo => {
                    additionalPrice = item.price/item.quantity - item.originalPrice - deduct;
                    item.price = (item.originalPrice + additionalPrice) * item.quantity;
                    return todo !== data;
                })
            }
    })
        setTimeout(function() { 
            this.setState({
                addedList: this.state.orderList,
                totalPrice: 0,
            })
            this.state.addedList.map(item => (
                this.setState({
                    totalPrice: this.state.totalPrice + item.price,
                })
            ))
        }.bind(this), 100)
    }
}
  
    PlaceOrderClick(data, e){
        e.preventDefault(e);
        if(this.state.totalPrice){
            this.state.addedList.map(item => {
                item.totalPrice = this.state.totalPrice
                this.setState({
                    currentTime: new Date().toLocaleString()
                })
            })
            this.props.PlaceOrderClick(e.target.value, data);
        }
    }

    render(){

        // let totalPrice = 0;
        // this.state.addedList.map(item => (
        //     totalPrice = totalPrice + item.price
        // ))

        return(
        <Router>
            <div class="menu_page">
                <div class="menu_category" style={{top: this.state.heightSet}}>
                    {/* <h2>類別</h2> */}
                    <ul>
                        <li>Table {this.props.tableNumber}</li>
                        <Link to="/food" style={{ textDecoration: 'none' }}><li>套餐</li></Link>
                        {/* <li><Link to="/menu/specialFood" style={{ textDecoration: 'none' }}>特餐</Link></li> */}
                        <Link to="/individualFood" style={{ textDecoration: 'none' }}><li>單點</li></Link>
                        <Link to="/drink" class="menu_link" style={{ textDecoration: 'none' }}><li>飲品</li></Link>
                        <Link to="/hotpot" style={{ textDecoration: 'none' }}><li>火鍋配料</li></Link>
                        <Link to="/other" style={{ textDecoration: 'none' }}><li>其他</li></Link>
                    </ul>
                </div>
                <Switch>
                    <Route path="/food">
                        <Food AddFoodClick = {this.AddFoodClick} AddCustomClick = {this.AddCustomClick}/>
                    </Route>
                    <Route path="/individualFood">
                        <IndividualFood AddFoodClick = {this.AddFoodClick} AddCustomClick = {this.AddCustomClick}/>
                    </Route>
                    <Route path="/drink">
                        <Drink AddFoodClick = {this.AddFoodClick} AddCustomClick = {this.AddCustomClick}/>
                    </Route>
                    <Route path="/hotpot" /*component={Hotpot}*/ >
                        <Hotpot AddFoodClick = {this.AddFoodClick}/>
                    </Route>
                    <Route path="/other">
                        <Other AddFoodClick = {this.AddFoodClick}/>
                    </Route>
                </Switch>

                <div class="added_item">
                <div class="items_name"><p>已選擇訂單:</p></div>
                    {this.state.addedList.map(item => (
                        <div class="items_added_add" onClick={this.CustomClick.bind(this, item.name)}>
                            <div class="fas fa-times-circle close_btn" onClick={this.DeleteClick.bind(this, item.name)}></div>
                            <div key={item} /*contenteditable="true"*/>{item.name}</div>
                            <div key={item}>${item.price}</div>
                            <div key={item}><span class="edit_btn" onClick={this.MinusClick.bind(this, item.name)}>-</span> {item.quantity} <span class="edit_btn" onClick={this.PlusClick.bind(this, item.name)}>+</span></div>
                        
                            {item.custom.map(items => (
                                <div key={items} class="del_btn" onClick={this.DeleteCustomClick.bind(this, items)}>{items}</div>
                            ))}
                        </div>
                    ))}
                </div>

                <div class="added_item">
                    <div class="items_name"><p>人數：</p></div>
                        <div class="items_name"><p>總計: $ {this.state.totalPrice}</p></div>
                    <div class="items_name"><p>時間: {this.state.currentTime}</p></div>
                </div>

                <div class="pay_bottom">
                    <ul>
                        <li onClick={this.BackTableClick.bind(this, "1")}><a>&lt; 返回</a></li>
                        <li id="placeorder_btn" onClick={this.PlaceOrderClick.bind(this, this.state.addedList)}><a>落單 &gt;</a></li>
                    </ul>
                 </div>
            </div>
        </Router>
        );
    }
}


export default Menu;