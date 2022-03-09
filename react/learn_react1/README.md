### Install ReactStrap and React-Toastify
#### ReactStrap which is a kind of bootStrap library for reactjs 
#### React-Toastify is used to show the alert messages in a very interactive way
#### Command
npm install bootstrap reactstrap react-toastify

#### Then add dependency(this import statement) for reactstrap and react-toastify in index.js
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'react-toastify/dist/ReactToastify.css';

#### Then if you want to use any component of reactstrap in any of your reactjs component import that
import {Button} from 'reactstrap'

#### If you want to use ToastConatiner and toast(message) of react-toastify in any of your reactjs component import that
import { ToastContainer, toast } from 'react-toastify';

#### Download one more library axios
#### This library is used for calling urls and webservices
npm install axios

#### When we call any other component from inside one component then if the called component is accepting an argument
#### then at calling place we provide the same name of the argument as that is present in called component in its definition or it will not work

 
