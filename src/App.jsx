import './App.css';
import { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';
import useTodos from './hooks/useTodos';

const App = () => {

  const [todoItem, setTodoItem] = useState('');
  
  const {todoList, addTodo, deleteTodo, toggleChecked} = useTodos();

  const handleInputChange = (e) => {
    setTodoItem(e.target.value);
  }

  const handleAddTodo = () => {
    addTodo(todoItem);  
    setTodoItem('');
  }    

  useEffect(() => {
    console.log(todoList);
  }, [todoList])

  return (
    <div>
      <input onChange={handleInputChange} type="text" value={todoItem} />
      <button onClick={handleAddTodo}>Add Todo</button>
      {todoList.map(item => (
        <TodoItem key={item.id} item={item} toggleChecked={toggleChecked} onDelete={deleteTodo}  />
      ))}
    </div>
  );
}

export default App;