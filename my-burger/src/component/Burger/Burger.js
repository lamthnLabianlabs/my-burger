import React from 'react';
import BergerIngredient from './BurgerIngredient/BurgerIngredient';
import style from './Burger.css';
class Burger extends React.Component{
    render(){
        return(
            <div className={style.burger}>
            <BergerIngredient type="BreadTop"/>
            </div>
        );
    }
}
export default Burger