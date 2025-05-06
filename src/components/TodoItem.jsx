const TodoItem = ({ id, item, setTodoList }) => {

    const handleDeleteButton = (id) => {
        console.log(id);
        setTodoList(prev => prev.filter((_, index) => index !== id));
    }

    const handleCheckBox = (e, id) => {
        setTodoList(prev => prev.map((item, index) => index === id ? { ...item, checked: e.target.checked } : item));
    }

    return (
        <div>
            <span style={{ color: item.checked ? 'green' : 'black' }}>
                {item.text}
            </span>
            <input onChange={(e) => handleCheckBox(e, id)} type="checkbox" />
            <button onClick={() => handleDeleteButton(id)}>Delete item</button>
        </div>
    );
}

export default TodoItem;
