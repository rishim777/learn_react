import { ToastContainer, toast } from 'react-toastify';
import AllTodos from './Components/AllTodos';
import Menu from './Components/Menu'
import Header from './Components/Header'
import { Container,Row,Col } from 'reactstrap';
import AddTodo from './Components/AddTodo';



function App() {
  return (
    <div>
      <ToastContainer />
      <Header/>
      <Container>
        <Row>
          <Col md={4}><Menu/></Col>
          <Col md={8}><AllTodos/></Col>
        </Row>
      </Container>
      
     
    </div>
  );
}

export default App;
