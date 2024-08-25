import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import '../styles/ContactModal.css';

const ContactModal = ({ visible, onClose }) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        number: Yup.number().min(8).required('Number is required')
    });

    const sendEmail = (values) => {
        const params = {
            from_name: values.name,
            from_number: values.number
        }
        emailjs.send(
            'service_p5fdacv',
            'template_oiy6drd',
            params,
            'IR2oYK8HtAnGwmPye'
        )
            .then((response) => {
                message.success('Thank you for contacting us. We will be in touch shortly!');
            }, (err) => {
                message.error('Failed to send message. Please try again later.');
            });
    };

    return (
        <>
            {visible && (
                <div
                    className="contact-modal"
                    style={{
                        // position: 'fixed',
                        // top: '15%',
                        // right: '20px',
                        zIndex: 1000,
                        width: '300px',
                        backgroundColor: 'white',
                        padding: '20px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px'
                    }}
                >
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', color: "black" }}>Contact Us</h2>
                    <Formik
                        initialValues={{ name: '', number: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            sendEmail(values)
                            resetForm();
                            onClose();
                        }}
                    >
                        {({ handleSubmit, handleChange, values, errors, touched }) => (
                            <Form onFinish={handleSubmit} layout="vertical">
                                <Form.Item
                                    label="Name"
                                    validateStatus={touched.name && errors.name ? "error" : ""}
                                    help={touched.name && errors.name ? errors.name : ""}
                                >
                                    <Field size="large" name="name" as={Input} value={values.name} onChange={handleChange} />
                                </Form.Item>

                                <Form.Item
                                    label="Phone Number"
                                    validateStatus={touched.number && errors.number ? "error" : ""}
                                    help={touched.number && errors.number ? errors.number : ""}
                                >
                                    <Field name="number" className="hide-arrows"
                                        type='number' size="large" as={Input} value={values.number} onChange={handleChange} />
                                </Form.Item>

                                <Form.Item>
                                    <Button style={{ backgroundColor: "#001529", marginTop: 10 }} size='large' type="primary" htmlType="submit" block>
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        )}
                    </Formik>
                </div>
            )}
        </>
    );
};

export default ContactModal;
