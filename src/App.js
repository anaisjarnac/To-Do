import {useState} from "react";
import "./App.css";

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
    //Ici, etes vous sur ?
    //filter: renvoie un tableau avec un élément en moins
    const filteredList = todoList.filter((todo) => todo.id !== id);
    //retourne tous les éléments du tableau qui ont un id différents que celui que je supprime
    setTodoList(filteredList);
    // je rafraichie et donne le tableau filtrer
  };

  const handleDone = (id) => {

    const index = todoList.findIndex((item) => item.id === id);
    // je recup l'index (sa position dans le tableau),
    todoList[index].done = !todoList[index].done;
    // je viens changer la valeur de done que je viens de trouver
    
    setTodoList(todoList);
    // je rafraichie en utilisant le seteur de todoList
  };

  return (
    <div className="App">
      <h1 style={{color: 'pink', fontWeight: 600}}>MA TO-DO LIST</h1>
      <input type="text" className="input" value={list} onChange={handleChange} />
      <button onClick={handleAdd}>+</button>

      {todoList.map((todo, index) => (
        <>
        <div className="word" key={todo.id} >


          {todo.done && (
            <input
              onChange={() => handleDone(todo.id)}
              type="checkbox"
              className="check"
              checked
            />
          )}
          {!todo.done && (
            <input onChange={() => handleDone(todo.id)} 
            type="checkbox" />
          )}



        <span className="thing">{todo.thing}</span>
        <span className="delete" onClick={() => handleDelete(todo.id)}>
        <img src="assets/close.jpg" className="img"/>
          </span>
          </div>
        </>
      ))}
    </div>
  );
}

export default App;