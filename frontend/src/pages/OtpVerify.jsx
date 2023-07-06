import OtpForm from "../components/Auth/OtpForm";
import AuthPageLayout from "../components/Layout/AuthPageLayout";

const OtpVerify = () => (
    <AuthPageLayout image="otp" title="Verify your OTP" page_title='Verify OTP'>
        <OtpForm />
    </AuthPageLayout>
);
export default OtpVerify;