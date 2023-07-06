import LoginForm from "../components/Auth/LoginForm";
import AuthPageLayout from "../components/Layout/AuthPageLayout";

const Login = () => (
    <AuthPageLayout image="login" title="Login to your account" page_title='Login'>
        <LoginForm />
    </AuthPageLayout>
);
export default Login;