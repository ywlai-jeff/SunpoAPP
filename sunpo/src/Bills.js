import React from 'react';
// import Menu from './Menu';
// import TableList from './Table';

import $ from 'jquery';

class Bills extends React.Component{
    constructor(props) {
      super(props);

      this.state = {
    };

      this.BackTableClick = this.BackTableClick.bind(this);
      this.PayClick = this.PayClick.bind(this);
    }

    BackTableClick(data, e){
        e.preventDefault(e);
        let which_function;
            which_function = "" + data;
        this.props.BackTableClick(e.target.value, which_function);
    }

    PayClick(data, e){
        e.preventDefault(e);
        // this.props.transinfo.map(item => {
            // alert(data);
        // })
        this.props.PayClick(e.target.value, data);
    }

    render(){
        let table;
        if(this.props.chosen_tran[0].tableNumber == "11")
            table = <p>(外賣)</p>
        else
            table = <p>{this.props.chosen_tran[0].tableNumber} 號枱</p>

        return(
        <div className="receipt_page">
            <div class="receipt">
                <div class="receipt_top">
                    <h2>SUN PO</h2>
                    {table}
                    <p>落單時間: {this.props.chosen_tran[0].transTime}</p>
                </div>
                
                    {this.props.chosen_tran.map(item => (
                        <table class="receiptTable">
                            <tr class="receipt_color_top">
                                <th>項目</th>
                                <th>數量</th>
                                <th>價錢</th>
                            </tr>
                            {item.products.map(product => (
                            <tr class="receipt_color_mid">
                                <td><div>{product.name}</div>
                                    {product.custom.map(custom => (
                                        <div>   {custom}</div>
                                    ))}
                                </td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                            </tr>
                            ))}
                            <tr class="receipt_color_top">
                                <td></td>
                                <td>總計:</td>
                                <td>$ {item.totalPrice}</td>
                            </tr>
                        </table>
                    ))}
                {/* <div class="receipt_top">
                    <p>多謝！</p>
                </div> */}
            </div>
            
            <div class="pay_bottom">
                <ul>
                    <li onClick={this.BackTableClick.bind(this, "2")}><a>&lt; 返回</a></li>
                    <li onClick={this.PayClick.bind(this, this.props.chosen_tran[0].tranId)}><a>結賬 &gt;</a></li>
                </ul>
            </div>
        </div>
        );
    }
}

export default Bills;