import React, { Component } from 'react'
import Axios from 'axios'

export default class Show extends Component {
    
    render(){
        return(
            <div class="modal fade" id={`showModal_${this.props.content_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className="row">
                            <img src={this.props.img} alt="" className="col"/>
                            <label className="label" className="col">{this.props.summary}</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <a href={`${this.props.url}`} target="_blank" data-dismiss="modal"  class="btn btn-primary" onClick={(e)=> {window.open(this.props.url)}}>Go to tvMaze!</a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}