import React from 'react';
// import Menu from './Menu';
// import TableList from './Table';

import $ from 'jquery';

class Bills extends React.Component{
    constructor(props) {
      super(props);

      this.BackTableClick = this.BackTableClick.bind(this);
      this.PayClick = this.PayClick.bind(this);
    }

    BackTableClick(data, e){
        e.preventDefault(e);
        let which_function;
            which_function = "" + data;
        this.props.BackTableClick(e.target.value, which_function);
    }

    PayClick(e){
        e.preventDefault(e);
        this.props.PayClick(e.target.value);
    }

    render(){


        return(
        <div>
            <div class="receipt">
                <div class="receipt_top">
                    <h2>SUN PO</h2>
                    <p>Order Time</p>
                    <p>Table Number</p>
                </div>
                
                <table>
                    <tr class="receipt_color_top">
                        <th>Items</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    <tr class="receipt_color_mid">
                        <td><div>可樂</div><div>-   多冰</div></td>
                        <td>100</td>
                        <td>700</td>
                    </tr>
                    <tr class="receipt_color_mid">
                        <td><div>可樂</div><div>-   少冰</div></td>
                        <td>100</td>
                        <td>700</td>
                    </tr>
                    <tr class="receipt_color_mid">
                        <td><div>可樂</div><div></div></td>
                        <td>100</td>
                        <td>700</td>
                    </tr>
                    <tr class="receipt_color_mid">
                        <td>可樂</td>
                        <td>100</td>
                        <td>700</td>
                    </tr>
                    <tr class="receipt_color_top">
                        <td></td>
                        <td>Total</td>
                        <td>$2800</td>
                    </tr>
                </table>
            </div>
            
            <div class="pay_bottom">
                <ul>
                    <li onClick={this.BackTableClick.bind(this, "2")}><a>&lt; 返回</a></li>
                    <li onClick={this.PayClick}><a>結賬 &gt;</a></li>
                </ul>
            </div>
        </div>
           





        );
    }
}

export default Bills;