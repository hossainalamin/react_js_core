import logo from './logo.svg';
import './App.css';
const style = {
  backgroundColor : "cyan",
  border : '2px'  
}
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
function App() {
  const productName = [
    {"name" : "Photoshop","Price" : "600tk"},
    {"name" : "Illastrator","Price" : "400tk"},
    {"name" : "Pdfreader","Price" : "300tk"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Product productName={productName[0]} ></Product>
        <Product productName={productName[1]} ></Product>
        <Product productName={productName[2]} ></Product>
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
function Product(props){
  const productStyle = {
    border : "1px solid red",
    borderRadious : "5px",
    backgroundColor : "gray",
    height : "200px",
    width : "200px"
  }
  return (
    <div style={productStyle}>
      <h3>{props.productName.name}</h3>
      <h4>{props.productName.Price}</h4>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
