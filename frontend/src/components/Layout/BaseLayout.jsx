/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, theme } from 'antd';
import {
    AppstoreOutlined,
    ShopOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import appConfig from '../../app/config/app.config';
import TopNavBar from '../common/TopNavBar';
import { useSelector } from 'react-redux';
const { Header, Content } = Layout;

const BaseLayout = ({ page_title, children }) => {
    const { data: isAuthenticate } = useSelector(state => state.authReducer);
    const location = useLocation();
    const navigate = useNavigate();
    const { token: { colorBgContainer } } = theme.useToken();

    useEffect(() => {
        if (!isAuthenticate) {
            //    
        }
        else {
            navigate('/login');
        }
    }, [location.pathname]);

    return (
        <Layout style={{ height: '100vh' }}>
            <Helmet>
                <title>{page_title} | {appConfig.app.name}</title>
            </Helmet>
            <Layout>
                <Header
                    style={{
                        background: colorBgContainer,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 40px',
                        borderBottom: '0.3px solid #000000',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                    }}
                >
                    <TopNavBar />
                </Header>
                <Content
                    style={{
                        padding: '10px 100px',
                        background: colorBgContainer,
                        overflow: 'auto'
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}
export default BaseLayout;