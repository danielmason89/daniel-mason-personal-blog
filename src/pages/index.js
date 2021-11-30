import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #327a86;
`
const BlogPage = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>My Thoughts and daily efforts</h1>
        {/* <h4>{data.allMarkdownRemark.totalCount}</h4> */}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
                <p>{node.excerpt}</p>
              </BlogTitle>
            </BlogLink>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`
export default BlogPage
