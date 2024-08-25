import React from 'react';
import { Col, Layout, Row } from 'antd';
import '../styles/appHeader.css';

const { Header } = Layout;
const AppHeader = () => (
    <>
        <Header className="header-main">
            <Row>
                {/* <Col xs={12} md={12} style={{ display: "flex", justifyContent: 'flex-start' }}>
                    <Typography.Title level={4}>Prime Appliance Services</Typography.Title>
                </Col> */}
                <Col xs={24} md={24} style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                    <a className="call-now" style={{ fontWeight: 'bold', color: "white", }} href="tel:407-565-8385">CALL NOW 407-565-8385</a>
                </Col>
            </Row>
        </Header>
    </>
);

export default AppHeader;
