import React, { useContext } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import context from '../my_context';

const Favoritos = () => {

    const { photos, setPhotos } = useContext(context);

    const deleteFavorito = (id) => {
        const fotoIndex = photos.findIndex((f) => f.id === id);
        photos[fotoIndex].liked = !photos[fotoIndex].liked;
        setPhotos([...photos]);
    };

    return (
        <Container>
            <Row gap={4}>
                {photos.filter(photo => (
                    photo.liked
                )).map(photo => (
                    <Col xs={8} md={6} lg={4} key={photo.id} onClick={() => {
                        deleteFavorito(photo.id);
                    }}>
                        <Card>
                            <Card.Img variant="top" src={photo.src.tiny} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Favoritos

