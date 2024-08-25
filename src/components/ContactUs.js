import React from 'react';
import { MailOutlined } from '@ant-design/icons';

const ContactUs = () => (
    <div style={{ textAlign: 'center', padding: '50px 0', }}>
        <h3 style={{ fontSize: "48px", fontWeight: "bold" }}>Thank you!</h3>
        <p style={{ fontSize: "18px", }}>Thank you for taking the time to contact us. We will be in touch shortly.</p>
        <span style={{ display: 'inline-block', borderRadius: "100%", backgroundColor: "#817f7f", padding: "60px" }}>
            <MailOutlined style={{ fontSize: '200px', color: 'white' }} />
        </span>
    </div>
);

export default ContactUs;
