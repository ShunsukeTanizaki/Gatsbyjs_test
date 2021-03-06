import React from "react"
import { guraphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Kv from "../components/kv"
import { Container, Row, Col } from "react-bootstrap";
import BlogItem from '../components/blogItem';

const IndexPage = () => {
  const data = useStaticQuery(guraphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            thumbnail {
              name
            }
          }
        }
      }
    }
  }
  `)
  console.log('data', data);
  
  return (
    <Layout>
      <Kv />
      <Container>
        <Row>
          <Col sm={4}>
            <BlogItem />
          </Col>
          <Col sm={4}>
            <BlogItem />
          </Col>
          <Col sm={4}>
            <BlogItem />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
