import {useState} from "react";
import "./App.css";
import axios from 'axios';
import ButtonDone from './common/ButtonDone';
import EasyEdit, { Types } from "react-easy-edit";

function App() {  
  const [ todoList, setTodoList ] = useState([]);
  const [ list, setList ] = useState ("");

  const handleAdd = () => {

  const task = {
    id: todoList.length + 1,
    //incrément des taches
    task: list,
    done: false
  };

  const newList = todoList;
  newList.push(task);

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

    const index = todoList.findIndex((todo) => todo.id === id);
    // je recup l'index (sa position dans le tableau),
    todoList[index].done = !todoList[index].done;
    // je viens changer la valeur de done que je viens de trouver
    
    setTodoList(todoList);
    // je rafraichie en utilisant le seteur de todoList
  };

//   const handleSubmit = async () => {
//     await axios.post(`http://localhost:8000/todolist/`, list );
// };

  return (
    <div className="App">
      <h1 className="title">MA TO-DO LIST</h1>
      <input type="text" placeholder="Ne pas oublier ..." className="input" value={list} onChange={handleChange} />
      <button onClick={handleAdd}>Ajouter</button>

      {todoList.map((todo, index) => (
        <div className="container">
        {/* <div className="word" key={todo.id} >


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
            
          )} */}
        <span><ButtonDone /></span>
        {/* <span className="thing">{todo.task}</span> */}
        <EasyEdit
        type={Types.TEXT}
        value={todo.task}
        onSave={val => alert("cancelled!")}
      />
        <span className="delete" onClick={() => handleDelete(todo.id)}>
        <img src="assets/close.jpg" className="img"/>
          </span>
          {/* </div> */}
        </div>
      ))}
    </div>
  );
}

export default App;