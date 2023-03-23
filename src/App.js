//import logo from './logo.svg';
import './App.css';
import Text from './Text.js';
import Count from './Count.js';

function App() {
  let array = [1,2,3,4,5,6,7,8];

 
  return (
    <div className="App">
    <h1> Prabhu raj </h1>
    <hr/>
    {console.log("new count")}
    <Count />
    {array.map((x)=> < Text Numbers = {x}/>)}
   
    </div>
  );
}

export default App;
