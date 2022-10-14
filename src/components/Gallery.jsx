import React, { useContext } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import context from "../my_context";
import Heart from './Heart';

const Gallery = () => {
  const { photos, setPhotos, setFavoritos } = useContext(context);


  return (
    <Container>
      <Row>
        {photos.map(photo => (
          <Col key={photo.id} xs={10} md={6} lg={4} xl={3} className="mb-3 mx-auto">
            <Card bg="dark" className="position-relative" onClick={() => {
              setFavoritos(photo.id);
            }}>
              <Card.Img variant="top" src={photo.src.tiny} />
              <Heart filled={photo.liked} />
              <Card.Text className="position-absolute text-light bottom-0 text-center w-100">{photo.alt}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Gallery