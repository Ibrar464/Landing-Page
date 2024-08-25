import React, { useState } from 'react';
import kitchen from "../assets/images/banner2.png";
import { Button, Col, Row } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import '../styles/banner.css';
import ContactModal from './ContactModal';

const Banner = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleClose = () => {
        // setIsModalVisible(false);
    };
    return (<div className="banner-container">
        <div
            className="banner-background"
            style={{ backgroundImage: `url(${kitchen})` }}
        />
        <div className="banner-content">
            <Row gutter={16} justify="center">
                <Col xs={24} md={24} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div>
                        <h1 className="banner-heading">BEST & FAST</h1>
                        <h1 className="banner-subheading">APPLIANCE REPAIR SERVICE</h1>
                        <div>
                            <h2 className="banner-text"><CheckOutlined /> QUICK RESPONSE</h2>
                            <h2 className="banner-text"><CheckOutlined /> EMERGENCY & WEEKEND SERVICE</h2>
                            <h2 className="banner-text"><CheckOutlined /> WARRANTY ON PARTS & LABOR</h2>
                        </div>
                        {/* {!isModalVisible &&
                            <Button style={{ backgroundColor: "#1677ff", boxShadow: "none" }} size='large' type="primary" onClick={showModal}>
                                Contact Us
                            </Button>} */}
                    </div>
                </Col>
            </Row>
            <ContactModal visible={isModalVisible} onClose={handleClose} />

        </div>
    </div>
    );
}

export default Banner;
