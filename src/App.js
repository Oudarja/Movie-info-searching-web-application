import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Registration from './Component/Registration';

const App = () => {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </div>
  )
}

export default App
