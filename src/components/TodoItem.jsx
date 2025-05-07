const TodoItem = ({item, toggleChecked, onDelete}) => {      

    return ( 
        <div>
            <span className={item.checked ? 'todo-checked' : ''}>{item.text}</span>
            <input 
            type="checkbox" 
            checked={item.checked} 
            onChange={(e) => toggleChecked(item.id, e.target.checked)} />
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
     );
}
 
export default TodoItem;