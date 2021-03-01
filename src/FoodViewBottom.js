import React from 'react';
import './scss/FoodViewBottom.scss';

function FoodViewBottom({name, review}) {
    return (
        <div className="foodViewBottom">
            <h2>{name}</h2>
            <p>
                {review}
            </p>
            <h4>⭐⭐⭐⭐⭐</h4>
        </div>
    )
}

export default FoodViewBottom
