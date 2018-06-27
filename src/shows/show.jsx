import React, { Component } from 'react'
import Axios from 'axios'

export default class Show extends Component {
    
    componentDidMount(){
        Axios
            .get(`http://api.tvmaze.com/shows/${this.props.params_id}`)
            .then(response => {console.log(response.data)})
            .catch(response => console.log(response))
        console.log('chamado')
    }
    
    render(){
        return(
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}