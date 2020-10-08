import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Container, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../../store/actions';


const CreatePost = () => {
    const auth = useSelector(state => state.auth );
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{message:''},
        validationSchema: Yup.object({
            message: Yup.string().required('Sorry, this is required')
        }),
        onSubmit:(values,{ resetForm })=>{
            dispatch(addMessage(values, auth.user)).then((payload)=>{
                resetForm();
                toast.success('Congrats',{
                    position: toast.POSITION.BOTTOM_CENTER
                })
            })
        }
    })

    return(
        <Container>
            <Form className="mt-5" onSubmit={ formik.handleSubmit }>
                <h3 className="mb-3">
                    Add a message
                </h3>
                <Form.Control
                    as="textarea"
                    rows="3"
                    id="message"
                    name="message"
                    { ...formik.getFieldProps('message')}
                />
                 { formik.errors.message && formik.touched.message ?
                        <div>{ formik.errors.message }</div>
                :null}
                <Button
                    className="mt-4"
                    type="submit"
                >
                    Add message
                </Button>
            </Form>
            <ToastContainer/>
        </Container>
    )
}

export default CreatePost;