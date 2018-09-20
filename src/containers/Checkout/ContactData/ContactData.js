import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }, 
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
       this.setState({loading:true})
       const order = {
         ingredients: this.props.ingredients,
         price: this.props.totalPrice,
         customer: {
           name: 'Max Shwarz',
           address: {
              street: 'Test street 1',
              zipCode: '233221',
              country: 'Germany'
           },
           email: 'test@re.com'
         },
         deliveryMethod: 'fastest'

       }
         axios.post('https://burger-builder-b2c43.firebaseio.com/orders.json', order).then(response => {
              this.setState({loading: false})
            this.props.history.push('/')
         }).catch(error => {
          this.setState({loading: false})
         })
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                <input className={classes.Input} type="text" name="street" placeholder="Your street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Your postal code" />
                <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
            </form>
        );
        if(this.state.loading) {
            form = < Spinner / >
        }
        return(
            <div className={classes.ContactData} >
                <h4>Enter your Con tact Data</h4>
                { form }
            </div>
        )
    }
}

export default ContactData;