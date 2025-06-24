import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/habits" element={<div>Habits</div>} />
        <Route path="/todos" element={<div>Todos</div>} />
        <Route path="/goals" element={<div>Goals</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
