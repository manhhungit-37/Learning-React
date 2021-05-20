import ReactBoxes from "./ReactBoxes";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      <ReactBoxes />
      <Comment
        comment={{
          date: new Date(),
          text:"I hope you enjoy learning React!",
          author: {
            name: "Hello Kitty",
            avatarUrl: "https://placekitten.com/g/64/64",
          },
        }}
      />
    </div>
  );
}

export default App;
