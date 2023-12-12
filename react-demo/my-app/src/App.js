import React from "react";
import "./App.css";
const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://atlas-content-cdn.pixelsquid.com/assets_v2/258/2582064895679796361/jpeg-600/G03.jpg?modifiedAt=1" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
        <img src='https://i.pinimg.com/564x/87/3a/67/873a67710fef478574d0963973541aae.jpg'/>
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New post
      </div>
      <div>
        <div>post 1</div>
        <div>post 2
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default App;
