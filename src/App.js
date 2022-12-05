import logo from './logo.svg';
import './App.css';
const personOne = {
  name : "Al Amin",
  job : "Programmer"
}

const personTwo = {
  name : "Yeasin",
  job : "Manager"
}
const style = {
  backgroundColor : "cyan",
  border : '2px'  
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={style}>Name : {personOne.name} Job : {personOne.job}</h2>
        <p style = {{backgroundColor : 'red'}}>Name : {personTwo.name} Job : {personTwo.job}</p>
      </header>
    </div>
  );
}

export default App;
