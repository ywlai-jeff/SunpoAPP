import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import images from './images/food1.jpg'
// import img from '../public/logo192.png'

import $ from 'jquery';

class Menu extends React.Component{
    constructor(props) {
      super(props);

    //   this.OrderClick = this.OrderClick.bind(this);
    //   this.PaybillsClick = this.PaybillsClick.bind(this);
    //   this.ForecastClick = this.ForecastClick.bind(this);
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
        <Router>
            <div class="menu_page">
                <div class="menu_category">
                    <h2>類別</h2>
                    <ul>
                        <li><Link to="/menu/normalFood">單/雙拼</Link></li>
                        <li><Link to="/menu/specialFood">特餐</Link></li>
                        <li><Link to="/menu/individualFood">單點</Link></li>
                        <li><Link to="/menu/drink">飲品</Link></li>
                        <li><Link to="/menu/hotpot">火鍋配料</Link></li>
                        <li><Link to="/menu/other">其他</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/menu/normalFood">
                        <NormalFood />
                    </Route>
                    <Route path="/menu/specialFood">
                        <SpecialFood />
                    </Route>
                    <Route path="/menu/individualFood">
                        <IndividualFood />
                    </Route>
                    <Route path="/menu/drink">
                        <Drink />
                    </Route>
                    <Route path="/menu/hotpot">
                        <Hotpot />
                    </Route>
                    <Route path="/menu/other">
                        <Other />
                    </Route>
                </Switch>
                <div class="added_item">
                    <div class="items_added">
                        <img src={images} width="100" height="100"></img>
                        <div>Product Name</div>
                        <div>Price</div>
                    </div>
                    <button>提交</button>
                </div>
                
                
            </div>
        </Router>
        );
    }
}

function NormalFood() {
    return (
        <div class="menu_item">
        <div class="items_name">
            <p>請選擇一或兩樣</p>
        </div>
        <div class="items">
            <img src={images} width="100" height="100"></img>
            <div>Product Name</div>
        </div>

        <div class="items">
            <img src={images} width="100" height="100"></img>
            <div>Product Name</div>
        </div>

        <div class="items">
            <img src={images} width="100" height="100"></img>
            <div>Product Name</div>
        </div>

        <div class="items_name">
            <p>請選擇撈麵/飯/泡飯</p>
        </div>

        <div class="items">
            <img src="./images/food1.jpg" width="100" height="100"></img>
            <div>Product Name</div>
        </div>

        <div class="items_name">
            <p>跟餐加配</p>
        </div>

        <div class="items">
            <img src="./images/food1.jpg" width="100" height="100"></img>
            <div>Product Name</div>
        </div>

        <div class="items_name">
            <p>飲品</p>
        </div>

        <div class="items">
            <img src="./images/food1.jpg" width="100" height="100"></img>
            <div>Product Name</div>
        </div>

        {/* <div class="items_name">
            <p>Customerised</p>
        </div>

        <div class="items">
            <img src="./images/food1.jpg" width="100" height="100"></img>
            <div>Product Name</div>
        </div> */}

        <div class="items_name">
            <p>學生優惠</p>
        </div>

        <div class="items">
            <div>Product Name</div>
        </div>
    </div>
    );
  }

  function SpecialFood() {
    return (
        <div class="menu_item">
        <div class="items">
            <img src="./images/food1.jpg" width="100" height="100"></img>
            <div>Product Name</div>
            <div>Price</div>
        </div>

        <div class="items">
            <div>Img</div>
            <div>Product Name</div>
            <div>Price</div>
        </div>

        <div class="items">
            <div>Img</div>
            <div>Product Name</div>
            <div>Price</div>
        </div>

        <div class="items">
            <div>Img</div>
            <div>Product Name</div>
            <div>Price</div>
        </div>
    </div>
    );
  }

  function IndividualFood() {
    return (
        <div class="menu_item">
        <div class="items">
            <img src="./images/food1.jpg" width="100" height="100"></img>
            <div>Product Name</div>
            <div>Price</div>
        </div>

        <div class="items">
            <div>Img</div>
            <div>Product Name</div>
            <div>Price</div>
        </div>

        <div class="items">
            <div>Img</div>
            <div>Product Name</div>
            <div>Price</div>
        </div>
    </div>
    );
  }

  function Drink() {
    return (
        <div class="menu_item">
        <div class="items">
            <img src="./images/food1.jpg" width="100" height="100"></img>
            <div>Product Name</div>
            <div>Price</div>
        </div>

        <div class="items">
            <div>Img</div>
            <div>Product Name</div>
            <div>Price</div>
        </div>

        <div class="items">
            <div>Img</div>
            <div>Product Name</div>
            <div>Price</div>
        </div>
    </div>
    );
  }

  function Hotpot() {
    return (
        <div class="menu_item">
        <div class="items">
            <img src="./images/food1.jpg" width="100" height="100"></img>
            <div>Product Name</div>
            <div>Price</div>
        </div>

        <div class="items">
            <div>Img</div>
            <div>Product Name</div>
            <div>Price</div>
        </div>
    </div>
    );
  }

  function Other() {
    return (
        <div class="menu_item">
        <div class="items">
            <img src="./images/food1.jpg" width="100" height="100"></img>
            <div>Product Name</div>
            <div>Price</div>
        </div>
    </div>
    );
  }


export default Menu;