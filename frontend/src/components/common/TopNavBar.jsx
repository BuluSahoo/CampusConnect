/* eslint-disable jsx-a11y/anchor-is-valid */
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Grid, message } from "antd";
import { primaryColor } from "../../app/config/theme";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unAuthenticateReduxService } from "../../app/redux/slices/authReducer";
const { useBreakpoint } = Grid;

const items = [
    {
        key: '1',
        label: (
            <Link to='/profile'>
                Profile
            </Link>
        ),
        icon: <UserOutlined />,
    },
    {
        type: 'divider',
    },
    {
        key: '3',
        label: 'Logout',
        icon: <LogoutOutlined />,
    },
];

const TopNavBar = () => {
    const dispatch = useDispatch();
    const screens = useBreakpoint();
    const [messageApi, contextHolder] = message.useMessage();

    const onClick = ({ key }) => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loging out...',
        });

        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'Logout successfull',
                duration: 2,
            });
        }, 1000);

        setTimeout(() => {
            dispatch(unAuthenticateReduxService());
        }, 2000);
    };

    return (
        <div style={{
            padding: '10px 50px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            {contextHolder}
            <Link to={'/'}
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <img src="./images/short-logo.svg" alt="logo" width={60} />
            </Link>
            {/* <Dropdown menu={{ items, onClick }} placement="bottomRight" arrow>
                <Avatar style={{ backgroundColor: primaryColor, cursor: 'pointer' }} icon={<UserOutlined />} size={screens.md ? 'large' : 'default'} />
            </Dropdown> */}
        </div>
    )
}
export default TopNavBar;