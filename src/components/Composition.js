import Button from "./Button";

export default function Composition({ todo, handleDeleteTodo }) {
    return (
        <>
            <div>{todo.text}</div>
            <Button type="button" onClick={(id) => handleDeleteTodo(todo.id)} value="Delete" />
        </>
    )
}