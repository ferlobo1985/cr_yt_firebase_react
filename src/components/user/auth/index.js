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
            <>
                login
            </>
        )
    }

}

export default Login;