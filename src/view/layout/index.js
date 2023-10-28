import React from "react";
import Header from "./header";

const LayoutMain = ({ children }) => {
    return (
        <div className="layout-main">
            <div className="header">
                <Header />
            </div>
            {children}
            <div className="footer">Footer Goes Here</div>
        </div>
    )
}

export default LayoutMain