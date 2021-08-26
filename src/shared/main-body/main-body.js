import PropTypes from "prop-types";

const MainBody = ({children}) => {
    return(
        <main className="site__main">
            <div className="main-container">
                {children}
            </div>
        </main>
    )
}

MainBody.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

MainBody.defaultProps = {
    children: {}
}

export default MainBody;