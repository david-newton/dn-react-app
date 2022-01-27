import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDoList from './todolist/ToDoList';
import ClockAngle from './clockAngle/ClockAngle';

const App = () => (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ToDoList />} />
                <Route path="/clockangle" element={<ClockAngle />} />
            </Routes>
        </BrowserRouter>
    </div>
)

export default App;