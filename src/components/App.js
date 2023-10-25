import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header header={blogData.name} />
      <ArticleList posts={blogData.posts} />
      <aside></aside>
    </div>
  );
}

export default App;
