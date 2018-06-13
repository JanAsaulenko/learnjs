import React from 'react'
import {Component} from 'react'
import '../App.css'
import PersList from "./PersList";


class Marvel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ""
        }
    }

    componentDidMount() {
        const API = '8b1dba011e519fab2cb09eb6eedd5bc5';
        const URL = 'https://gateway.marvel.com:443/v1/public/characters?apikey=' + API;

        fetch(URL)
            .then(response => response.json())
            .then(dates => this.setState({
                    data: dates
                })
            )
    }


    render() {
        const dates = this.state.data;
        if (!dates) {
            return <h2>Loading</h2>
        }
        const persons = dates.data.results;
        return (
                <PersList persons={persons}/>
        )
    }
}


export default Marvel