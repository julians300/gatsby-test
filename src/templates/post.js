import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  // Required check for no data being returned
  const doc = data.prismic.allPosts.edges.slice(0, 1).pop()
  if (!doc) return null

  return (
    <Layout>
      <h1>{RichText.render(doc.node.title)}</h1>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($uid: String) {
    prismic {
      allPosts(uid: $uid) {
        edges {
          node {
            title
          }
        }
      }
    }
  }
`
