import {Button} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const btn_handler = ()=>{
    toast.error("Button Is Clicked",{position:'bottom-left'});
  };
  return (
    <div>
      <ToastContainer/>
      <Button color='danger' onClick={btn_handler}> CLICK ME</Button>
    </div>
  );
}

export default App;
