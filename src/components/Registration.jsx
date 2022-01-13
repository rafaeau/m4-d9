import { Component } from "react";
import { Form, Button } from 'react-bootstrap';

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
            userData: {
                ...this.state.userData,
                [key]: value
            }
        })
    }

    handleButton = () => {
        let clickableButton = false
        if (this.state.userData.name.length >= 2 &&
            this.state.userData.surname.length >= 3 &&
            this.state.userData.password.length >= 8 &&
            this.state.userData.password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/) &&
            this.state.userData.passwordConfirm === this.state.userData.password
        ) {
            clickableButton = true
        } return clickableButton
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            completedForm: true
        })
    }

    render() {
        return (
            <>
                {
                    this.state.completedForm ? (
                        <>
                        <div>Completed successfully!</div>
                        <p>Name: {this.state.userData.name}</p>
                        <p>Surname: {this.state.userData.surname}</p>
                        <p>Email: {this.state.userData.email}</p>
                        </>
                    ) : (
                        <>
                            <h1 className="text-white">FORM</h1>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter name" onChange={(e) => this.handleInput('name', e.target.value)} value={this.state.name} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter surname" onChange={(e) => this.handleInput('surname', e.target.value)} value={this.state.surname} />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control required type="email" placeholder="Enter email" onChange={(e) => this.handleInput('email', e.target.value)} value={this.state.email} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required type="password" placeholder="Password" onChange={(e) => this.handleInput('password', e.target.value)} value={this.state.password} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Confirm password</Form.Label>
                                    <Form.Control required type="password" placeholder="Confirm password" onChange={(e) => this.handleInput('passwordConfirm', e.target.value)} value={this.state.passwordConfirm} />
                                </Form.Group>

                                <Button variant="success" type="submit" disabled={!this.handleButton()}>
                                    Submit
                                </Button>
                            </Form>
                        </>
                    )
                }
            </>
        )
    }
}

export default Registration