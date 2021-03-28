import React from 'react';

const Pokemon = ({image,name,height,weight,abilities}) => {
    return(
        <div>
            <img src={image} alt={name}></img>
            <h1>Name: {name}</h1>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <ul>Abilities:
                {abilities.map(ability => (
                    <li>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pokemon;