import {useState} from "react";

function App() {  
  const [ todoList, setTodoList ] = useState([]);
  const [ list, setList ] = useState("");

  const handleAdd = () => {

  const thing = {
    id: todoList.length + 1,
    thing: list,
    done: false
  };

  const newList = todoList;
  newList.push(thing);

  setTodoList(newList); 
  setList("");
   //Pour ne pas réactualiser
};

  const handleChange = (e) => {
    setList(e.target.value);
  };

  return (
    <div>
      <h1>Ma liste</h1>
      <input type="text" className="input" value={list} onChange={handleChange} />
      <button onClick={handleAdd}>+</button>

      {todoList.map((todo, index) => (
        <>
        <p>{todo.thing}</p>
        </>
      ))}
    </div>
  );
}

export default App;