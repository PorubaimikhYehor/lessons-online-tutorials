import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/login-form/login-form'
import Sidebar from './components/sidebar/sidebar'
import Layout from './components/layout/layout'
import { AnalogClock } from './components/analog-clock/analog-clock'
import { NavigationMenu } from './components/navigation-menu/navigation-menu'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/login-form" element={<LoginForm />} />
          <Route path="/analog-clock" element={<AnalogClock />} />
          <Route path="/navigation-menu" element={<NavigationMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
