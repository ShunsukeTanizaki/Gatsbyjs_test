import React from 'react'
import { Card } from 'react-bootstrap'
import  sampleImage from '../images/image_002.jpg'
import { Link } from '@reach/router';
// import { palegreen } from 'color-name';

function BlogItem(title, date, src) {
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={sampleImage} />
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>
          { date }
        </Card.Text>
        <Link to={ src }>see more</Link>
      </Card.Body>
    </Card>
  )
}


export default BlogItem