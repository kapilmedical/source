import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './sass/spectre.scss'
import './custom.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Kapil Medical"
      meta={[
        { name: 'description', content: 'Kapil medial' },
        { name: 'keywords', content: 'medician, pharmacy' },
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
