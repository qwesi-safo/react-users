import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddUserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            gen: "",
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addUser(this.state)
        this.setState({
            name: "",
            email: "",
            gen: "",
        })
    }
    

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='name' onChange={this.handleChange} value={this.state.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' onChange={this.handleChange} value={this.state.email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Gen</Form.Label>
                    <Form.Control type="number" placeholder="Gen" name='gen' onChange={this.handleChange} value={this.state.gen} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default AddUserForm;
