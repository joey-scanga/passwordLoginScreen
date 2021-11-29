import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({text}) => {
    return (
        <footer className='footer'>
            {text}
        </footer>
    )
}

Footer.defaultProps = {
    text: "Copyright 2021"
}

Footer.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Footer

