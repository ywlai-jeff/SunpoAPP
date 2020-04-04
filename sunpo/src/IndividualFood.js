import React from 'react';
import images from './images/food1.jpg'

import doublezone from './images/productpic/doublezone.jpeg'
import pighand from './images/productpic/28pighand.jpg';
import ngaulam from './images/productpic/32ngaulam.jpeg';
import ngauzharp from './images/productpic/33ngauzharp.jpg';
import cowstomache from './images/productpic/34cowstomache.jpg';
import cowmagun from './images/productpic/35cowmagun.jpg';

import hofan from './images/productpic/43HoFan.jpg'
import maifan from './images/productpic/44maifan.jpg'
import meisin from './images/productpic/meisin.jpeg'
import thinnoodle from './images/productpic/45thinnoodle.jpg'
import thicknoodle from './images/productpic/46thicknoodle.jpg'
import yimin from './images/productpic/50yimin.jpg'
import fishnoodle from './images/productpic/fishnoodle1.jpeg'

import cabbage from './images/productpic/cabbage.png'
import tungchoi from './images/productpic/tungchoi.png'
import kailan from './images/productpic/kalang.png'
import choisum from './images/productpic/choisum.png'
import fishskin from './images/productpic/56fishskin.jpg'


class IndividualFood extends React.Component {
    constructor(props) {
        super(props);
  
        // this.AddFoodClick = this.AddFoodClick.bind(this);
      }
      AddFoodClick(data, e){
        e.preventDefault(e);
        this.props.AddFoodClick(e.target.value, data);
    }

      AddCustomClick(data, e){
        e.preventDefault(e);
        this.props.AddCustomClick(e.target.value, data);
    }

    render(){
    return (
        <div class="menu_item">
        <div class="items_name"><p>單點小食</p></div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["大生菜", 16, 1])}>
            <img src={cabbage} width="100" height="100"></img>
            <div>大生菜</div>
            <div>$16</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["大通菜", 16, 1])}>
            <img src={tungchoi} width="100" height="100"></img>
            <div>大通菜</div>
            <div>$16</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["大芥蘭", 16, 1])}>
            <img src={kailan} width="100" height="100"></img>
            <div>大芥蘭</div>
            <div>$16</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["大菜芯", 16, 1])}>
            <img src={choisum} width="100" height="100"></img>
            <div>大菜芯</div>
            <div>$16</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["大魚皮", 16, 1])}>
            <img src={fishskin} width="100" height="100"></img>
            <div>大魚皮</div>
            <div>$16</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["淨河粉", 14, 1])}>
            <img src={hofan} width="100" height="100"></img>
            <div>淨河粉</div>
            <div>$14</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["淨米粉", 14, 1])}>
            <img src={maifan} width="100" height="100"></img>
            <div>淨米粉</div>
            <div>$14</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["淨幼麵", 14, 1])}>
            <img src={thinnoodle} width="100" height="100"></img>
            <div>淨幼麵</div>
            <div>$14</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["淨粗麵", 14, 1])}>
            <img src={thicknoodle} width="100" height="100"></img>
            <div>淨粗麵</div>
            <div>$14</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["淨米線", 14, 1])}>
            <img src={meisin} width="100" height="100"></img>
            <div>淨米線</div>
            <div>$14</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["淨伊麵", 16, 1])}>
            <img src={yimin} width="100" height="100"></img>
            <div>淨伊麵</div>
            <div>$16</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["淨魚麵", 30, 1])}>
            <img src={fishnoodle} width="100" height="100"></img>
            <div>淨魚麵</div>
            <div>$30</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["淨南乳豬手", 80, 1])}>
            <img src={pighand} width="100" height="100"></img>
            <div>淨南乳豬手</div>
            <div>$80</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["原汁淨牛腩(小)", 60, 1])}>
            <img src={ngaulam} width="100" height="100"></img>
            <div>原汁淨牛腩(小)</div>
            <div>$60</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["五香淨牛什(小)", 60, 1])}>
            <img src={ngauzharp} width="100" height="100"></img>
            <div>五香淨牛什(小)</div>
            <div>$60</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["淨金錢肚(小)", 60, 1])}>
            <img src={cowstomache} width="100" height="100"></img>
            <div>淨金錢肚(小)</div>
            <div>$60</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["淨秘製孖筋(小)", 60, 1])}>
            <img src={cowmagun} width="100" height="100"></img>
            <div>淨袐製孖筋(小)</div>
            <div>$60</div>
        </div>
        <div class="items"  onClick={this.AddFoodClick.bind(this, ["原汁淨牛腩(大)", 100, 1])}>
            <img src={ngaulam} width="100" height="100"></img>
            <div>原汁淨牛腩(大)</div>
            <div>$100</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["五香淨牛什(大)", 100, 1])}>
            <img src={ngauzharp} width="100" height="100"></img>
            <div>五香淨牛什(大)</div>
            <div>$100</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["淨金錢肚(大)", 100, 1])}>
            <img src={cowstomache} width="100" height="100"></img>
            <div>淨金錢肚(大)</div>
            <div>$100</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["淨秘製孖筋(大)", 100, 1])}>
            <img src={cowmagun} width="100" height="100"></img>
            <div>淨袐製孖筋(大)</div>
            <div>$100</div>
        </div>
        
        <div class="items_name"><p>雙拼單點</p></div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["牛腩牛什", 120, 1])}>
            <img src={doublezone} width="100" height="100"></img>
            <div>牛腩牛什</div>
            <div>$120</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["牛腩牛肚", 120, 1])}>
            <img src={doublezone} width="100" height="100"></img>
            <div>牛腩牛肚</div>
            <div>$120</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["牛腩牛筋", 120, 1])}>
            <img src={doublezone} width="100" height="100"></img>
            <div>牛腩牛筋</div>
            <div>$120</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["牛什牛肚", 120, 1])}>
            <img src={doublezone} width="100" height="100"></img>
            <div>牛什牛肚</div>
            <div>$120</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["牛什牛筋", 120, 1])}>
            <img src={doublezone} width="100" height="100"></img>
            <div>牛什牛筋</div>
            <div>$120</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["牛肚牛筋", 120, 1])}>
            <img src={doublezone} width="100" height="100"></img>
            <div>牛肚牛筋</div>
            <div>$120</div>
        </div>

        <div class="items_name"><p>配料</p></div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["走蒜", 0])}>
            <div>走蒜</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["少蒜", 0])}>
            <div>少蒜</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["多蒜", 0])}>
            <div>多蒜</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["走蔥", 0])}>
            <div>走蔥</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["少蔥", 0])}>
            <div>少蔥</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["多蔥", 0])}>
            <div>多蔥</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["走汁", 0])}>
            <div>走汁</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["少汁", 0])}>
            <div>少汁</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["多汁", 0])}>
            <div>多汁</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["加腩汁", 0])}>
            <div>加腩汁</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["走油", 0])}>
            <div>走油</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["少油", 0])}>
            <div>少油</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["多油", 0])}>
            <div>多油</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["走蠔油", 0])}>
            <div>走蠔油</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["少蠔油", 0])}>
            <div>少蠔油</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["多蠔油", 0])}>
            <div>多蠔油</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["走腐", 0])}>
            <div>走腐</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["少腐", 0])}>
            <div>少腐</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["多腐", 0])}>
            <div>多腐</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["外賣", 1])}>
            <div>外賣 $1</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["分盒", 1])}>
            <div>分盒 $1</div>
        </div>
       
    </div>
    );
  }
}

export default IndividualFood;