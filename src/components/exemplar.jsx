import React from 'react'
import {Component} from 'react'
import '../App.css'
import Comics from './Comics'
import Marvel from './marvelcall'

class Exemplar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            hide:false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    hide=()=> {
        this.setState({
            hide: !this.state.hide
        })
    }

    render() {
        const dates = this.props;
        const comics = this.state.hide && <Comics dates={dates.info.comics}/>
        const content = this.state.isOpen && <section className='section'><h1>Name:{dates.info.name} </h1>
            <img onClick={this.hide} src={`${dates.info.thumbnail.path}/portrait_xlarge.jpg`}/>
            {comics}
        </section>
        return (
            <div className="Exemplar">
                <button type="submit" onClick={this.toggle}>{dates.info.name}</button>
                {content}

            </div>
        )
    }
}

export default Exemplar