import React from "react";

const ErrorBoundary = ({children, isEveryThingOk}) => {
    const OopsText = () => (
        <h2>
            Oops, something went wrong...
        </h2>
    )


    return(
        <>
            {isEveryThingOk ? children : <OopsText />}
        </>
    )
}

export default ErrorBoundary;