import  React from 'react'
import ReactDOM from 'react-dom'
import {Component} from 'react'
import '../App.css'
class Comics extends Component{
    constructor(props){
        super(props)
        this.state={
            ListOpen:true
        }
    }

    render (){
        const list = this.props.dates.items;
        console.log(list)
        const li= [];
        for(let i =0;i<list.length;i++){

           li.push(<li key ="resourceURI" className="Comics__item" ><a href={list[i].resourceURI}> {list[i].name}</a></li>)
        }

        return(
        <ul className="Comics">
            {li}
        </ul>

        )
    }

}


export default Comics