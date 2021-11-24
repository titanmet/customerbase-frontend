import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'

class ViewCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then( res => {
            this.setState({customer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Customer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Customer Name: </label>
                            <div> { this.state.customer.name }</div>
                        </div>
                        <div className = "row">
                            <label> Contact Person: </label>
                            <div> { this.state.customer.contactPerson }</div>
                        </div>
                        <div className = "row">
                            <label> Phone: </label>
                            <div> { this.state.customer.phone }</div>
                        </div>
                        <div className = "row">
                            <label> Email: </label>
                            <div> { this.state.customer.email }</div>
                        </div>
                        <div className = "row">
                            <label> Description: </label>
                            <div> { this.state.customer.description }</div>
                        </div>
                        <div className = "row">
                            <label> Need: </label>
                            <div> { this.state.customer.need }</div>
                        </div>
                        <div className = "row">
                            <label> Manager: </label>
                            <div> { this.state.customer.manager }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCustomerComponent