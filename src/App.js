import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friendName = [
    {"name" : "Yeasin","class":"A","Years":"15"},
    {"name" : "Rokib","class":"A","Years":"10"},
    {"name" : "Kanon","class":"A","Years":"12"},
    {"name" : "Sojib","class":"A","Years":"5"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <ValueChange></ValueChange>
        <UserData></UserData>
        {
          friendName.map(fname => <Friends name={fname.name} class={fname.class} years = {fname.Years}></Friends>)
        }
      
      </header>
    </div>
  );
}
function Friends(probs)
{
  const Style = {
    "height" : "300px",
    "width" : "300px",
    'backgroundColor' : 'red',
    "border" : "2px solid blue",
    "borderRadious" :"5px"
  }
  return(
    <div style={Style}>
      <h2>Name: {probs.name}</h2>
      <h3>Class : {probs.class}</h3>
      <h4>Years : {probs.years}</h4>
    </div>
  )
}

function ValueChange()
{
  const[count, setCount] = useState(10)
  return (
    <div>
      <h3>Count : {count}</h3>
       <button onClick={() => setCount(count+1)}>Increase</button>
        <button onClick={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}
function UserData()
{
  const[user, setUser] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return(
    <div>
    {
      user.map(user => user.name)
    }
    {
      user.map(user => <li>Email : {user.email}</li>)
    }
    </div>
  )
}
export default App;
