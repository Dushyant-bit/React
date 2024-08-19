import './App.css';
import { Person } from './Person';
function App() {
  function Touched(){
    alert("You Clicked");
  }
  return (
    <div className="App">
      <h1>Hello Component </h1>
      <Person/>
      <button onClick={Touched}>Click Me</button>
    </div>
  );
}

export default App;
