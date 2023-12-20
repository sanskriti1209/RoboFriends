import React from 'react';
import Card from './Card';

const CardList=({Robots}) => {
    const cardComponent =Robots.map((user,i)=>{
        return(
<Card key={i} 
id={Robots[i].id} 
name={Robots[i].name} 
email={Robots[i].mail}/>
        );
    })
    return(
        <div>
            {cardComponent}

        </div>
    );
}

export default CardList;