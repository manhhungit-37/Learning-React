import Button from "./Button";

export default function Composition({ todo, handleDeleteTodo }) {
    return (
        <>
            <div>{todo.text}</div>
            <Button type="button" onClick={() => handleDeleteTodo(todo.id)} value="Delete" />
        </>
    )
}