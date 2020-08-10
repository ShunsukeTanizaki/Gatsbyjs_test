import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Kv from "../components/kv"
import { Row } from "react-bootstrap";

const IndexPage = () => (
  <Layout>
    <Kv />
    <Container>
      <Row>
        <Col sm={4}>
          blog item
        </Col>
        <Col sm={4}>
          blog item
        </Col>
        <Col sm={4}>
          blog item
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
