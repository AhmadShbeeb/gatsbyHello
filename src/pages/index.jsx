import { graphql, Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { header, btn } from '../styles/home.module.css'

export default function Home({ data }) {
  // data is from the graphql query
  // console.log(data)

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design </h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer</p>
          <Link className={btn} to='/projects'>
            My Portfolio Projects
          </Link>
        </div>
        {/* <img src='/banner.png' alt='site banner' style={{ maxWidth: '100 %' }} /> */}
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
