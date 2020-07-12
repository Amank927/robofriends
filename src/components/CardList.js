import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                            website={robots[i].website}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;