import { Button, Result } from "antd";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import appConfig from "../app/config/app.config";

const PageNotFound = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <Helmet>
                <title>Page Not Fount | {appConfig.app.name}</title>
            </Helmet>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
            />
        </>
    )
}
export default PageNotFound;