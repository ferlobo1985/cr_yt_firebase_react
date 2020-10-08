import React, { Component } from 'react';
import {  Form, Container, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';


class Login extends Component {
    state = {
        register: false,
        loading: false
    }
    
    formikProps = {
        initialValues:{ email:'',password:''},
        validationSchema:Yup.object(),
        onSubmit: values => {
            console.log(values)
        }
    }

    render(){
        return(
            <Container>
                <Formik {...this.formikProps}>
                { formik => (
                    <Form className="mt-5">
                        <h1 className="h3 mb-3 font-weight-normal">
                            Log in
                        </h1>
                    </Form>
                ) }
                </Formik>
            </Container>
        )
    }

}

export default Login;