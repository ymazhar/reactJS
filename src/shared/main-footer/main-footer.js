import React from "react";
import "./main-footer.scss";

const MainFooter = ({children}) => {
    return(
        <footer className={"main-footer"}>{children}</footer>
    )
}

export default MainFooter;