
import React, {  } from "react";
// import logo from './logo.svg';
import './App.css';

import { Login } from './Login';
// import { Register } from './Register';

function App() {
// const [ ] = useState ('login');

// const toggleForm = (formName) =>
// setCurrentForm (formName);

  return (
    <div className="App">
    {
 <Login onFormSwitch = { "toggleForm" } />
    }
    </div>
  );
}

export default App;
