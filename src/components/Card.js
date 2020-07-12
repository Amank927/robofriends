import React from 'react';


const Card = ({name, email, website}) => {
    return (
        <div className='tc grow bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
            <img alt="" src={`https://robohash.org/${website}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;