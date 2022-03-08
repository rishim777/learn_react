import {Button, Container} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import Header from './Components/Header'
import Movie from './Components/Movie';
import AllMovies from './Components/AllMovies';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header/>
      
      <AllMovies/>
     
    </div>
  );
}

export default App;
