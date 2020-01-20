import React from 'react'
import style from './Recipe.module.css'

export default function Recipe({title,description,ingredients,calories,image}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Ingredients :</p>
    <ol>{ingredients.map(ingredient => <li>{ingredient}</li>)}</ol>
    <p>{Math.round(calories)+'cal'}</p>
    <img src={image} alt=""/>
        </div>
    )
}
