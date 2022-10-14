import React, { useContext } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import context from "../my_context";
import Heart from './Heart';

const Gallery = () => {
  const { photos, setPhotos } = useContext(context);

  const setFavorito = (id) => {
    const fotoIndex = photos.findIndex((photo) => photo.id === id);
    photos[fotoIndex].liked = !photos[fotoIndex].liked;
    setPhotos([...photos]);
  };

  return (
    <Container>
      <Row>
        {photos.map(photo => (
          <Col key={photo.id} xs={8} md={4} lg={3} className="mb-3 mx-auto">
            <Card bg="dark" className="position-relative" onClick={() => {
              setFavorito(photo.id);
            }}>
              <Card.Img variant="top" src={photo.src.tiny} />
              <Heart filled={photo.liked} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Gallery