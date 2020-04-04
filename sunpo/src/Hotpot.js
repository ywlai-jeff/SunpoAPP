import React from 'react';
import images from './images/food1.jpg'

import fishball from './images/productpic/36fishball.png';
import fishpin from './images/productpic/37fishpin.jpg';
import fishcorner from './images/productpic/38fishcorner.jpeg';
import beefball from './images/productpic/39beefball.jpg';
import porkball from './images/productpic/24porkball.jpg';
import squidball from './images/productpic/23squidball.jpg';
import yupeigao from './images/productpic/07yupeigao.jpg';
import fishchak from './images/productpic/22fishchak.jpg';
import shrimptun from './images/productpic/25shrimpwuntun.jpg';
import watergao from './images/productpic/27watergao.jpeg';
import fishnoodle from './images/productpic/fishnoodle1.jpeg'

class Hotpot extends React.Component {
    constructor(props) {
        super(props);
  
        // this.AddFoodClick = this.AddFoodClick.bind(this);
      }

      AddFoodClick(data, e){
        e.preventDefault(e);
        this.props.AddFoodClick(e.target.value, data);
    }

    render(){
    return (
        <div class="menu_item">
        <div class="items_name"><p>火鍋配料</p></div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["自製魚蛋(每斤)", 100, 1])}>
            <img src={fishball} width="100%" height="100"></img>
            <div>自製魚蛋(每斤)</div>
            <div>$100</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["雙滑魚片(每斤)", 100, 1])}>
            <img src={fishpin} width="100" height="100"></img>
            <div>雙滑魚片(每斤)</div>
            <div>$100</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["黃金魚角(每斤)", 100, 1])}>
            <img src={fishcorner} width="100" height="100"></img>
            <div>黃金魚角(每斤)</div>
            <div>$100</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["手打牛丸(每斤)", 100, 1])}>
            <img src={beefball} width="100" height="100"></img>
            <div>手打牛丸(每斤)</div>
            <div>$100</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["鮮豬肉丸(每斤)", 100, 1])}>
            <img src={porkball} width="100" height="100"></img>
            <div>鮮豬肉丸(每斤)</div>
            <div>$100</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["鮮墨魚丸(每斤)", 120, 1])}>
            <img src={squidball} width="100" height="100"></img>
            <div>鮮墨魚丸(每斤)</div>
            <div>$120</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["鮮魚皮餃(每斤)", 120, 1])}>
            <img src={yupeigao} width="100" height="100"></img>
            <div>鮮魚皮餃(每斤)</div>
            <div>$120</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["鮮魚肉麵(每斤)", 120, 1])}>
            <img src={fishnoodle} width="100" height="100"></img>
            <div>鮮魚肉麵(每斤)</div>
            <div>$120</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["鮮制魚扎(每斤)", 120, 1])}>
            <img src={fishchak} width="100" height="100"></img>
            <div>鮮制魚扎(每斤)</div>
            <div>$120</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["鮮蝦雲吞(每打)", 50, 1])}>
            <img src={shrimptun} width="100" height="100"></img>
            <div>鮮蝦雲吞(每打)</div>
            <div>$50</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["自製水餃(每打)", 60, 1])}>
            <img src={watergao} width="100" height="100"></img>
            <div>自製水餃(每打)</div>
            <div>$60</div>
        </div>
    </div>
    );
  }
}

export default Hotpot;