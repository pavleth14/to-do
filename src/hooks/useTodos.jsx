import { useState } from "react";

const useTodos = () => {

    const [todoList, setTodoList] = useState([]);

    const addTodo = (todoItemText) => {
        if(todoItemText.trim() !== '') {
            setTodoList(prev => [...prev, {text: todoItemText, checked: false, id: Date.now()}]);
        }
    }

    const deleteTodo = (id) => {
        setTodoList(prev => prev.filter(item => item.id !== id));
    }

    const toggleChecked = (id, checked) => {
        setTodoList(prev => prev.map(item => item.id === id ? {...item, checked} : item));
    }

    return {todoList, addTodo, deleteTodo, toggleChecked};
}
 
export default useTodos;