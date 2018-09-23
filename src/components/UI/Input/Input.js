import React from 'react'
import classes from './Input.css'

const input = (props) => {
        const inputClasses = [classes.InputElement];

        let inputElement = null;
        if(props.invalid && props.shouldValidate && props.touched){
            inputClasses.push(classes.Invalid)
        }
    switch (props.elementType) {
        case('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig}  
                value={props.value} 
                onChange={props.changed}
                />
            break;
        case('textarea'):
            inputElement = <texarea 
                className={classes.InputElement} 
                {...props.elementConfig}  
                value={props.value} 
                onChange={props.changed}
                />
            break;
        case('select'):
            inputElement = (
                        <select 
                            className={classes.InputElement} 
                            value={props.value}
                            onChange={props.changed} >
                            {props.elementConfig.options.map((option,index) => (
                                <option value={option.value} key={index}>
                                    {option.displayValue}
                                </option>
                            ))}
                        </select>
                           )
            break;  
        default:
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}
                 />
            break;
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
    
}

export default input;