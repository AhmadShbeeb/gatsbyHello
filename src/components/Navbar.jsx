import { Link, graphql, useStaticQuery } from 'gatsby' // useStaticQuery used only inside components no the main pages + can't use query variables + only used once in a component
import React from 'react'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1>{title}</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Portfolio Projects</Link>
      </div>
    </nav>
  )
}
