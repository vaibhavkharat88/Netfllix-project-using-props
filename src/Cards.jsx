import React from 'react';

function Cards (Props){
    return(
        <>

        <div className='cards'>
            <div className='cardss'>
                <img src={Props.imgsrc} alt="mypic" srcSet="" className='card_img' />
            <div className='card_info'>
                <span className='card-catogiry'>{Props.title}</span>
                <h3 className='card-title'>{Props.sname}</h3>
                <a href={Props.link} target="_blank">
                <button className='btn'>Watch Now</button>
                </a>
                
                </div>
            </div>

        </div>
        
        </>
    )
}
export default Cards;