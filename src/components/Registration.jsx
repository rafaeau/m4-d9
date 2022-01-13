import { Component } from "react";
import {Form, Button} from 'react-bootstrap';

class Registration extends Component {

    state = {
        userData: {
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordConfirm: ''
        },
        completedForm: false
    }

    handleInput = (key, value) => {
        this.setState({
            userData:{
                ...this.state.userData,
                [key]: value
            }
        })
    }

    render() {
        return (
            <>
                <h1 className="text-white">FORM</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => this.handleInput('name', e.target.value)} value={this.state.name}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Enter surname" onChange={(e) => this.handleInput('surname', e.target.value)} value={this.state.surname}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.handleInput('email', e.target.value)} value={this.state.email}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => this.handleInput('password', e.target.value)} value={this.state.password}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" onChange={(e) => this.handleInput('passwordConfirm', e.target.value)} value={this.state.passwordConfirm}/>
                    </Form.Group>
                    
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }
}

export default Registration