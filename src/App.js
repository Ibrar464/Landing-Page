import React from 'react';
import { Layout } from 'antd';
import AppHeader from './components/AppHeader';
import Banner from './components/Banner';
import WeRepair from './components/WeRepair';
// import ContactUs from './components/ContactUs';
import AppFooter from './components/AppFooter';

const { Content } = Layout;

const App = () => (
    <Layout style={{ backgroundColor: "white" }}>
        <AppHeader />
        <Content>
            <Banner />
            <div  >
                <WeRepair />
            </div>
            {/* <ContactUs /> */}
        </Content>
        <AppFooter />
    </Layout>
);

export default App;
