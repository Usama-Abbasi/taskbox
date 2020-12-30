import React from 'react';
import './App.css';
import AddTask from './components/Task/addTask';
import InboxScreen from './components/InboxScreen/InboxScreen';
function App() {
  return (
    <div className="App">
       <AddTask/>
      <h1 className="title">Taskbox</h1>
      <InboxScreen />
     
    </div>
  );
}

export default App;
