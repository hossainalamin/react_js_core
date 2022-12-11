import logo from './logo.svg';
import './App.css';

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



export default App;
