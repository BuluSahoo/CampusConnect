import SendOtpForm from "../components/Auth/SendOtpForm";
import AuthPageLayout from "../components/Layout/AuthPageLayout";

const ResetPassword = () => (
    <AuthPageLayout image="forget_password" title="Forget your password" page_title='Forgot password'>
        <SendOtpForm />
    </AuthPageLayout>
);
export default ResetPassword;