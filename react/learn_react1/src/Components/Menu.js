import { ListGroup,ListGroupItem } from "reactstrap";

const Menu=()=>{
    return (
        <ListGroup className="my-2">
            <ListGroupItem tage='a' href='#!' action>View Todos</ListGroupItem>
            <ListGroupItem tage='a' href='#!' action>Add Todo</ListGroupItem>
            <ListGroupItem tage='a' href='#!' action>Contact Us</ListGroupItem>
            <ListGroupItem tage='a' href='#!' action>Sign Out</ListGroupItem>
        </ListGroup>
    )
}

export default Menu;