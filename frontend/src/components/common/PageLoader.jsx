import React from "react";
import Lottie from "lottie-react";
import pageLoader from "../../json/page-loader.json";

const PageLoader = () => {

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            position: 'fixed',
            top: 0, left: 0,
            backgroundColor: 'rgba(255,255,255,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <div style={{ width: '250px' }}>
                <Lottie animationData={pageLoader} loop={true} />
            </div>
        </div>
    )
}
export default PageLoader;