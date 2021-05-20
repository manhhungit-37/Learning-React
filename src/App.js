import ReactBoxes from "./ReactBoxes";
import Comment from "./components/Comment";

function App() {
  const comment = {
    date: new Date(),
    text:"I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  }
  
  return (
    <div className="App">
      <ReactBoxes />
      <Comment
        comment={comment}
      />
    </div>
  );
}

export default App;
