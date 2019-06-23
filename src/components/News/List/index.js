import React from 'react';

const NewsList = ({news, onChangeNews}) => (
    <div>
        <h2>News</h2>
        <input type='text' onChange={onChangeNews}/>
        {news.map(
            (n, i) => (<p key={i}>{n.title}</p>)
        )}
    </div>
);

export default NewsList;