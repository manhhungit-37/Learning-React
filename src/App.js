import { useState } from "react"
import Comment from "./components/Comment";
import HookState from "./components/HookState";
import ConditionalRendering from "./components/ConditionalRendering";
import UserGreeting from "./components/UserGreeting";
import GuestGreeting from "./components/GuestGreeting";
import Input from "./components/Input";
import Button from "./components/Button";
import Composition from "./components/Composition";
import Greeting  from "./components/Greeting";
import MyDiv from "./components/MyDiv";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Hung",
    }
  ])
  const [text, setText] = useState("");
  const comment = {
    date: new Date(),
    text:"I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  }

  // function handleAddRandomTodo() {
  //   const newTodo = {
  //     id: Date.now(),
  //     text: Math.random(),
  //   }
  //   setTodos([...todos, newTodo]);
  // }

  function handleAddTodo() {
    const newTodo = {
      id: Date.now(),
      text,
    }
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(id) {
    const newTodos = todos.filter(todo => todo.id !== id) ;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <Comment comment={comment}/>
      <HookState /> 
      <ConditionalRendering />
      {!isLogged && <GuestGreeting header="Please sign in" handleLogin={() => setIsLogged(!isLogged)} />}
      {isLogged && <UserGreeting header="Welcome to" name="Hung" handleLogout={() => setIsLogged(!isLogged)} />}

      <h1>Add Todo</h1>
      <Input type="text" placeholder="Enter your todo" onChange={event => setText(event.target.value)} />
      <Button type="button" onClick={handleAddTodo} value="Add New Todo" />
      {todos.length > 0 && (
        todos.map(todo => {
          return <Composition key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />
        })
      )}

      <h1>Greeting</h1>
      <Greeting />

      <h1>My Div</h1>
      <MyDiv />
    </div>
  );
}

export default App;
