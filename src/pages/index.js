import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = props => {
  console.log(props.data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Blog</h1>
      {props.data.prismic.allPosts.edges.map(post => (
        <h2>{post.node.title[0].text}</h2>
      ))}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    prismic {
      allPosts {
        edges {
          node {
            title
          }
        }
      }
    }
  }
`

export default IndexPage
