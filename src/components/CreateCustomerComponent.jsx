import React, {Component} from 'react'
import CustomerService from '../services/CustomerService';

class CreateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            contactPerson: '',
            phone: '',
            email: '',
            description: '',
            need: '',
            manager: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeContactPersonHandler = this.changeContactPersonHandler.bind(this);
        // this.changePhoneHandler = this.changePhoneHandler.bind(this);
        // this.changeEmailHandler = this.changeEmailHandler.bind(this);
        // this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        // this.changeNeedHandler = this.changeNeedHandler.bind(this);
        // this.changeManagerHandler = this.changeManagerHandler.bind(this);
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_add') {
            return
        } else {
            CustomerService.getCustomerById(this.state.id).then((res) => {
                let customer = res.data;
                this.setState({
                    name: customer.name,
                    contactPerson: customer.contactPerson,
                    phone: customer.phone,
                    email: customer.email,
                    description: customer.description,
                    need: customer.need,
                    manager: customer.manager
                });
            });
        }
    }

    saveOrUpdateCustomer = (c) => {
        c.preventDefault();
        let customer = {
            name: this.state.name,
            contactPerson: this.state.contactPerson,
            phone: this.state.phone,
            email: this.state.email,
            description: this.state.description,
            need: this.state.need,
            manager: this.state.manager
        };
        console.log('customer => ' + JSON.stringify(customer));

        if (this.state.id === '_add') {
            CustomerService.createCustomer(customer).then(res => {
                this.props.history.push('/customers');
            });
        } else {
            CustomerService.updateCustomer(customer, this.state.id).then(res => {
                this.props.history.push('/customers');
            });
        }
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeContactPersonHandler = (event) => {
        this.setState({contactPerson: event.target.value});
    }

    changePhoneHandler = (event) => {
        this.setState({phone: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeNeedHandler = (event) => {
        this.setState({need: event.target.value});
    }

    changeManagerHandler = (event) => {
        this.setState({manager: event.target.value});
    }

    cancel() {
        this.props.history.push('/customers');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Customer</h3>
        } else {
            return <h3 className="text-center">Update Customer</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Name: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Contact Person: </label>
                                        <input placeholder="Contact Person" name="contactPerson"
                                               className="form-control"
                                               value={this.state.contactPerson}
                                               onChange={this.changeContactPersonHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Phone: </label>
                                        <input placeholder="Phone" name="phone" className="form-control"
                                               value={this.state.phone} onChange={this.changePhoneHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input placeholder="Email" name="email" className="form-control"
                                               value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description: </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Need: </label>
                                        <input placeholder="Need" name="need" className="form-control"
                                               value={this.state.need} onChange={this.changeNeedHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Manager: </label>
                                        <input placeholder="Manager" name="manager" className="form-control"
                                               value={this.state.manager} onChange={this.changeManagerHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateCustomer}>Save
                                    </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                            style={{marginLeft: "10px"}}>Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateCustomerComponent