import React from 'react';
import SignUp from './components/signup'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='stars'></div>
      <div className='twinkling'></div>
      <div className='clouds'></div>
      <div className="signUpContainer">
        <SignUp />
      </div>
    </div>
  );
}

export default App;
