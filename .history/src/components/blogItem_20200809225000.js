import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from '@reach/router';

function BlogItem(title, date, src) {
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>
          { date }
        </Card.Text>
        <Link to=''>see more</Link>
      </Card.Body>
    </Card>
  )
}


export default BlogItem