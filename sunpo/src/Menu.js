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
import Select from 'react-select';
// import ReactJson from 'react-json-view';

// import img from '../public/logo192.png'

import $ from 'jquery';

const Numbers = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
  ];

// const Colors = [
//     "rgb(219, 242, 255)",
//     "rgb(219, 0, 255)"
// ]

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
        seatTaken: null,
        // customList: [],
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
      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('scroll', this.updateDimensions);
        setInterval( () => {
            this.setState({
              currentTime : new Date().toLocaleString(),
            })
            let ctime = new Date().toLocaleString();
            this.state.addedList.map(item => {
                item.seatTaken = this.state.seatTaken;
                item.transTime = ctime;
                item.totalPrice = this.state.totalPrice;
            })
          },100)
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
        // window.innerHeight: 647
        // document.body.scrollHeight 
    }

    BackTableClick(data, e){
        e.preventDefault(e);
        let which_function;
            which_function = "" + data;
        this.props.BackTableClick(e.target.value, which_function);
    }

    AddFoodClick(e, data){
        // alert(data[0] +' ' + data[1]);
        // alert(this.state.orderList.length);
        let check = 0, time = 0;
        let submitTime = new Date().toLocaleString();
        this.state.orderList.map(item => {
                if (item.name == data[0]){
                    if (time == 0){
                        var confirmation = window.confirm('訂單內已有相同選項，仍要加入訂單嗎？');
                        time = 1;
                        if(confirmation === true){
                            check = 0;
                        }else{
                            item.quantity = item.quantity + 1;
                            check = 1;
                       
                            let additionalPrice = (item.price - item.originalPrice*(item.quantity-1)) / (item.quantity-1)
                            item.price = (item.originalPrice + additionalPrice) * item.quantity;
                        }
                    }
                }
                item.transTime = submitTime;
                item.seatTaken = this.state.seatTaken;
        })
        if(check == 0){
            this.setState({
                // orderList: [...this.state.orderList, ...[data[0], data[1], data[2]] ]
                orderList: this.state.orderList.concat({"name": data[0], "price": data[1], "originalPrice": data[1], 
                "quantity": data[2], "custom": [], "totalPrice": 0, "tableNumber": this.props.tableNumber, "orderStatus": '',
            "transTime": submitTime, "seatTaken": this.state.seatTaken, "id": this.state.orderList.length+1,}),
                // customList: this.state.customList.concat({"id": this.state.orderList.length+1, "custom": []}),
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
        let check = 0, id = 0;
        let a = this.state.currentSelected.split(",");
        id = a[1];
        this.state.orderList.map(item => {
            if (item.name == a[0] && id == item.id){
                item.custom.map(i => {
                    if(i == data[0]){
                        check = 1;
                    }
                })
                if(check == 0){
                    if(id == item.id){
                        item.custom = item.custom.concat(data[0]);

                        if(data[1] != 0){
                            let additionalPrice = (item.price - item.originalPrice*item.quantity) / item.quantity + data[1]
                            item.price = (item.originalPrice + additionalPrice) * item.quantity;
                        }
                    }
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
        let a = this.state.currentSelected.split(",");
        // $(a[1]).css("backgroundColor: "+Colors[1]);
        this.setState({
            currentSelected: data,
        })
     }
    
      MinusClick(data, e){
        let a = this.state.currentSelected.split(",");
        let id = a[1];
        this.state.orderList.map(item => {
            if (item.name == data && id == item.id){
                item.quantity = item.quantity - 1;
                let additionalPrice;
                if(item.quantity < 1){
                    item.quantity = 1;
                }
                else{
                    additionalPrice = (item.price - item.originalPrice*(item.quantity+1)) / (item.quantity+1);
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

    PlusClick(data, e){
        let a = this.state.currentSelected.split(",");
        let id = a[1];
        this.state.orderList.map(item => {
            if (item.name == data && id == item.id){
                item.quantity = item.quantity + 1;
                
                let additionalPrice = (item.price - item.originalPrice*(item.quantity-1)) / (item.quantity-1)
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
    let a = this.state.currentSelected.split(",");
    let id = a[1];
    // alert(id);
    alert(data);
    var confirmation = window.confirm('你要刪除此項目嗎?');
    if(confirmation === true){  
        this.setState({
            orderList: this.state.orderList.filter (todo => {  
                // alert(todo.id);
                return todo.id !== parseInt(a[1]);
                // return todo.name !== data;
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
    let a = this.state.currentSelected.split(",");
    let id = a[1];
    let additionalPrice = 0, deduct = 0, multiply = 0;
    var confirmation = window.confirm('你要刪除此配料嗎?');
    if(confirmation === true){  
        this.state.orderList.map(item => {
            if (item.name == a[0] && id == item.id ){
                item.custom = item.custom.filter(todo => { return todo !== data; })
                if("冰底" === data || "外賣"  === data|| "分盒" === data)  //more to add
                    deduct = 1;
                else if("飯"  === data || "泡飯" === data)
                    deduct = 5;
                else if("加底" === data)
                    deduct = 8;
                else if("學生優惠" === data)
                    deduct = -5;
                let additionalPrice = (item.price - item.originalPrice*(item.quantity)) / (item.quantity) - deduct;
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
}
  
    PlaceOrderClick(datas, e){
        e.preventDefault(e);
        if(this.state.totalPrice){
            if(this.state.seatTaken){
                // alert(datas[0].custom[1]+' '+datas[0].totalPrice +" "+ datas[0].name);
                var products = [];
                var name = [];
                var price = [];
                var originalPrice = [];
                var quantity = [];
                var custom = [];
                var product_size = 0;

                datas.map((items, index) => {
                    product_size = index+1;
                    name = name.concat(items.name);
                    price = price.concat(items.price);
                    originalPrice = originalPrice.concat(items.originalPrice);
                    quantity = quantity.concat(items.quantity);
                    items.custom.map((item,i) => {
                        if(i>0)
                            custom = custom+",";
                        custom = custom +item;
                    })
                    custom = custom + ".";
                })

                var added = {
                    'product_size': product_size,
                    'userId': this.props.userId,
                    'name': name.toString(),
                    'price': price.toString(),
                    'originalPrice': originalPrice.toString(),
                    'quantity': quantity.toString(),
                    'custom': custom.toString(),
                    'totalPrice': datas[0].totalPrice,
                    'tableNumber': datas[0].tableNumber,
                    'orderStatus': "proceeding",
                    'transTime': datas[0].transTime,
                    'seatTaken': datas[0].seatTaken,
                  }

                var confirmation = window.confirm('你確定要落單?');
                if(confirmation === true){
                // send orderList to database
                var url = "http://localhost:3001/inserttransaction"

                $.ajax({
                  url: url,
                  method: "POST",
                data: added,
                  xhrFields: {
                    withCredentials: true
                  },
                  success:function(data){
                    // if (data.message === "Added Success!"){
                        alert(data.message);
                    // }else if (data.message == "Error")
                        // alert(data.message);
                  }.bind(this),
                  error:function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                  }
                });

                this.props.PlaceOrderClick(e.target.value, datas);
                }
            }
            else
                alert("請輸入人數！");
        }
        else
            alert("請加入訂單！");
    }

    handleChange(e){
        const numOfPeople = prompt('請輸入人數:');
        this.setState({
            seatTaken: numOfPeople,
        })
    }


    render(){
        let totalPrice = 0;
        this.state.addedList.map(item => (
            totalPrice = totalPrice + item.price
        ))
        
        let tablenumber;
        if(this.props.tableNumber == "11")
            tablenumber = <li>外賣</li>
        else tablenumber = 
        <li>{this.props.tableNumber} 號枱</li>

        return(
        <Router>
            <div class="menu_page">
                <div class="menu_category" style={{top: this.state.heightSet}}>
                    {/* <h2>類別</h2> */}
                    <ul>
                        {tablenumber}
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
                    {/* <Route path="/menu/specialFood">
                        <SpecialFood />
                    </Route> */}
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
                        <div id={item.id} /*style={{backgroundColor: Colors[0]}}*/ class="items_added_add" onClick={this.CustomClick.bind(this, item.name+','+item.id)}>
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
                    <div class="items_name"><p className="hover" onClick={this.handleChange}>人數：{this.state.seatTaken}</p></div>
                    
                    <div class="items_name"><p>總計: $ {this.state.totalPrice}</p></div>
                    <div class="items_name"><p>時間: {this.state.currentTime}</p></div>
                    {/* <Select options={Numbers} placeholder="人數" className="dropdown" onChange={this._handleChange}/> */}
                </div>
                

                <div class="pay_bottom">
                    <ul>
                        <li onClick={this.BackTableClick.bind(this, "1")}><a>&lt; 返回</a></li>
                        <li id="placeorder_btn" onClick={this.PlaceOrderClick.bind(this, this.state.addedList)}><a>落單 &gt;</a></li>
                        {/* <li id="placeorder_btn" onClick={(event)=>this.PlaceOrderClick(event, this.state.added)}><a>落單 &gt;</a></li> */}
                    </ul>
                 </div>
            </div>
        </Router>
        );
    }
}


export default Menu;