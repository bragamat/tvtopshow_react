import React, { Component } from 'react'

export default class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{'marginBottom': '1rem'}}>
                <a className="navbar-brand" href="">TvTS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="">Sinopses <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="" onClick={(e) => e.preventDefault()} >Watch it!</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="" onClick={(e) => e.preventDefault()}>Latest</a>
                    </li>
                    <li className="nav-item">
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}