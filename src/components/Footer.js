import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        <p className="copyright">&copy; GAN SW business number : 558-01-01989 <br></br>  
        FAX : 0504-050-2176 <br></br>
        Num : +82) 010-8460-2176 <br></br>
        location : 대전 동구 동서대로 1709-1 2층
        </p>
    </footer>
)
        // <a href="https://html5up.net">HTML5 UP</a>.

        // <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
