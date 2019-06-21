import React, {Component} from 'react';
import axios from 'axios/index';
import SeriesList from '../../components/SeriesList';

class Series extends Component {

    constructor(props) {
        super(props);
        this.searchSeries = this.searchSeries.bind(this);
    }

    state = {
        series : []
    };

    searchSeries(e) {
        this.loadSeries(e.target.value);
    }

    loadSeries(title = 'Game of Thrones') {
        axios.get(`http://api.tvmaze.com/search/shows?q=${title}`)
        .then(response => {
            this.setState({series: response.data})
        });
    }

    componentWillMount() {
        this.loadSeries();
    }

    render() {
        const {series} =  this.state;
        return <SeriesList series={series} seriesSearch={this.searchSeries}/>
    }
}

export default Series;