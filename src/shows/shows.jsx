import React, { Component } from 'react'
import Axios from 'axios'

export default class Shows extends Component {
    state = {
        shows: [],
        search: '' || 'all',
    }

    componentDidMount(){
        Axios
            .get(`http://api.tvmaze.com/search/shows?q=${this.state.search}`)
            .then(response => {
                this.setState({ 
                    shows: response.data
                }, () => console.log(response.data))
            })
            .catch(response => console.log(response))
    }

    handleDivs = (shows) => {
    let arr = []
        shows.map((tv, index) => {
            if(!tv.show.image){
                tv.show.image = '...'
            }else if(index > 5){
                arr.push(<br key={index+25}/>)
            }
            arr.push(
                <div className="card" key={index}>
                    <img className="card-img-top" src={tv.show.image.medium} alt="Image unavailable!"/>
                    <div className="card-body">
                        <h5 className="card-title">{tv.show.name}</h5>
                        <p className="card-text"></p>
                        <div>
                            <a target="_blank" href={tv.show.url} className="btn btn-primary">Check it out!</a>
                        </div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">status: {tv.show.status}</small>
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
            return (
                <div>
                    <h1>Ops... looks like we are facing technical issuesssss!</h1>
                </div>
            )
        }
    }

    handleChange = (word) => {
        console.log(word)
        if(word && word !== "'"){
            this.setState({
                search: word
            }, () =>  {
                Axios
                    .get(`http://api.tvmaze.com/search/shows?q=${this.state.search}`)
                    .then(response => {
                        this.setState({ 
                            shows: response.data
                        }, ()=> console.log(response.data))
                    })
                    .catch(response => console.log(response))} )
        }
    }
    render(){
       
        return(
            <div className="col-md-12">
            <div className="row">
                <div className="col">
                    <input type="text" placeholder="What are you looking for ?" className="form-control float-left" onChange={(e) => {return this.handleChange(e.target.value)}}/>
                </div>
            </div>
                <div className="">
                    <div className="card-group">
                        {this.If(this.state.shows)}
                    </div>
                </div>
            </div>
        )
    }
}

