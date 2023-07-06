
import PasswordForm from "../components/Auth/PasswordForm";
import AuthPageLayout from "../components/Layout/AuthPageLayout";

const ResetPassword = () => (
    <AuthPageLayout image="reset_password" title="Reset your password" page_title='Reset password'>
        <PasswordForm />
    </AuthPageLayout>
);
export default ResetPassword;