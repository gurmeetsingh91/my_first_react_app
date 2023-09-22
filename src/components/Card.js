import React from 'react';




const Card = ({name,id}) =>
{
    return(
       <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='card comp' src={`https://robohash.org/${name}`}/>
            <div>
                <h1>{name}</h1>
             
            </div>
       </div>
    );

}


export default Card;