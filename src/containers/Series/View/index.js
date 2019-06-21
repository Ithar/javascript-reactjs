import React, { Component } from 'react';
import axios from 'axios/index';
import SeriesView from '../../../components/Series/View';
import Loading from '../../../components/Loading';

class View extends Component {

    state =  {
        show: [],
        loaded : false
    };

    componentWillMount() {
        let { id } = this.props.match.params;

        axios.get(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(response => {
            this.setState({
                show :  response.data,
                loaded : true
            })
        });
    }

    render() {
        const { show , loaded} = this.state;

        if (loaded) {
            return <SeriesView show={show}/>
        } else {
            return <Loading />
        }
    };
}

export default View;