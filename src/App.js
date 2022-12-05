import logo from './logo.svg';
import './App.css';
const style = {
  backgroundColor : "cyan",
  border : '2px'  
}
function App() {
  const personOne = {
    name : "Al Amin",
    job : "Programmer"
  }
  
  const personTwo = {
    name : "Yeasin",
    job : "Manager"
  }
  
  const personThree = {
    name : "kanon",
    job : "Rider"
  }
  return (
    <div className="App">
      <header className="App-header">
        <Person name={personOne.name} role={personOne.job}></Person>
        <Person name={personTwo.name} role={personTwo.job}></Person>
        <Person name={personThree.name} role={personThree.job}></Person>
      </header>
    </div>
  );
}
const styleOne = {
  border : "2px solid red",
  padding : "2px"
}
function Person(props){
  return (
    <div style={styleOne}>
      <h1>Name : {props.name}</h1>
      <p>Role : {props.role}</p>
    </div>
  )
}

export default App;
