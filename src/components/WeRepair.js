import React from 'react';
import { Row, Col, Typography } from 'antd';
import Refrigerator from "../assets/images/refrigerator.png";
import Washer from "../assets/images/washer.png";
import Oven from "../assets/images/oven.png";
import Dishwasher from "../assets/images/dishwasher.png";
import Microwave from "../assets/images/microwave.png";

import samsung from "../assets/images/samsung.jpg";
import decor from "../assets/images/dacor.png";
import electrolux from "../assets/images/electrolux.png";
import fisher from "../assets/images/fisher.png";
import frigidaire from "../assets/images/Frigidaire.png";
import ge from "../assets/images/GE.png";
import haier from "../assets/images/haier.png";
import jennAir from "../assets/images/JennAir.png";
import kitcheaid from "../assets/images/kitchenaid.png";
import kenmmore from "../assets/images/kenmmore.png";
import lg from "../assets/images/lg.png";
import maytag from "../assets/images/maytag.png";

import '../styles/repair.css'

const appliances = [
    { name: 'Refrigerator', icon: Refrigerator },
    { name: 'Washer & Dryer', icon: Washer },
    { name: 'Dishwasher', icon: Dishwasher },
    { name: 'Oven & Stove', icon: Oven },
    { name: 'Microwave', icon: Microwave },
];

const brands = [
    { icon: decor },
    { icon: electrolux },
    { icon: fisher },
    { icon: frigidaire },
    { icon: ge },
    { icon: maytag },
    { icon: jennAir },
    { icon: kitcheaid },
    { icon: samsung },
    { icon: kenmmore },
    { icon: lg },
    { icon: haier },
];

const WeRepair = () => (
    <>
        <div className="container">
            <h2>We Repair</h2>
            <div className="appliances">
                {
                    appliances.map((item) => (
                        <div className="appliance-item" key={item.name}>
                            <img src={item.icon} alt={item.name} />
                            <h4>{item.name}</h4>
                        </div>
                    ))
                }
            </div>
        </div>

        <Row className="text-section">
            <Col xs={24} sm={12}>
                <div className="text-content">
                    <Typography.Title className="text-content h1" level={1}>
                        We service all brands
                    </Typography.Title>
                    <Typography.Text>
                        Our team of technicians is highly skilled and experienced in repairing and installing appliances from a wide range of brands, including Samsung, Bosch, LG, Maytag, KitchenAid, General Electric, Kenmore, Frigidaire, Electrolux, Monogram, and Sub-Zero
                    </Typography.Text>
                </div>
            </Col>
            <Col xs={24} sm={12}>
                <div className="text-content">
                    <Typography.Title className="text-content h1" level={1}>
                        Why Choose Us?
                    </Typography.Title>
                    <ul>
                        <li>
                            Experienced Technicians: Our team of skilled professionals is dedicated to completing every job with precision and efficiency. Whether it's a repair or installation, you can count on us to get it done right the first time.
                        </li>
                        <li>Fast Service:We take pride in our ability to complete technical tasks quickly without compromising quality. Your time is valuable, and we're here to save you as much of it as possible.</li>
                        <li>Honest Pricing: You don’t have to worry about the cost when working with us. We offer fair and competitive pricing, with great discounts available for second or third units. We believe in transparency and delivering value to our customers.</li>
                    </ul>
                </div>
            </Col>
        </Row>

        <div className="brands-container">
            <h1>Brands We Repair</h1>
            <div style={{ backgroundColor: "white", width: "100%" }}>

                <div className="brands-grid">
                    {brands.map((item, index) => (
                        <img
                            key={index}
                            src={item.icon}
                            width={110}
                            height={110}
                            style={{ objectFit: "contain" }}
                            alt='brand-logo'
                        />
                    ))}
                </div>
            </div>
        </div>
    </>
);

export default WeRepair;
