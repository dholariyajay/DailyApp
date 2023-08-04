import React, {useState} from 'react';


const ToDo = () => {

  const [todo, setTodo] = useState([]);

  const [newTodo, setNewToDo] = useState('');

  const [canceledTodos, setCanceledTodos] = useState([]); // New state for canceled todos

  

  function AddTodo(){
    if(newTodo.trim()!==''){
      setTodo([...todo, { text: newTodo, canceled: false }]);
      setNewToDo('');
    }
   }
   
  function handleCancelTodo(index) {
    const updatedTodos = [...todo];
    updatedTodos[index].canceled = true;
    const canceledTodo = updatedTodos[index];
    canceledTodo.canceled = true;
    setCanceledTodos([...canceledTodos, canceledTodo]); // Add canceled todo to the canceledTodos list

    setTodo(updatedTodos);

    setTimeout(() => {
      const newTodos = todo.filter((todo, idx) => idx !== index);
      setTodo(newTodos);
    }, 1000);
  };

  console.log(setTodo);

  return (
    <>
    <div>
        <h1>ToDo List</h1>
        <textarea id="myTextarea" name="textarea" rows="1" cols="50" value={newTodo} onChange={(e)=>setNewToDo(e.target.value)}></textarea>
        <br/>
        <button type="button" className="btn btn-success" onClick={AddTodo}>Add To List</button>
        <br/>

        
    </div>
    <div className="card" >
      <ul className="list-group list-group-flush">
        {todo.map((todo, index)=> (
          <li className="list-group-item" key={index}><input
          type="radio"
          onClick={() => handleCancelTodo(index)}
          disabled={todo.canceled}
        /> &nbsp; 
        <span   style={{ textDecoration: todo.canceled ? 'line-through' : 'none' }} />        
        {todo.text.toUpperCase()}
        </li>
        ))}
      </ul>
    </div>
    <div className="card" >
        <h2>Done List</h2>
        <ul className="list-group list-group-flush">
          {canceledTodos.map((todo, index) => (
            <li className="list-group-item" key={index}>
              <span style={{ textDecoration: 'line-through' }}>
              {todo.text.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ToDo