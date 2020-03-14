import React from 'react';

function App() {
  return (
    <div className="app">
      <header className="header">
          <h1>Todo List</h1>
      </header>
      <main>
        <div className="container">
          <div className="todo-list">
            <div className="form">
              <input type="text" placeholder="input TODO" />
              <button>Submit</button>
            </div>
            <div className="list">
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
