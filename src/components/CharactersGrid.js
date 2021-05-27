import React from 'react';
import CharacterItem from './CharacterItem';
import imagg from '../img/backg.png';

const CharactersGrid = ({items,isLoading}) => {
    return (
        isLoading ? (<div className="backload"><img src ={imagg}/></div>): (
        <section className = "cards">
            {
                items.map((item) => (
                    <CharacterItem key={item.id} item = {item} ></CharacterItem>
                ))
            }
        </section> 
        )
    )
}

export default CharactersGrid
