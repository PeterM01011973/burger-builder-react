import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
   { label: 'Salad', type: 'salad' },
   { label: 'Bacon', type: 'bacon' },
   { label: 'Meat', type: 'meat' },
   { label: 'Cheese', type: 'cheese' },

]
const buildcontrols = (props) => (
  <div className={classes.BuildControls}>
      <p>Curret price: <strong>{props.price}</strong></p>
      {controls.map(control => (
       <BuildControl
         key={control.label}
         label={control.label}
         added={() => props.ingredientAdded(control.type)}
         removed={() => props.ingredientRemoved(control.type)}
         disabled={props.disabled[control.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
        >{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER' }</button>
  </div>
);

export default buildcontrols;
