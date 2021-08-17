import {useState} from "react";

function App() {  
  const [ todoList, setTodoList ] = useState([]);
  const [ list, setList ] = useState("");

  const handleAdd = () => {

  const thing = {
    id: todoList.length + 1,
    //incrément des taches
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

  const handleDelete = (id) => {
    //filter: renvoie un tableau avec un élément en moins
    const filteredList = todoList.filter((item) => item.id !== id);
    setTodoList(filteredList);
    // je rafraichie et donne le tableau filtrer
  };

  return (
    <div>
      <h1>Ma liste</h1>
      <input type="text" className="input" value={list} onChange={handleChange} />
      <button onClick={handleAdd}>+</button>

      {todoList.map((todo, index) => (
        <>
        <p>{todo.thing}</p>
        <p className="delete" onClick={() => handleDelete(todo.id)}>
            X
          </p>
        </>
      ))}
    </div>
  );
}

export default App;