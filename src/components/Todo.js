import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Composition from "./Composition"

export default function Todo() {
    const [todos, setTodos] = useState([
        {
        id: 1,
        text: "Hung",
        }
    ])
    const [text, setText] = useState("");

    // function handleAddRandomTodo() {
    //   const newTodo = {
    //     id: Date.now(),
    //     text: Math.random(),
    //   }
    //   setTodos([...todos, newTodo]);
    // }

    function handleAddTodo(e) {
        const newTodo = {
            id: Date.now(),
            text,
        }
        setTodos([...todos, newTodo]);
        setText("");
    }

    function handleDeleteTodo(id) {
        const newTodos = todos.filter(todo => todo.id !== id) ;
        setTodos(newTodos);
    }

    return (
        <>
            <h1>Todos</h1>
            <Input type="text" placeholder="Enter your todo" value={text} onChange={event => setText(event.target.value)} />
            <Button type="button" onClick={handleAddTodo} value="Add New Todo" />
            {todos.length > 0 && (
            todos.map(todo => {
                return <Composition key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />
            })
            )}
        </>
    )
}