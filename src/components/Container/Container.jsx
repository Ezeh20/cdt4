import PropTypes from 'prop-types'
import styles from "./Container.module.scss"


export const Container = ({ children, className }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

Container.defaultProps = {
    className: ''
}
