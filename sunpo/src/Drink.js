import React from 'react';
import images from './images/food1.jpg'

import hotcoffee from './images/productpic/61hotcoffee.jpg'
import hotmilktea from './images/productpic/62hotmilktea.jpg'
import hotovaltine from './images/productpic/63hotovaltine.jpg'
import hothorlick from './images/productpic/64icedhorlick.jpg'
import hotlemontea from './images/productpic/65hotlemontea.jpg'
import hotlemonwater from './images/productpic/66hotlemonwater.jpg'
import hotchoihoney from './images/productpic/67hotchoihoney.jpg'
import hotchocolate from './images/productpic/68hotchocolate.jpg'

import yuzihoney from './images/productpic/69yuzihoney.jpg'
import kamkuathoney from './images/productpic/70kamkuathoney.jpg'
import almond from './images/productpic/71almond.jpg'
import riben from './images/productpic/72ribena.jpg'
import icecoffee from './images/productpic/73icecoffee.jpg'
import icedmilktea from './images/productpic/74icedmilktea.jpg'
import icedovaltine from './images/productpic/75icedovaltine.jpg'
import icedhorlick from './images/productpic/76icedhorlick.jpg'
import icelemontea from './images/productpic/77icelemontea.jpg'
import icelemonwater from './images/productpic/78icelemonwater.JPG'
import coldchoihoney from './images/productpic/79coldchoihoney.jpg'
import icedsoymilk from './images/productpic/80icedsoymilk.jpg'
import coldchocolate from './images/productpic/81coldchocolate.jpg'
import cocacola from './images/productpic/82cocacola.png'
import zerococacola from './images/productpic/83zerococacola.png'
import sprite from './images/productpic/84sprite.png'
import fanta from './images/productpic/85fanta.png'
import saltlemon7 from './images/productpic/saltlemonseven.png'
import lemoncoke from './images/productpic/lemoncoke.png'
import lungfung from './images/productpic/lungfunglemoncoke.png'

class Drink extends React.Component {
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
        <div class="items_name"><p>熱飲</p></div>

        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱柚子蜜", 13, 1])}>
            <img src={yuzihoney} width="100" height="100"></img>
            <div>熱柚子蜜</div>
            <div>$13</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱柑橘蜜", 13, 1])}>
            <img src={kamkuathoney} width="100" height="100"></img>
            <div>熱柑橘蜜</div>
            <div>$13</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱杏仁霜", 13, 1])}>
            <img src={almond} width="100" height="100"></img>
            <div>熱杏仁霜</div>
            <div>$13</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱利賓納", 13, 1])}>
            <img src={riben} width="100" height="100"></img>
            <div>熱利賓納</div>
            <div>$13</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱香濃咖啡", 13, 1])}>
            <img src={hotcoffee} width="100" height="100"></img>
            <div>熱香濃咖啡</div>
            <div>$13</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱香滑奶茶", 13, 1])}>
            <img src={hotmilktea} width="100" height="100"></img>
            <div>熱香滑奶茶</div>
            <div>$13</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱阿華田", 13, 1])}>
            <img src={hotovaltine} width="100" height="100"></img>
            <div>熱阿華田</div>
            <div>$13</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱好立克", 13, 1])}>
            <img src={hothorlick} width="100" height="100"></img>
            <div>熱好立克</div>
            <div>$13</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱檸檬茶", 13, 1])}>
            <img src={hotlemontea} width="100" height="100"></img>
            <div>熱檸檬茶</div>
            <div>$13</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱檸檬水", 13, 1])}>
            <img src={hotlemonwater} width="100" height="100"></img>
            <div>熱檸檬水</div>
            <div>$13</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱菜蜜", 13, 1])}>
            <img src={hotchoihoney} width="100" height="100"></img>
            <div>熱菜蜜</div>
            <div>$13</div>
        </div>
        {/* <div class="items">
            <img src={images} width="100" height="100"></img>
            <div>熱豆漿</div>
            <div>$13</div>
        </div> */}
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱朱古力", 13, 1])}>
            <img src={hotchocolate} width="100" height="100"></img>
            <div>熱朱古力</div>
            <div>$13</div>
        </div>

        <div class="items_name"><p>凍飲</p></div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍柚子蜜", 15, 1])}>
            <img src={yuzihoney} width="100" height="100"></img>
            <div>凍柚子蜜</div>
            <div>$15</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍柑橘蜜", 15, 1])}>
            <img src={kamkuathoney} width="100" height="100"></img>
            <div>凍柑橘蜜</div>
            <div>$15</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍杏仁霜", 15, 1])}>
            <img src={almond} width="100" height="100"></img>
            <div>凍杏仁霜</div>
            <div>$15</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍利賓納", 15, 1])}>
            <img src={riben} width="100" height="100"></img>
            <div>凍利賓納</div>
            <div>$15</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍香濃咖啡", 15, 1])}>
            <img src={icecoffee} width="100" height="100"></img>
            <div>凍香濃咖啡</div>
            <div>$15</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍香滑奶茶", 15, 1])}>
            <img src={icedmilktea} width="100" height="100"></img>
            <div>凍香滑奶茶</div>
            <div>$15</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍阿華田", 15, 1])}>
            <img src={icedovaltine} width="100" height="100"></img>
            <div>凍阿華田</div>
            <div>$15</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍好立克", 15, 1])}>
            <img src={icedhorlick} width="100" height="100"></img>
            <div>凍好立克</div>
            <div>$15</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍檸檬茶", 15, 1])}>
            <img src={icelemontea} width="100" height="100"></img>
            <div>凍檸檬茶</div>
            <div>$15</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍檸檬水", 15, 1])}>
            <img src={icelemonwater} width="100" height="100"></img>
            <div>凍檸檬水</div>
            <div>$15</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍菜蜜", 15, 1])}>
            <img src={coldchoihoney} width="100" height="100"></img>
            <div>凍菜蜜</div>
            <div>$15</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍豆漿", 15, 1])}>
            <img src={icedsoymilk} width="100" height="100"></img>
            <div>凍豆漿</div>
            <div>$15</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍朱古力", 15, 1])}>
            <img src={coldchocolate} width="100" height="100"></img>
            <div>凍朱古力</div>
            <div>$15</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["可樂", 7, 1])}>
            <img src={cocacola} width="100%" height="100"></img>
            <div>可樂</div>
            <div>$7</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["Zero可樂", 7, 1])}>
            <img src={zerococacola} width="100%" height="100"></img>
            <div>Zero可樂</div>
            <div>$7</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["雪碧", 7, 1])}>
            <img src={sprite} width="100%" height="100"></img>
            <div>雪碧</div>
            <div>$7</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["芬達", 7, 1])}>
            <img src={fanta} width="100%" height="100"></img>
            <div>芬達</div>
            <div>$7</div>
        </div>

        <div class="items_name"><p>特飲</p></div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["鹹檸七", 17, 1])}>
            <img src={saltlemon7} width="100" height="100"></img>
            <div>鹹檸七</div>
            <div>$17</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍檸樂", 17, 1])}>
            <img src={lemoncoke} width="100" height="100"></img>
            <div>凍檸樂</div>
            <div>$17</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["龍鳳檸檬", 17, 1])}>
            <img src={lungfung} width="100" height="100"></img>
            <div>龍鳳檸檬</div>
            <div>$17</div>
        </div>

        <div class="items_name"><p>配料</p></div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["走冰", 0])}>
            <div>走冰</div>
        </div>
        <div class="items"onClick={this.AddCustomClick.bind(this, ["少冰", 0])}>
            <div>少冰</div>
        </div>
        <div class="items"onClick={this.AddCustomClick.bind(this, ["多冰", 0])}>
            <div>多冰</div>
        </div>
        <div class="items"onClick={this.AddCustomClick.bind(this, ["走甜", 0])}>
            <div>走甜</div>
        </div>
        <div class="items"onClick={this.AddCustomClick.bind(this, ["少甜", 0])}>
            <div>少甜</div>
        </div>
        <div class="items"onClick={this.AddCustomClick.bind(this, ["多甜", 0])}>
            <div>多甜</div>
        </div>
        <div class="items"onClick={this.AddCustomClick.bind(this, ["冰底", 1])}>
            <div>冰底 $1</div>
        </div>
        <div class="items"onClick={this.AddCustomClick.bind(this, ["外賣", 1])}>
            <div>外賣 $1</div>
        </div>
    </div>
    );
  }
}

export default Drink;