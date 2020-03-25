import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Img 
      fluid={data.file.childImageSharp.fluid}
      objectFit="cover"
      objectPosition="50% 50%"
      alt=""
     />
  </Layout>
)

export default IndexPage


export const query = graphql`
  query {
    file(relativePath: { eq: "homepage-bg.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`