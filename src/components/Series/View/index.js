import React from 'react';

const View = ({show}) => (
    <div>
        <p>{show.name}</p>
        <p>Premiered: {show.premiered}</p>
        <p>Language: {show.language}</p>
        <p>Rating: {show.rating.average}</p>
        <img src={show.image.medium} alt={show.name}/>
    </div>
);

export default View;
