import React, { Component } from 'react'

export default class Show extends Component {
    
    render(){
        return(
            <div className="modal fade" id={`showModal_${this.props.content_id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <img src={this.props.img} alt="" className="col"/>
                            <label className="label col">{this.props.summary}</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <a href={`${this.props.url}`} target="_blank" data-dismiss="modal"  className="btn btn-primary" onClick={(e)=> {window.open(this.props.url)}}>Go to tvMaze!</a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}