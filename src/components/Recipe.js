import React, { Component } from 'react'
import { connect } from 'react-redux'
import {submitOrder} from "./actions/cartActions";
import {store} from '../index'
//import { addShipping } from './actions/cartActions'
class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    handleOrderSubmit = ()=>{

        const order = {
            "customername":"aaa aaa aaa",
            "customerlocation":"aaa aaa aaa",
            "customerphone":"aaa",
            "pizzatype": store.getState().addedItems[0].pizzatype,
            "pizzasize":store.getState().addedItems[0].size,
            "quantity":store.getState().addedItems[0].quantity,
            "price":store.getState().addedItems[0].price,
            "deliveryfee":store.getState().addedItems[0].deliveryfee,
            "totalprice":store.getState().total,
            "additionaldetails":"aaa aaa aaa"
        }

        this.props.submitOrder(order);
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn" onClick={()=>{this.handleOrderSubmit()}}>Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})},
        submitOrder: (order)=>{dispatch(submitOrder(order))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
