import './App.css';
import List from "./components/List";
import Hello from "./components/Hello";


function App() {

  const dessertList = ['Ice cream', 'Cake', 'Pecan Pie', 'Punkin Pie', 'Horchata', 'Apple Pie']
  return (
  <div className="App">
    <Hello />
    <List />
    <List list = {dessertList} myName = {"Jeff Steele"}/>
  
    
  </div>
  );
}

export default App;
