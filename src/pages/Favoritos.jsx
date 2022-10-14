import React, { useContext } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import context from '../my_context';

const Favoritos = () => {

    const { photos, setFavoritos } = useContext(context);

    return (
        <Container>
            <h1 className='text-center'>Personas favoritas en el mundo</h1>
            <Row gap={4}>
                {photos.filter(photo => (
                    photo.liked
                )).map(photo => (
                    <Col xs={8} md={6} lg={4} key={photo.id} onClick={() => {
                        setFavoritos(photo.id);
                    }}>
                        <Card>
                            <Card.Img variant="top" src={photo.src.tiny} />
                        </Card>
                    </Col>
                ))
                }
            </Row>
        </Container>
    )
}

export default Favoritos

