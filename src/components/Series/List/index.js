import React from 'react';
import { Link } from 'react-router-dom';

const SeriesList = ({series, seriesSearch}) => (

    <div>
        <br/>
        Total series found: `{series.length}`
        <br/><br/>
        <input name='seriesSearch' type='input' onChange={seriesSearch}/>
        <br/><br/>
        {series.map(s =>(
            <ShowItem show={s.show} key={s.show.id} />
            )
        )}
    </div>
);

const ShowItem = ({show}) => (
    <div>
        <Link to={`/series/${show.id}`}>{show.name}</Link>
    </div>
);

export default SeriesList;