import React from 'react'
import classes from '../pages/First.css';
/* import glass from '../assets/img/glass.png' */

export const FirstPage = () => {
    return (
        <>
            <div className="containerr">
            <img className="img" src={require('../assets/img/glass.png') } alt={''} />
                <div className="NameCocktaill">vodka and tonic</div>
            </div>
            <div className="titlee_low">LET GET THE PARTY STARTED NOW </div>
            <div className="titlee">Mixe Drinks From What You Already Have</div>
        </>
    )
}


