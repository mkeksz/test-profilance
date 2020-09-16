import React from 'react'
import PropTypes from 'prop-types'

export const Article = ({ title, text }) => {
  return (
    <article className="article">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
