import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Register from './Register';
import ProfilePage from './Profile';
import Main from './root';
import ButtomAppBar from './AppBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ButtomAppBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
