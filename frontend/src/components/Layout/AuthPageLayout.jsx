/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Row, Col, Grid, Typography } from 'antd';
import { primaryColor } from '../../app/config/theme';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import appConfig from '../../app/config/app.config';

const { useBreakpoint } = Grid;
const { Title } = Typography;

const AuthPageLayout = ({ image, title, page_title, children }) => {
    const { data: isAuthenticate } = useSelector(state => state.authReducer);
    const screens = useBreakpoint();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticate) {
            navigate('/');
        }
    }, [isAuthenticate]);

    return (
        <Row style={{ height: '100vh' }}>
            <Helmet>
                <title>{page_title} | {appConfig.app.name}</title>
            </Helmet>
            {
                screens.md
                &&
                <Col md={12} xs={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={`./images/auth/${image}.svg`} alt={image} width={'60%'} />
                </Col>
            }
            <Col md={12} xs={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: screens.xs ? '90%' : '70%' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '40px' }}>
                        <img src="./images/long-logo.svg" alt="logo" width={250} />
                    </div>
                    <div style={{ border: '2px solid ' + primaryColor, width: '100px' }} />
                    <Title level={4} style={{ padding: 0, margin: 0, marginTop: '10px', marginBottom: '50px' }}>{title}</Title>
                    {children}
                </div>
            </Col>
        </Row>
    )
}
export default AuthPageLayout;