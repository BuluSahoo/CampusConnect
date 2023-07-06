
import AuthPageLayout from "../components/Layout/AuthPageLayout";
import SignUpForm from "../components/Auth/SignUpForm"

const SignUp = () => (
    <AuthPageLayout image="sign_up" title="Create an new Account" page_title='SignUp to your shop panel'>
        <SignUpForm />
    </AuthPageLayout>
);
export default SignUp;