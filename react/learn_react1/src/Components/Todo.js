import { Row,Col,Badge,Card,CardBody, CardTitle, CardSubtitle, CardText, CardImg, CardFooter, Button, Container, CardImgOverlay } from "reactstrap"; 

const Todo = ({todo}) =>{
    return (
        <div>
            
            <Card className="my-2">
                <CardBody>
                    <CardTitle>{todo.title}</CardTitle>
                    <CardText>{todo.desc}</CardText>
                    
                        <Button color='success'>Update</Button>
                        <Button color='danger' className="mx-3">Done</Button>
                    
                </CardBody>
            </Card>
           
        </div>
    );
}

export default Todo;