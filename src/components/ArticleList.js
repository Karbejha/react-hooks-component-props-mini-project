import React from "react";
import Article from "./Article";
import App from "./App";

function ArticleList({ posts }) {
    const articles = posts.map((post, i) =>
        <Article title={post.title} date={post.date} preview={post.preview} key={i}/>
    )

    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;