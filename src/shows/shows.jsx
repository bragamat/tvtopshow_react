import React, { Component } from 'react'
import Axios from 'axios'

export default class Shows extends Component {
    state = {
        shows: []
    }

    componentWillMount(){
        Axios
            .get('http://api.tvmaze.com/search/shows?q=latest')
            .then(response => {
                this.setState({ 
                    ...this.state,
                    shows: response.data})
            })
            .catch(response => console.log(response))
    }

    handleDivs = (shows) => {
        // console.log(shows)
    let arr = []
    let description = ''
        shows.map((tv, index) => {
            console.log(tv)
            arr.push(
            <div className="card" key={index} style={{'width': '100%'}}>
                <div className="image" style={{'height': '10rem'}}>
                    <img className="card-img-top" src={tv.show.image.medium} alt=""/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{tv.show.summary}</h5>
                    <p className="card-text"></p>
                    <a href="#a" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            )
        })
       return (arr)
    }
    If = (value) => {
        if(value) {
           return this.handleDivs(value)
        }
        else {
            return null
        }
    }
    render(){
       
        return(
            <div className="card-group">
            {this.If(this.state.shows)}
            </div>
        )
    }
}

