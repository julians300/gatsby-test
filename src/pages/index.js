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
      {props.data.prismic.allPosts.edges.map(post => {
        console.log(post)
        return (
          <h2>
            <Link to={`posts/${post.node._meta.uid}`}>
              {post.node.title[0].text}
            </Link>
          </h2>
        )
      })}
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
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
