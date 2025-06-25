import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './ui/pages/Home.jsx';
import Login from './ui/pages/Login.jsx';
import Register from './ui/pages/Register.jsx';
import Dashboard from './ui/pages/Dashboard.jsx';


function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/habits" element={<div>Habits</div>}/>
                <Route path="/login" element={<Login></Login>}/>
                <Route path="/register" element={<Register></Register>}/>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
                <Route path="/todos" element={<div>Todos</div>}/>
                <Route path="/goals" element={<div>Goals</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
