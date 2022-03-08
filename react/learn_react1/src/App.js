import {Button} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const btn_handler = ()=>{
    toast("Button Is Clicked");
  };
  return (
    <div>
      <ToastContainer/>
      <Button color='danger' onClick={btn_handler}> CLICK ME</Button>
    </div>
  );
}

export default App;
