import { useEffect, useRef, useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem';

function App() {

  const inputRef = useRef();

  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputType = (e) => {
    setNewTodo(e.target.value);
  }

  const handleAddTodo = () => {
    if (newTodo !== '') {
      setTodoList(prev => [...prev, { text: newTodo, checked: false }]);
      setNewTodo('');
    }
  }

  useEffect(() => {
    console.log(todoList);
    inputRef.current.focus();
  }, [todoList]);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={newTodo}
        onChange={(e) => handleInputType(e)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {todoList.map((item, index) => (
        <TodoItem key={index} id={index} item={item} setTodoList={setTodoList} />
      ))}
    </>
  )
}

export default App;