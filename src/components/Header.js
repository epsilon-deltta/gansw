import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>GAN SW</h1>
        <p>
          Data Analysis{' '}&nbsp;&nbsp;AI Solution &nbsp;&nbsp; AI API <br></br>
          {/* <a href="https://html5up.net">HTML5 UP</a> */}
          <br />
          
          
        </p>
        {/* 인공지능 소프트웨어 모듈 제작 및 솔루션 제공 <br></br> */}
        {/* django 백엔드 소프트웨어 제작 전문  */}
      </div>
    </div>
    <nav>
      <ul>
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li> */}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            WORK
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
