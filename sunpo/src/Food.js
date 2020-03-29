import React from 'react';
import images from './images/food1.jpg'

 class Food extends React.Component{
    constructor(props) {
        super(props);
  
        // this.AddFoodClick = this.AddFoodClick.bind(this);
      }

    AddFoodClick(data, e){
        e.preventDefault(e);
        // alert("added");
        // e.target.style;
        this.props.AddFoodClick(e.target.value, data);
    }

    AddCustomClick(data, e){
        e.preventDefault(e);
        this.props.AddCustomClick(e.target.value, data);
    }

 render(){
    return (
        <div class="menu_item">
        <div class="items_name"><p>單拼/雙拼/特餐</p></div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["單拼", 30, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>單拼</div>
            <div>$30</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["雙拼", 38, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>雙拼</div>
            <div>$38</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["招牌牛三寶粉麵", 42, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>招牌牛三寶粉麵</div>
            <div>$42</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["四寶粉麵", 42, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>四寶粉麵</div>
            <div>$42</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["八寶粉麵", 58, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>八寶粉麵</div>
            <div>$58</div>
        </div>

        <div class="items_name"><p>請選擇</p></div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["鮮味魚扎", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>鮮味魚扎</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["鮮墨魚丸", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>鮮墨魚丸</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["鮮豬肉丸", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>鮮豬肉丸</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["鮮蝦雲吞", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>鮮蝦雲吞</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["蠔油撈麵", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>蠔油撈麵</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["自製水餃", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>自製水餃</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["南乳豬手", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>南乳豬手</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["秘製炸醬", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>秘製炸醬</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["鮮炸魚皮", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>鮮炸魚皮</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["鮮魚皮餃", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>鮮魚皮餃</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["原汁牛腩", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>原汁牛腩</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["五香牛什", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>五香牛什</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["金錢牛肚", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>金錢牛肚</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["秘製孖筋", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>秘製孖筋</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["自製魚蛋", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>自製魚蛋</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["雙滑魚片", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>雙滑魚片</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["黃金魚角", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>黃金魚角</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["手打牛丸", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>手打牛丸</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["牛筋丸", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>牛筋丸</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["紫菜湯", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>紫菜湯</div>
        </div>

        <div class="items_name"><p>請選擇撈麵/飯/泡飯</p></div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["河粉", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>河粉</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["米粉", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>米粉</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["幼麵", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>幼麵</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["粗麵", 0])}>
            <img src={images} width="100" height="100"></img>
            <div>粗麵</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["飯", 5])}>
            <img src={images} width="100" height="100"></img>
            <div>飯 $5</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["泡飯", 5])}>
            <img src={images} width="100" height="100"></img>
            <div>泡飯 $5</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["撈麵", 5])}>
            <img src={images} width="100" height="100"></img>
            <div>撈麵 $5</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["伊麵", 4])}>
            <img src={images} width="100" height="100"></img>
            <div>伊麵 $4</div>
        </div>
        <div class="items" onClick={this.AddCustomClick.bind(this, ["魚麵", 12])}>
            <img src={images} width="100" height="100"></img>
            <div>魚麵 $12</div>
        </div>

        <div class="items_name"><p>單點加配</p></div>

        <div class="items" onClick={this.AddFoodClick.bind(this, ["生菜", 9, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>生菜</div>
            <div>$9</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["通菜", 9, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>通菜</div>
            <div>$9</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["芥蘭", 9, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>芥蘭</div>
            <div>$9</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["菜芯", 9, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>菜芯</div>
            <div>$9</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["魚皮", 9, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>魚皮</div>
            <div>$9</div>
        </div>

        <div class="items_name"><p>飲品加配</p></div>

        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱柚子蜜", 8, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>熱柚子蜜</div>
            <div>$8</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱柑橘蜜", 8, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>熱柑橘蜜</div>
            <div>$8</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱杏仁霜", 8, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>熱杏仁霜</div>
            <div>$8</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱利賓納", 8, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>熱利賓納</div>
            <div>$8</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱香濃咖啡", 8, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>熱香濃咖啡</div>
            <div>$8</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱香滑奶茶", 8, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>熱香滑奶茶</div>
            <div>$8</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱阿華田", 8, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>熱阿華田</div>
            <div>$8</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱好立克", 8, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>熱好立克</div>
            <div>$8</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱檸檬茶", 8, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>熱檸檬茶</div>
            <div>$8</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱檸檬水", 8, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>熱檸檬水</div>
            <div>$8</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱菜蜜", 8, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>熱菜蜜</div>
            <div>$8</div>
        </div>
        {/* <div class="items">
            <img src={images} width="100" height="100"></img>
            <div>熱豆漿</div>
            <div>$13</div>
        </div> */}
        <div class="items" onClick={this.AddFoodClick.bind(this, ["熱朱古力", 8, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>熱朱古力</div>
            <div>$8</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍柚子蜜", 10, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍柚子蜜</div>
            <div>$10</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍柑橘蜜", 10, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍柑橘蜜</div>
            <div>$10</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍杏仁霜", 10, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍杏仁霜</div>
            <div>$10</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍利賓納", 10, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍利賓納</div>
            <div>$10</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍香濃咖啡", 10, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍香濃咖啡</div>
            <div>$10</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍香滑奶茶", 10, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍香滑奶茶</div>
            <div>$10</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍阿華田", 10, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍阿華田</div>
            <div>$10</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍好立克", 10, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍好立克</div>
            <div>$10</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍檸檬茶", 10, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍檸檬茶</div>
            <div>$10</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍檸檬水", 10, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍檸檬水</div>
            <div>$10</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍菜蜜", 10, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍菜蜜</div>
            <div>$10</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍豆漿", 10, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍豆漿</div>
            <div>$10</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍朱古力", 10, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍朱古力</div>
            <div>$10</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["可樂", 7, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>可樂</div>
            <div>$7</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["Zero可樂", 7, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>Zero可樂</div>
            <div>$7</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["雪碧", 7, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>雪碧</div>
            <div>$7</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["芬達", 7, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>芬達</div>
            <div>$7</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["鹹檸七", 17, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>鹹檸七</div>
            <div>$17</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["凍檸樂", 17, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>凍檸樂</div>
            <div>$17</div>
        </div>
        <div class="items" onClick={this.AddFoodClick.bind(this, ["龍鳳檸檬", 17, 1])}>
            <img src={images} width="100" height="100"></img>
            <div>龍鳳檸檬</div>
            <div>$17</div>
        </div>
        {/* <div class="items">
            <img src={images} width="100" height="100"></img>
            <div>不用加配</div>
            <div></div>
        </div> */}
    
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
    <div class="items" onClick={this.AddCustomClick.bind(this, ["扣底", 0])}>
        <div>扣底</div>
    </div>
    <div class="items" onClick={this.AddCustomClick.bind(this, ["加底", 8])}>
        <div>加底 $8</div>
    </div>
    <div class="items" onClick={this.AddCustomClick.bind(this, ["外賣", 1])}>
        <div>外賣 $1</div>
    </div>
    <div class="items" onClick={this.AddCustomClick.bind(this, ["分盒", 1])}>
        <div>分盒 $1</div>
    </div>
    <div class="items"onClick={this.AddCustomClick.bind(this, ["冰底", 1])}>
        <div>冰底 $1</div>
    </div>
    <div class="items" onClick={this.AddCustomClick.bind(this, ["學生優惠", -5])}>
        <div>學生優惠 -$5</div>
    </div>
    </div>
    );
  }
}

export default Food;