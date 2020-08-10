import React from 'react'
import sampleImage from 'react-bootstrap'
import { Card } from '../images/image_002.jpg'
import { Link } from '@reach/router';
import { palegreen } from 'color-name';

function BlogItem() {
  return (
    <Card>
      <Card.Img variant="top" src={sampleImage} />
      <Card.Body>
        <Card.Title>ブログ　タイトル</Card.Title>
        <Card.Text>
          2020/08/08
        </Card.Text>
        <Link to=''>see more</Link>
      </Card.Body>
    </Card>
  )
}



export default BlogItem