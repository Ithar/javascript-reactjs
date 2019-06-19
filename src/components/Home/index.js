import React from 'react';
import { Link } from 'react-router-dom';
import './resources/home.css';
import users from './resources/users.png';
import series from './resources/series.png';
import news from './resources/news.png';

const Home = props => (
    <div>
        <div className='section'>
            <img src={users} alt='Users' />
            <Link to={'/users'}>Users</Link>
        </div>

        <div className='section'>
            <img src={series} alt='Series' />
            <Link to={'/users'}>Series</Link>
        </div>

        <div className='section'>
            <img src={news} alt='News' />
            <Link to={'/users'}>News</Link>
        </div>
    </div>
);

export default Home;