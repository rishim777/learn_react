import { Row,Col,Badge,Card,CardBody, CardTitle, CardSubtitle, CardText, CardImg, CardFooter, Button, Container, CardImgOverlay } from "reactstrap"; 
const logo=require('../images/img.jpeg');

const Movie = ({movie}) =>{
    return (
        <div>
            <Container className="mt-5">
            <Card>
                <Container>
                    <Row>
                        <Col className="p-4">
                            <CardImg src={logo}/>
                        </Col>
                        <Col className="mt-5">
                            <CardSubtitle>Name </CardSubtitle>
                            <CardText>{movie.name}</CardText>

                            <CardSubtitle>Director </CardSubtitle>
                            <CardText>{movie.director}</CardText>

                            <CardSubtitle>Release Date </CardSubtitle>
                            <CardText>{movie.release}</CardText>

                            <CardSubtitle>Rating </CardSubtitle>
                            <CardText>{movie.rating}</CardText>
                            
                            <Button color="success">Update</Button>
                            <Button color="danger" className="mx-3">Delete</Button>
                        
                        </Col>
                        
                    
                    </Row>
                    </Container>     
            </Card>
            </Container>
        </div>
    );
}

export default Movie;