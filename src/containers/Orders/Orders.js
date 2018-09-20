import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {
    state = {
        orders: [],
        loading: false
    }
    componentDidMount(){
        this.setState({loading: true})
        axios.get('/orders.json').then(response => {
            let fetchOrders = []
            for(let key  in response.data) {
                fetchOrders.push({
                    ...response.data[key],
                    id: key
                });
            }
            this.setState({loading:false, orders: fetchOrders})
        }).catch(e => {
             this.setState({loading: false})
        })

    }
    render() {
        return(
            <div>
                {this.state.orders.map((order,index) => (
                    <Order 
                    key={index} 
                    ingredients={order.ingredients}
                    price={order.price }
                    />
                ))}
            </div>
        )
    }
} 

export default withErrorHandler(Orders, axios);