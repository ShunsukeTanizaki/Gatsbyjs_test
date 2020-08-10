import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Kv from "../components/kv"
import { Container, Row, Col } from "react-bootstrap";

const IndexPage = () => (
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

export default IndexPage
