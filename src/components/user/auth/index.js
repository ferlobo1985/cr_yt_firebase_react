import React, { Component } from 'react';
import {  Form, Container, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { registerUser, loginUser } from '../../../store/actions';


class Login extends Component {
    state = {
        register: false
    }
    
    formikProps = {
        initialValues:{ email:'steve@gmail.com',password:'testing123'},
        validationSchema:Yup.object({
            email: Yup.string().required('Sorry, this is required').email('Sorry this is not an email'),
            password: Yup.string().required('Sorry, this is required'),
        }),
        onSubmit: values => {
            this.submitForm(values)
        }
    }

    submitForm = (values) => {
        if(this.state.register){
            // register
            this.props.dispatch(registerUser(values)).then(
                ({payload}) => this.handleRedirection(payload)
            )
        } else {
            // login
            this.props.dispatch(loginUser(values)).then(
                ({payload}) => this.handleRedirection(payload)
            )

        }
    }

    handleRedirection = result => {
        if(result.error){
            console.log(result.error)
        } else{ 
            return this.props.history.push('/dashboard');
        }
    }

    handleFormType = () => {
        this.setState( prevState => ({
            register: !prevState.register
        }))
    }


    render(){
        const {register} = this.state;
        return(
            <Container>
                <Formik {...this.formikProps}>
                { formik => (
                    <Form className="mt-5" onSubmit={ formik.handleSubmit }>
                        <h1 className="h3 mb-3 font-weight-normal">
                            Log in
                        </h1>

                        <Form.Control
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        { formik.errors.email && formik.touched.email ?
                            <div>{ formik.errors.email }</div>
                        :null}

                        <hr/>

                        <Form.Control
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        { formik.errors.password && formik.touched.password ?
                            <div>{ formik.errors.password }</div>
                        :null}

                        <Button
                            className="mt-4"
                            variant="primary"
                            type="submit"
                        >
                          { !register ? 'Sign in':'Register'}
                        </Button>

                        <div className="mt-3">
                            { register ? 'Need to sign in':'Not registered'} click
                            <b><span
                                onClick={ ()=> this.handleFormType() }
                            > Here </span></b> 
                            to { register ? 'Sign in':'Register'}
                        </div>

                    </Form>
                ) }
                </Formik>
            </Container>
        )
    }

}

const mapStateToProps = state => ({auth: state.auth})
export default connect(mapStateToProps)(Login);