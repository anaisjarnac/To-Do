import './App.css';
import {useState} from "react";

function App() {
  const [ list, setList ] = useState('');
  const [ lists, setLists ] = useState([]);

  const handleChange = (e) => {
    setList(e.target.value);
  };

  const addChange = (e) => {
    setLists([...lists, list]);
  };

  return (
    <div className="App">
      <h1>Ma liste</h1>
      <input type="text" className="input" onChange={handleChange}/>
      <button onClick={addChange}>Ajouter</button>

      {lists.map((list, index) => (
        <p key={index}>{lists}</p>
      ))}
    </div>
  );
}

export default App;