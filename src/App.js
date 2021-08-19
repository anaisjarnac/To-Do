import { useState } from "react";
import "./App.css";
import ButtonDone from "./common/ButtonDone";
import EasyEdit, { Types } from "react-easy-edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import axios from 'axios';

function App() {

  const createTask = () => {
    axios.post("http://localhost:3030/todolist", list);
  };

  const [todoList, setTodoList] = useState([]);
  const [list, setList] = useState("");

  const task = {
    id: todoList.length + 1,
    //incrément des tâches
    task: list,
    done: false,
  };

  const handleAdd = (e) => {

    e.preventDefault();
    console.log(list);
    createTask()

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

  const save = () => {};
  const cancel = () => {};

  return (
    <div className="App">
      <div
        style={{
          background: `url("./assets/fond.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Pacifico, cursive",
            marginTop: "50px",
            textAlign: "center",
            color: "#1E2F3C",
            fontSize: "30px",
          }}
        >
          Ma TO-DO List
        </h1>
      </div>
        <input
          type="text"
          placeholder="  Ne pas oublier ..."
          className="input"
          value={list}
          onChange={handleChange}
          name="list"
        />
        <button onClick={handleAdd} className="buttonadd">
          <AddCircleIcon />
        </button>
     
     

      {todoList.map((todo, index) => (
        <div className="container">
          <span>
            <div className="check"><ButtonDone /></div>
          </span>
          <EasyEdit
            type={Types.TEXT}
            value={todo.task}
            onSave={save}
            onCancel={cancel}
            saveButtonLabel="OK"
            cancelButtonLabel="X"
            className="edit"
          />
          <span className="delete" onClick={() => handleDelete(todo.id)}>
            <DeleteIcon />

          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
