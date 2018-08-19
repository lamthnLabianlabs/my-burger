import React from 'react';
import style from './BurgerIngredient.css'
import PropTypes from 'prop-types';

class BurgerIngredient extends React.Component{
    render(){
        let ingredient = null;
        switch (this.props.type) {
            case "BreadTop":
                ingredient = <div className={style.BreadTop}></div>
                break;
            case "BreadBottom":
                ingredient = <div className={style.BreadBottom}></div>
                break;
            case "Meat":
                ingredient = <div className={style.Meat}></div>
                break;
            case "Cheese":
                ingredient = <div className={style.Cheese}></div>
                break;
            case "Salad":
                ingredient = <div className={style.Salad}></div>
                break;
            case "Bacon":
                ingredient = <div className={style.Bacon}></div>
                break;
            default:
                break;
        }
        return(
            ingredient
        );
    }
}

BurgerIngredient.PropTypes={
    type:PropTypes.string.isRequired
}

export default BurgerIngredient;