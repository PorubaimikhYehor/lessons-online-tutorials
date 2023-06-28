import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/login-form/login-form'
import Sidebar from './components/sidebar/sidebar'
import Layout from './components/layout/layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/login-form" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
