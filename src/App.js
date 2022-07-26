import { useState } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      username: "syed_.hussain",
      caption: "Instagram redesign",
      imageUrl:
        "https://cdn.dribbble.com/users/993809/screenshots/15379093/media/28ecbb5086794a803c5bc74743713072.png?compress=1&resize=1000x750&vertical=top",
    },
    {
      id: 2,
      username: "Moien Esmaelli",
      caption: "Instagram website redesign",
      imageUrl:
        "https://cdn.dribbble.com/users/3205009/screenshots/13971806/media/a468e2dbf49b1d5ed7eba237f07cd057.png?compress=1&resize=800x600&vertical=top",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <h3>Instagram V2</h3>
      </div>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
