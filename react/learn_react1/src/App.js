// React can return only one component so if you want to return multiple components then use
// make one parent element such as div and inside that create various child components
import Card from "./Components/Card"
function App() {
  return (
    <div>
      <Card name ="Ram" title="Happy Birthday Ram"/>
      <hr/>
      <Card name ="Shyam" title="Happy Birthday Shyam"/>
      <hr/>
      <Card name ="Sita" title="Happy Birthday Sita"/>
      <hr/>
    </div>
  );
}

export default App;
