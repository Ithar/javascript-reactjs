import React from 'react';
import { Link } from 'react-router-dom';
import './resources/home.css';
import users from './resources/users.png';
import series from './resources/series.png';
import news from './resources/news.png';

const Home = () => (
    <div>
        <div className='section'>
            <Link to={'/users'}><img src={users} alt='Users' /> Users</Link>
        </div>

        <div className='section'>
            <Link to={'/series'}><img src={series} alt='Series' /> Series</Link>
        </div>

        <div className='section'>
            <Link to={'/news'}><img src={news} alt='News' /> News (Hooks)</Link>
        </div>
    </div>
);

export default Home;