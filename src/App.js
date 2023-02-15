import React, { useState } from 'react';
import Header from './components/Header';
import Form  from './components/From';
import TodoList  from './components/TodoList';
import './App.css';


const App = () => {
  const [input, setInput]= useState("");
  const [todos, setTodos]= useState([]);
  const [editTodo] = useState(null);

  
  return (

    <div className='container'>
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
       <Form 
       input = {input}
       setInput={setInput}
       todos={todos}
       setTodos={setTodos}
       editTodo={editTodo}
       setEditTodo={editTodo}

       />
       </div>
       <TodoList todos={todos} setTodos={setTodos} 
       setEditTodo={editTodo}/>
      </div>
      

    </div>
   
  );
}

export default App;
